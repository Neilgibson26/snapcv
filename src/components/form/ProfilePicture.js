import {
  Flex,
  IconButton,
  Spacer,
  Button,
  Heading,
  Image,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";

function ProfilePicture({
  formData,
  updateFormData,
  uploadDataToDatabase,
  goNext,
  goBack,
}) {
  let myWidget = useRef(null);

  useEffect(() => {
    myWidget.current = window.cloudinary.createUploadWidget(
      {
        cloudName: "cv-builder",
        uploadPreset: "profile",
        sources: ["local"],
        maxFiles: 1,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info.url);
          const copy = { ...formData };
          copy.profileImg = result.info.url;
          updateFormData(copy);
        }
      }
    );
  }, []);

  return (
    <Flex
      justify="center"
      w="50%"
      p="10"
      mb="10"
      direction="column"
      boxShadow="dark-lg"
      borderRadius="10px"
    >
      <Flex
        w="100%"
        minH="50vh"
        flexDir="column"
        justify="space-evenly"
        align="center"
      >
        <Heading>Upload Profile Picture</Heading>
        <Button
          my="2"
          onClick={() => {
            myWidget.current.open();
          }}
        >
          {formData.profileImg !== "" ? "Update Image" : "Choose image"}
        </Button>
        {formData.profileImg !== "" ? (
          <Image
            src={formData.profileImg}
            w="200px"
            h="200px"
            objectFit="cover"
            border="1px"
            borderRadius="100"
          />
        ) : null}
      </Flex>

      <Flex justify="center">
        <IconButton placeContent="left" m="2vw" onClick={goBack}>
          <TiArrowLeftOutline fontSize="5vh" />
        </IconButton>
        <Spacer />
        <Button
          m="2vw"
          fontSize="3vh"
          alignContent="left"
          onClick={() => {
            uploadDataToDatabase();
          }}
        >
          Save
        </Button>
        <IconButton placeContent="right" m="2vw" onClick={goNext}>
          <TiArrowRightOutline fontSize="5vh" />
        </IconButton>
      </Flex>
    </Flex>
  );
}

export default ProfilePicture;
