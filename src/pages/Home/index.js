import { Box, Flex, Skeleton, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import WhiteNavigationBar from "../../components/WhiteNavigationBar";

function Home({ currentUser, setCurrentUser }) {
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");

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
        <WhiteNavigationBar
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />

        <Skeleton
          w="90%"
          mt="8"
          startColor="#F7CD6B"
          endColor="yellow.300"
          height="70vh"
        />

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
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;
