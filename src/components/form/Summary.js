import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Spacer,
  Text,
  Textarea,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import useMediaRecorder from "@wmik/use-media-recorder";
import VideoPreview from "./VideoPreview";
import getBlobDuration from "get-blob-duration";
import { useEffect, useState } from "react";
import { storage } from "../../utils/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  NOT_UPLOADING,
  UPLOADING_COMPLETE,
  UPLOADING_STARTED,
} from "../../utils/Constants";
import VideoPlayer from "./VideoPlayer";

function Summary({ formData, updateFormData, goNext, goBack, currentUser }) {
  const toast = useToast();

  const [isOnmobile] = useMediaQuery("(max-width: 768px)");
  const [isRecording, setIsRecording] = useState(false);
  const [firstRecordComplete, setfFrstRecordComplete] = useState(false);
  const [recording, setRecording] = useState(false);
  const [timePassed, setTimePassed] = useState(0);
  const [isUploading, setIsUploading] = useState(NOT_UPLOADING);

  let { mediaBlob, stopRecording, liveStream, startRecording } =
    useMediaRecorder({
      recordScreen: false,
      blobOptions: { type: "video/webm" },
      mediaStreamConstraints: { audio: true, video: true },
      onStop: (blob) => {
        (async function () {
          if (!blob) return;
          setIsRecording(false);
          const duration = await getBlobDuration(blob);
          console.log(duration + " seconds");
        })();
      },
      onStart: () => {
        setTimePassed(0);
        setIsRecording(true);
        setRecording(true);
        setfFrstRecordComplete(true);
      },
    });

  const uploadVideo = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: "snapshotcv",
        uploadPreset: "summaryVideo",
        sources: ["local"],
        showAdvancedOptions: false,
        cropping: false,
        multiple: false,
        defaultSource: "local",
        options: {
          resourceType: "video",
        },
        resourceType: "video",
        clientAllowedFormats: ["video"],
        styles: {
          palette: {
            window: "#ffffff",
            sourceBg: "#f4f4f5",
            windowBorder: "#90a0b3",
            tabIcon: "#000000",
            inactiveTabIcon: "#555a5f",
            menuIcons: "#555a5f",
            link: "#0433ff",
            action: "#339933",
            inProgress: "#0433ff",
            complete: "#339933",
            error: "#cc0000",
            textDark: "#000000",
            textLight: "#fcfffd",
          },
          fonts: {
            default: null,
            "'Fira Sans', sans-serif": {
              url: "https://fonts.googleapis.com/css?family=Fira+Sans",
              active: true,
            },
          },
        },
      },
      (err, info) => {
        if (!err) {
          console.log("Upload Widget event - ", info);
        }
      }
    );
  };

  useEffect(() => {
    if (formData.video !== "") {
      setfFrstRecordComplete(true);
    }
    return () => {
      stopRecording();
    };
  }, []);

  useEffect(() => {
    let interval = -1;

    interval = setInterval(() => {
      if (isRecording) {
        setTimePassed(timePassed + 1);

        if (timePassed >= 19) {
          stopRecording();
        }
      }
    }, 1000);

    return () => (interval !== -1 ? clearInterval(interval) : "");
  }, [isRecording, stopRecording, timePassed]);

  const checkValidInput = () => {
    if (!mediaBlob && formData.video === "") {
      toast({
        title: `Please record/upload a 20s video`,
        variant: "left-accent",
        status: "error",
        position: "top",
        isClosable: false,
      });
      return false;
    }

    if (mediaBlob) {
      const storageRef = ref(storage, "userVideos/" + currentUser.uid);
      setIsUploading(UPLOADING_STARTED);
      // 'file' comes from the Blob or File API
      uploadBytes(storageRef, mediaBlob).then((snapshot) => {
        console.log("Uploaded a blob or file!", snapshot);
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          const copy = { ...formData };
          copy.video = downloadURL;
          updateFormData(copy);
          setIsUploading(UPLOADING_COMPLETE);
        });
      });
      return false;
    }

    return isUploading === NOT_UPLOADING;
  };

  useEffect(() => {
    if (isUploading === UPLOADING_COMPLETE) {
      goNext();
    } else if (isUploading === UPLOADING_STARTED) {
      alert("Uploading video.... please wait");
    }
  }, [goNext, isUploading]);

  return (
    <Flex
      justify="center"
      w={isOnmobile ? "100%" : "50%"}
      p="10"
      mb="10"
      bg="white"
      direction="column"
      boxShadow="2xl"
      borderRadius="10px"
    >
      <Heading mb="6" size="md" textAlign="center">
        Give a summary about yourself in 20 seconds
      </Heading>
      <Text textAlign="center" mb="4">
        <b>Here's some ideas:</b>
        <br />
        - Give an introduction <br />
        - Talk about your past experiences
        <br /> - Motivation to apply
      </Text>
      <Button onClick={uploadVideo} _hover={{ opacity: 0.7 }}>
        Upload Video
      </Button>
      <Button
        my="4"
        onClick={isRecording ? stopRecording : startRecording}
        bg={isRecording ? "red.400" : "#edf2f6"}
        _hover={{ opacity: 0.7 }}
      >
        {isRecording
          ? "Stop Recording"
          : firstRecordComplete
          ? "Retake video"
          : "Record Video"}
      </Button>
      {isRecording ? <Text>Time Left: {20 - timePassed} seconds</Text> : null}
      {isRecording ? (
        <VideoPreview stream={liveStream} />
      ) : (
        <VideoPlayer
          srcBlob={mediaBlob}
          videoUrl={formData.video}
          recStarted={recording}
        />
      )}

      <Flex w="100%" justify="space-between" mt="8">
        <Button
          onClick={goBack}
          bg="#F7CD6B"
          leftIcon={<ChevronLeftIcon fontSize="2xl" />}
        >
          Back
        </Button>

        <Spacer />

        <Button
          bg="#F7CD6B"
          rightIcon={<ChevronRightIcon fontSize="2xl" />}
          onClick={() => {
            if (checkValidInput()) {
              goNext();
            }
          }}
        >
          Next
        </Button>
      </Flex>
    </Flex>
  );
}

export default Summary;
