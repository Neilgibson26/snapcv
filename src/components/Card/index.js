import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      h="300px"
      w="300px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mx="10"
      my="10"
      _hover={{ opacity: 0.7 }}
      onClick={() => {
        navigate("/profiles/" + props.id);
      }}
    >
      <Flex flexDir="column" flexWrap="wrap">
        <Box
          objectFit="contain"
          w="100%"
          borderRadius="lg"
          h="200px"
          overflow="hidden"
        >
          <video src={props.video} width={520} height={480} autoPlay muted />
        </Box>
        <Flex flexWrap="wrap" justify="space-evenly" p="2">
          <Text mx="1" as="b">
            &bull; {props.fname} {props.lname}{" "}
          </Text>
          <Text mx="1" as="b">
            &bull;{props.city}, {props.country}
          </Text>
        </Flex>

        {props.summary ? (
          <Flex flexWrap="wrap" px="1" justify="center" align="center" w="100%">
            <Text
              fontFamily="Square Peg"
              fontSize="1xl"
              textAlign="center"
              noOfLines={2}
            >
              {props.summary}
            </Text>
          </Flex>
        ) : null}
      </Flex>
    </Box>
  );
}

export default Card;
