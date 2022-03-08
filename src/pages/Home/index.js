import { Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";

function Home() {
  const navigate = useNavigate();
  return (
    <Flex
      minH="100vh"
      bg="#f4f4f4"
      flexDir="column"
      justify="center"
      align="center"
    >
      <Flex h="80vh" w="80vw">
        <Flex w="50%" align="center" justify="center">
          <Flex
            h="50%"
            w="70%"
            justify="center"
            align="center"
            bg="#EAD657"
            borderRadius="3xl"
            margin="2px"
            _hover={{
              transform: "scale(1.1)",
              shadow: "2xl",
            }}
            onClick={() => {
              navigate("/Apply");
            }}
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
            _hover={{
              transform: "scale(1.1)",
              shadow: "2xl",
            }}
            onClick={() => {
              navigate("/Hire");
            }}
          >
            <Text fontSize="3xl" as="em">
              Hire Someone
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex w="100%" justify="center" align="center">
        <Flex w="70%" justify="center" align="center">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/eSs68R4zhLI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            autoplay
          ></iframe>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;
