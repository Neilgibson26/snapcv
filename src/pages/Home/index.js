import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Flex minH="100vh" bg="#f4f4f4" flexDir="column">
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
      <Flex h="80vh" bg="white">
        <Flex w="50%" align="center" justify="center">
          <Flex
            h="70%"
            w="70%"
            bg="blue"
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
