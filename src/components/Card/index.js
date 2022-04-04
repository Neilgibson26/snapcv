import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  return (
    <Box
      h="40vh"
      w="20vw"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mx="10"
      my="10"
      _hover={{ opacity: 0.7 }}
      onClick={() => {
        navigate("/profile");
      }}
    >
      <Flex flexDir="column" flexWrap="wrap">
        <Box objectFit="contain" w="100%" borderRadius="lg">
          <Image
            w="100%"
            h="100%"
            alt="Profile"
            src="https://media.istockphoto.com/photos/pleasant-young-indian-woman-freelancer-consult-client-via-video-call-picture-id1300972573?s=612x612"
            objectFit="contain"
          ></Image>
        </Box>
        <Flex flexWrap="wrap" justify="space-evenly" p="2">
          <Text mx="1" as="b">
            &bull; Neil Gibson &bull;{" "}
          </Text>
          <Text mx="1" as="b">
            Dublin &bull;
          </Text>
          <Text mx="1" as="b">
            {" "}
            Ireland &bull;
          </Text>
        </Flex>
        <Flex flexWrap="wrap" px="2">
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
