import { Flex, Image, Text, AspectRatio } from "@chakra-ui/react";
import React from "react";
import NavigationBar from "../../components/NaviagtionBar";

function Home() {
  return (
    <Flex minH="100vh" bg="#f4f4f4" flexDir="column">
      <NavigationBar />
      <Flex h="80vh" bg="#f4f4f4">
        <Flex h="100%" w="50%" align="center" justify="center">
          <Flex
            h="50%"
            w="70%"
            justify="center"
            align="center"
            bg="#EAD657"
            borderRadius="3xl"
            margin="2px"
          >
            <Text fontSize="3xl" as="em">
              Get Hired
            </Text>
          </Flex>
        </Flex>
        <Flex h="100%" w="50%" align="center" justify="center">
          <Flex
            h="50%"
            w="70%"
            bg="#89CFF0"
            justify="center"
            align="center"
            borderRadius="3xl"
          >
            <Text fontSize="3xl" as="em">
              Hire Someone
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex w="100%" justify="center" align="center">
        <Flex w="70%" justify="center" align="center" minH="25vh">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_tQtfkce3Dc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;
