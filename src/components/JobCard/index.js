import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdLocationOn, MdWork } from "react-icons/md";

function JobCard(props) {
  const navigate = useNavigate();
  return (
    <Box
      p="3"
      minH="20vh"
      w="25vw"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mx="10"
      my="10"
      _hover={{ opacity: 0.7 }}
    >
      <Flex flexDir="column" flexWrap="wrap">
        <Text fontSize="xs" color="gray.500">
          Company Name
        </Text>
        <Text fontSize="xl" as="em">
          Job Role/Title
        </Text>
        {/* <Flex flexWrap="wrap" justify="space-evenly" p="2">
          <Text mx="1" as="b">
            &bull;
          </Text>
          <Text mx="1" as="b">
            &bull;
          </Text>
          <Text mx="1" as="b">
            {" "}
            &bull;
          </Text>
        </Flex> */}
        <Flex my="2">
          <Button
            _hover={{}}
            w="30%"
            fontSize="xx-small"
            mx="2"
            leftIcon={<MdWork />}
          >
            Part-Time
          </Button>{" "}
          <Button
            bg="gray.200"
            _hover={{}}
            leftIcon={<MdLocationOn />}
            w="30%"
            fontSize="xx-small"
            mx="2"
          >
            Location
          </Button>
          <Button _hover={{}} bg="gray.300" w="30%" fontSize="xx-small" mx="2">
            Sector
          </Button>
        </Flex>
        <Text>
          a brief summary of the job and what they will be expe ted to do
          wiuthin the job
        </Text>

        {/* {props.summary ? (
          <Flex flexWrap="wrap" px="2">
            <Text>{props.summary}</Text>
          </Flex>
        ) : null} */}
      </Flex>
    </Box>
  );
}

export default JobCard;
