import { Box, Flex, Skeleton, Text, useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import WhiteNavigationBar from "../../components/WhiteNavigationBar";

function Home() {
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();

  return (
    <Flex
      bg="#F7CD6B"
      w="100%"
      minH="100vh"
      flexDir="column"
      flexWrap="wrap"
      justify="center"
      align="center"
      p={isOnmobile ? "8" : "16"}
      borderRadius="sm"
    >
      <Flex
        minH="80vh"
        bg="white"
        flexDir="column"
        justify="center"
        align="center"
        w="100%"
        shadow="2xl"
      >
        <WhiteNavigationBar />

        <Skeleton
          w="90%"
          mt="8"
          startColor="#F7CD6B"
          endColor="yellow.300"
          height="70vh"
        />

        <Flex h="80vh" w="100vw" align="center" justify="center">
          <Flex h="100%" w="40%" align="center" justify="center">
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
                navigate("/apply");
              }}
            >
              <Text fontSize="3xl" as="em">
                Get Hired
              </Text>
            </Flex>
          </Flex>
          <Flex h="100%" w="40%" align="center" justify="center">
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
                navigate("/explore");
              }}
            >
              <Text fontSize="3xl" as="em">
                Explore jobs
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex w="100%" justify="center" align="center">
          <Flex w="70%" justify="center" align="center">
            <Box
              w="100%"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              my="10"
            >
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/eSs68R4zhLI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                autoplay
              ></iframe>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;
