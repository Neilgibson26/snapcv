import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function Card(props) {
  return (
    <Box
      h="50vh"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="2"
      mx="10"
      my="10"
    >
      <Flex flexDir="column" flexWrap="wrap">
        <Box h="30vh" objectFit="cover">
          <Image
            borderRadius="lg"
            w="100%"
            h="100%"
            alt="Profile"
            src="https://media.istockphoto.com/photos/pleasant-young-indian-woman-freelancer-consult-client-via-video-call-picture-id1300972573?s=612x612"
            objectFit="contain"
          ></Image>
        </Box>
        <Flex flexWrap="wrap" justify="space-evenly">
          <Text mx="2" as="b">
            Neil Gibson &bull;{" "}
          </Text>
          <Text mx="2" as="b">
            Dublin &bull;
          </Text>
          <Text mx="2" as="b">
            {" "}
            Ireland{" "}
          </Text>
        </Flex>
        <Flex flexWrap="wrap">
          <Text>
            hcjhdvb djhv jdhv ju cb dvjhd v dv dgc dh chvd hvd vhvads vhvdvhvdcv
            dch dhvc vha cvhda ch dhc adhc h
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Card;
