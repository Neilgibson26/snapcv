import {
  Button,
  Flex,
  IconButton,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";
import React from "react";
import EducationModel from "./EducationModel";
import TextDesign from "./TextDesign";
function Education({
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
        {formData.education.map((item) => {
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
              <Flex m="2">
                <TextDesign
                  text="Institute Name: "
                  content={item.institutionName}
                />
              </Flex>
              <Flex justify="center" direction="row" m="2">
                <TextDesign text="Start Date: " content={item.startDate} />
                <Spacer />
                <TextDesign text="End Date: " content={item.endDate} />
                <Spacer />
                <TextDesign text="Current Year: " content={item.currentYear} />
              </Flex>
              <Flex justify="center" direction="row" p="5" m="2">
                <TextDesign text="Course: " content={item.course} />
                <Spacer />
                <TextDesign text="Score: " content={item.score} />
              </Flex>
              <TextDesign text="Modules: " content={item.details.modules} />
              <TextDesign
                text="Extra Curricular Activities: "
                content={item.details.extra}
              />
            </Flex>
          );
        })}
      </Flex>
      <Button justify="center" w="90%" m="2vw" fontSize="lg" onClick={onOpen}>
        Add Education
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
      <EducationModel
        formData={formData}
        updateFormData={updateFormData}
        onClose={onClose}
        onOpen={onOpen}
        isOpen={isOpen}
      />
    </Flex>
  );
}

export default Education;
