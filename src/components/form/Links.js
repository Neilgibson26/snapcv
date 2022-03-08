import {
  Flex,
  IconButton,
  Spacer,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";
import React from "react";
import LinksText from "./LinksText";
import LinksModel from "./LinksModel";

function Links({
  formData,
  updateFormData,
  goBack,
  goNext,
  uploadDataToDatabase,
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
        {formData.links.map((item) => {
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
                <LinksText text="Name: " content={item.name} />
              </Flex>
              <Flex>
                <LinksText text="Link: " content={item.link} />
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <Button justify="center" w="90%" m="2vw" fontSize="lg" onClick={onOpen}>
        Add Link
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
          <TiArrowRightOutline fontSize="5vh" />
        </IconButton>
      </Flex>
      <LinksModel
        formData={formData}
        updateFormData={updateFormData}
        onClose={onClose}
        onOpen={onOpen}
        isOpen={isOpen}
      />
    </Flex>
  );
}

export default Links;
