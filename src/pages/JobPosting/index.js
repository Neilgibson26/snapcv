import { Button, Flex, Text } from "@chakra-ui/react";
import { React, useEffect, useState } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { EmailIcon, EditIcon } from "@chakra-ui/icons";
import { getUser } from "../../utils/firebaseFuncs";
import { useNavigate, useParams } from "react-router-dom";
import { getJob } from "../../utils/firebaseFuncs";

function JobPosting({ currentUser, setCurrentUser }) {
  const [job, setJob] = useState(null);
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");
  const { id } = useParams();
  const getExistingJob = (data) => {
    if (data) {
      setJob(data);
      console.log("Job schema is: ", data);
    }
  };
  console.log("The schema is: ", job);

  useEffect(() => {
    if (currentUser) {
      getJob(!id ? currentUser.uid : id, getExistingJob);
    }
    return () => {};
  }, [currentUser, id]);

  const navigate = useNavigate();

  return job ? (
    <Flex
      w="100vw"
      alignItems="center"
      justify="center"
      flexDir="column"
      bg="#F7CD6B"
    >
      <Flex
        flexDir="column"
        w="80%"
        h="100%"
        justify="center"
        align="center"
        p="5"
        shadow="2xl"
        borderRadius="3xl"
        my="10"
        bg="white"
        pos="relative"
      >
        <Flex flexDir="column" justify="center" align="center">
          <Text as="b" fontSize="3xl" mt={isOnmobile ? "50px" : null}>
            {job.company.name}
          </Text>
          <Flex align="center" justify="center">
            <Text>{`${job.location.city}, ${job.location.country}`}</Text>
          </Flex>
        </Flex>
        {job.summary ? (
          <Flex w={isOnmobile ? "80%" : "50%"} align="center" flexDir="column">
            <Text fontSize="3xl" as="b">
              Summary
            </Text>
            <Text>{job.summary}</Text>
          </Flex>
        ) : null}
        <Flex align="center" justify="space-evenly" flexWrap="wrap" my="5">
          {job.skills.map((skill) => {
            return skill.selected ? (
              <Flex
                my="2"
                w="40"
                h="90"
                p="5"
                justify="center"
                align="center"
                flexWrap="wrap"
                bg="#F7CD6B"
                mx="5"
                borderRadius="2xl"
              >
                <Text textAlign="center">{skill.text}</Text>
              </Flex>
            ) : null;
          })}
        </Flex>

        <Button
          rightIcon={<EmailIcon />}
          colorScheme="teal"
          variant="solid"
          my="5"
        >
          {isOnmobile ? "Contact" : "Contact Employer"}
        </Button>
      </Flex>
    </Flex>
  ) : (
    <Flex>Loading ...</Flex>
  );
}

export default JobPosting;
