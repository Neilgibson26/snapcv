import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdLocationOn, MdWork } from "react-icons/md";

function JobCard({
  companyName,
  companyArea,
  jobRole,
  ratePay,
  city,
  country,
  summary,
}) {
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
          {companyName}
        </Text>
        <Text fontSize="xl" as="em">
          {jobRole}
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
            {city}, {country}
          </Button>
          <Button _hover={{}} bg="gray.300" w="30%" fontSize="xx-small" mx="2">
            {companyArea === "" ? "Sector" : companyArea}
          </Button>
        </Flex>
        <Text>{summary}</Text>

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
