import {
  Button,
  Flex,
  IconButton,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";
import React from "react";
import ExperienceModel from "./ExperienceModel";
import TextDesign from "./TextDesign";
function Experience({
  formData,
  updateFormData,
  uploadDataToDatabase,
  goBack,
  goNext,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      <Flex flexDir="column">
        {formData.experience.map((item) => {
          return (
            <Flex
              justify="center"
              direction="column"
              p="5"
              boxShadow="dark-lg"
              borderRadius="10"
              w="100%"
              my="2"
            >
              <Flex>
                <TextDesign text="Title: " content={item.title} />
              </Flex>
              <Flex>
                <TextDesign text="Organization: " content={item.org} />
              </Flex>
              <Flex justify="center" direction="row">
                <TextDesign text="Start Date: " content={item.startDate} />
                <Spacer />
                <TextDesign text="End Date: " content={item.endDate} />
                <Spacer />
                <TextDesign text="Type: " content={item.type} />
              </Flex>

              <Flex>
                <TextDesign text="Description: " content={item.description} />
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <Button justify="center" w="90%" m="2vw" fontSize="lg" onClick={onOpen}>
        Add Experience
      </Button>
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
          <TiArrowRightOutline fontSize="35px" />
        </IconButton>
      </Flex>
      <ExperienceModel
        formData={formData}
        updateFormData={updateFormData}
        onClose={onClose}
        onOpen={onOpen}
        isOpen={isOpen}
      />
    </Flex>
  );
}

export default Experience;
