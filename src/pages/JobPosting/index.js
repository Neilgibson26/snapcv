import { Button, Flex, Text } from "@chakra-ui/react";
import { React, useEffect, useState } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { EmailIcon, EditIcon } from "@chakra-ui/icons";
import { applyToJob, getUser } from "../../utils/firebaseFuncs";
import { useNavigate, useParams } from "react-router-dom";
import { getJob } from "../../utils/firebaseFuncs";

function JobPosting({ currentUser, setCurrentUser }) {
  const [job, setJob] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");
  const { id } = useParams();
  const navigate = useNavigate();

  const getExistingJob = (data) => {
    if (data) {
      setJob(data);
    }
  };

  const getExistingUser = (data) => {
    if (data) {
      setUserProfile(data);
    }
  };

  useEffect(() => {
    if (currentUser) {
      getJob(!id ? currentUser.uid : id, getExistingJob);
      getUser(currentUser.uid, getExistingUser);
    }
    return () => {};
  }, [currentUser, id]);

  return job ? (
    <Flex
      w="100vw"
      alignItems="center"
      justify="center"
      flexDir="column"
      bg="#F7CD6B"
      minH="100vh"
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
          <hr />
        </Flex>
        <Flex flexWrap="wrap" w="100%" align="center" justify="center" mt="5">
          <Flex w="100px" h="70" mx="5" flexDir="column" textAlign="center">
            <Text>Hours:</Text>
            <hr />
            {job.job.hours}
          </Flex>
          <Flex w="100px" h="70" mx="5" flexDir="column" textAlign="center">
            <Text>Pay:</Text>
            <hr />€{job.job.rate}
          </Flex>
          <Flex w="100px" h="70" mx="5" flexDir="column" textAlign="center">
            <Text>Sector:</Text>
            <hr />
            {job.job.area}
          </Flex>
        </Flex>
        {job.summary ? (
          <Flex
            w={isOnmobile ? "80%" : "50%"}
            align="center"
            flexDir="column"
            mb="5"
          >
            <Text fontSize="3xl" as="b">
              Summary
            </Text>
            <Text>{job.summary}</Text>
          </Flex>
        ) : null}
        <Flex
          flexDir="column"
          justify="center"
          align="center"
          textAlign="center"
        >
          <Text fontSize="3xl" as="b">
            Skills that would help
          </Text>
          <Flex align="center" justify="space-evenly" flexWrap="wrap" my="5">
            {job.skills.map((skill) => {
              return skill.selected ? (
                <Flex
                  my="2"
                  w="120px"
                  h="80px"
                  p="4"
                  justify="center"
                  align="center"
                  flexWrap="wrap"
                  bg="#F7CD6B"
                  mx="5"
                  borderRadius="2xl"
                  textAlign="center"
                >
                  <Text textAlign="center">{skill.text}</Text>
                </Flex>
              ) : null;
            })}
          </Flex>
        </Flex>

        <Button
          rightIcon={<EmailIcon />}
          colorScheme="teal"
          variant="solid"
          my="5"
          onClick={() => {
            if (userProfile) {
              applyToJob(userProfile, job);
              alert("Your profile as been sent to the employer. Good Luck!");
              navigate("/explore");
            } else {
              alert("Oops, try again. Something went wrong");
            }
          }}
        >
          Apply
        </Button>
      </Flex>
    </Flex>
  ) : (
    <Flex>Loading ...</Flex>
  );
}

export default JobPosting;
