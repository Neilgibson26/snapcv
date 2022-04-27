import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import WhiteNavigationBar from "../../components/WhiteNavigationBar";
import sample from "../../Assets/sample.mp4";

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
        <Flex
          align="center"
          justify="center"
          w="100%"
          p="5"
          textAlign="center"
          flexDir="column"
        >
          <Text
            fontFamily="Square Peg"
            fontSize={isOnmobile ? "4xl" : "6xl"}
            as="b"
          >
            <hr />
            Welcome to SnapshotCV <br />
          </Text>
          <Text
            fontFamily="Square Peg"
            fontSize={isOnmobile ? "3xl" : "5xl"}
            mb="5"
            as="b"
          >
            Where you can get yourself some casual work in a snap.
            <hr />
          </Text>
          <Text
            fontFamily="Square Peg"
            fontSize={isOnmobile ? "2xl" : "4xl"}
            mx={isOnmobile ? "2px" : "7px"}
          >
            {" "}
            "Here at SnapshotCV we provide a platform for you to present
            yourself in the form of a 20 second video to any employers out there
            seeking staff. These videos will allow you to show your personality
            to the hiring parties where you would not normally be able to do in
            a traditional cv format. For inspiration you should watch the video
            below as Immanuel runs us through a quick example."
          </Text>
        </Flex>
        <Flex w="100%" justify="center" align="center">
          <Flex w="70%" justify="center" align="center">
            <Box
              w="100%"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              my="10"
              bg="black"
              align="center"
            >
              <video
                width="400px"
                height="600px"
                src={sample}
                title="YouTube video player"
                frameBorder="0"
                controls
              ></video>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;
