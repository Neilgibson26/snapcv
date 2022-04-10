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
    >
      <Flex flexDir="column" flexWrap="wrap">
        <Box objectFit="contain" w="100%" borderRadius="lg">
          <video src={props.video} width={520} height={480} autoPlay muted />
        </Box>
        <Flex flexWrap="wrap" justify="space-evenly" p="2">
          <Text mx="1" as="b">
            &bull; {props.fname} {props.lname}{" "}
          </Text>
          <Text mx="1" as="b">
            &bull;{props.city}
          </Text>
          <Text mx="1" as="b">
            {" "}
            &bull;{props.country}
          </Text>
        </Flex>

        {/* {props.summary ? (
          <Flex flexWrap="wrap" px="2">
            <Text>{props.summary}</Text>
          </Flex>
        ) : null} */}
      </Flex>
    </Box>
  );
}

export default Card;
