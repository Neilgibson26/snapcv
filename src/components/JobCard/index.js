import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
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
  id,
}) {
  const navigate = useNavigate();
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      p="3"
      h={isOnmobile ? "250px" : "200"}
      w="400px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mx="10"
      my="10"
      _hover={{ opacity: 0.7 }}
      onClick={() => {
        navigate("/jobposting/" + id);
      }}
    >
      <Flex flexDir="column" flexWrap="wrap">
        <Text fontSize="xs" color="gray.500">
          {companyName}
        </Text>
        <Text fontSize="xl" as="em">
          {jobRole}
        </Text>
        <Flex
          my="2"
          flexWrap={isOnmobile ? "wrap" : null}
          align="center"
          justify="center"
          w="100%"
        >
          <Button
            _hover={{}}
            w="30%"
            fontSize="xx-small"
            m={isOnmobile ? "2" : null}
            mx={isOnmobile ? null : "2"}
            p="2"
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
            m={isOnmobile ? "2" : null}
            mx={isOnmobile ? null : "2"}
            p="2"
          >
            {city}, {country}
          </Button>
          <Button
            _hover={{}}
            bg="gray.300"
            w="30%"
            fontSize="xx-small"
            m={isOnmobile ? "2" : null}
            mx={isOnmobile ? null : "2"}
            p="2"
          >
            {companyArea === "" ? "Sector" : companyArea}
          </Button>
        </Flex>
        <Text
          textAlign={isOnmobile ? "center" : null}
          noOfLines={isOnmobile ? 2 : 3}
        >
          {summary}
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
