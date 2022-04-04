import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Spacer,
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

// import { ReactMediaRecorder } from "react-media-recorder";
// import VideoPreview from "./VideoPreview";
// import VideoRecorder from "react-video-recorder";

function Summary({ formData, updateFormData, goNext, goBack, currentUser }) {
  const toast = useToast();

  const [isOnmobile] = useMediaQuery("(max-width: 768px)");
  const [isRecording, setIsRecording] = useState(false);
  const [firstRecordComplete, setfFrstRecordComplete] = useState(false);

  let { error, status, mediaBlob, stopRecording, liveStream, startRecording } =
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
        setIsRecording(true);
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
    return () => {
      stopRecording();
    };
  }, []);

  const checkValidInput = () => {
    if (!mediaBlob) {
      toast({
        title: `Please record/upload a 20s video`,
        variant: "left-accent",
        status: "error",
        position: "top",
        isClosable: false,
      });
      return false;
    }

    const storageRef = ref(storage, "userVideos/" + currentUser.uid);

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, mediaBlob).then((snapshot) => {
      console.log("Uploaded a blob or file!", snapshot);
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
      });
    });

    return true;
  };

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

      {isRecording ? (
        <VideoPreview stream={liveStream} />
      ) : (
        <Player srcBlob={mediaBlob} />
      )}

      <FormControl p="1vw" id="first-name" isRequired>
        <FormLabel fontWeight="bold">Summary</FormLabel>
        <Textarea
          h="42vh"
          maxLength="500"
          placeholder="Upload Summary video 20 seconds / write short summary (optional)"
          value={formData && formData.summary ? formData.summary : ""}
          onChange={(e) => {
            const copy = { ...formData };
            copy.summary = e.target.value;
            updateFormData(copy);
          }}
        />
      </FormControl>
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

function Player({ srcBlob, audio }) {
  if (!srcBlob) {
    return null;
  }

  if (audio) {
    return <audio src={URL.createObjectURL(srcBlob)} controls />;
  }

  return (
    <video
      src={URL.createObjectURL(srcBlob)}
      width={520}
      height={480}
      controls
    />
  );
}

export default Summary;
