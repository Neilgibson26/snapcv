import { Box, Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdLocationOn, MdWork } from "react-icons/md";

function EmployerJobCard({ job }) {
  const navigate = useNavigate();
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      p="3"
      h={isOnmobile ? "250px" : "150px"}
      w="80%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mx="10"
      my="10"
      bg="white"
      shadow="lg"
      _hover={{ opacity: 0.7 }}
    >
      <Flex flexDir="column" flexWrap="wrap">
        <Text fontSize="xs" color="gray.500">
          {job.companyName}
        </Text>
        <Text fontSize="xl" as="em">
          {job.jobRole}
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
            _focus={{}}
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
            _focus={{}}
            _hover={{}}
            leftIcon={<MdLocationOn />}
            w="30%"
            fontSize="xx-small"
            m={isOnmobile ? "2" : null}
            mx={isOnmobile ? null : "2"}
            p="2"
          >
            {job.city}, {job.country}
          </Button>
          <Button
            _hover={{}}
            _focus={{}}
            bg="gray.300"
            w="30%"
            fontSize="xx-small"
            m={isOnmobile ? "2" : null}
            mx={isOnmobile ? null : "2"}
            p="2"
          >
            {job.companyArea === "" ? "Sector" : job.companyArea}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default EmployerJobCard;