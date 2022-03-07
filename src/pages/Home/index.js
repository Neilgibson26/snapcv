import { Flex } from "@chakra-ui/react";
import React from "react";

function Home() {
  return (
    <Flex minH="100vh" bg="#f4f4f4" flexDir="column">
      <Flex h="80vh" bg="white">
        <Flex w="50%" align="center" justify="center">
          <Flex
            h="70%"
            w="70%"
            justify="center"
            align="center"
            bg="#EAD657"
            borderRadius="3xl"
          >
            Get Hired
          </Flex>
        </Flex>
        <Flex h="100%" w="50%" align="center" justify="center">
          <Flex
            h="70%"
            w="70%"
            bg="blue"
            justify="center"
            align="center"
            borderRadius="3xl"
          >
            Hire Someone
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;
