import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Flex
      w="100%"
      h="15vh"
      bg="#EAD657"
      mt="50"
      justify="center"
      align="center"
    >
      <Text fontSize="4xl" as="em">
        &copy; SnapCV
      </Text>
    </Flex>
  );
}

export default Footer;
