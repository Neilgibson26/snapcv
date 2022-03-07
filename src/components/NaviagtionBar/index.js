import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Flex px="4" bg="#EAD657" justify="space-between" align="center">
      <Image w="120px" h="120px" src="https://i.imgur.com/h7IuUMm.png" />
      <Flex pr="8">
        <Link to="explore">
          <Text
            px="6"
            py="2"
            fontFamily="sans-serif"
            fontWeight="bold"
            borderRadius="lg"
            _hover={{ bg: "white" }}
          >
            Explore Jobs
          </Text>
        </Link>
        <Link to="apply">
          <Text
            px="6"
            py="2"
            fontFamily="sans-serif"
            fontWeight="bold"
            borderRadius="lg"
            _hover={{ bg: "white" }}
          >
            Post a Job
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}

export default NavigationBar;
