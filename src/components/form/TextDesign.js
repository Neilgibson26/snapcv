import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function TextDesign({ text, content }) {
  return (
    <Flex direction="row" m="2">
      <Text fontWeight="bold" mr="2" fontSize="sm">
        {text}
      </Text>
      <Text mr="2" fontSize="sm" maxW="420px">
        {content}
      </Text>
    </Flex>
  );
}

export default TextDesign;
