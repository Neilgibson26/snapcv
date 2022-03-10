import { Flex, IconButton, Spacer } from "@chakra-ui/react";
import React from "react";
import { TiArrowBack, TiArrowLeftOutline } from "react-icons/ti";

function FormNavigation({ goBack, goNext, checkValidInput }) {
  return (
    <Flex justify="center">
      <IconButton placeContent="left" m="2vw" onClick={goBack}>
        <TiArrowLeftOutline fontSize="5vh" />
      </IconButton>
      <Spacer />

      <IconButton
        m="2vw"
        onClick={() => {
          if (checkValidInput()) {
            goNext();
          }
        }}
      >
        <TiArrowBack fontSize="5vh" />
      </IconButton>
    </Flex>
  );
}

export default FormNavigation;
