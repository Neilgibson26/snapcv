import { Button, Flex, Text } from "@chakra-ui/react";
import { React, useEffect, useState } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { EmailIcon, EditIcon } from "@chakra-ui/icons";
import { getUser } from "../../utils/firebaseFuncs";
import { useNavigate, useParams } from "react-router-dom";

function Profile({ currentUser, setCurrentUser }) {
  const [data, setData] = useState(null);
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");
  const { id } = useParams();

  const getExistingUser = (data) => {
    if (data) {
      setData(data);
    }
  };

  useEffect(() => {
    if (currentUser) {
      getUser(!id ? currentUser.uid : id, getExistingUser);
    }
    return () => {};
  }, []);

  const navigate = useNavigate();

  return data ? (
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
        <Button
          rightIcon={<EmailIcon />}
          colorScheme="teal"
          variant="solid"
          my="6"
          pos="absolute"
          top="0"
          right="0"
          mr="10"
        >
          Contact User
        </Button>
        {id === currentUser.uid ? (
          <Button
            leftIcon={<EditIcon />}
            colorScheme="teal"
            variant="solid"
            my="6"
            pos="absolute"
            top="0"
            left="0"
            ml="10"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Edit
          </Button>
        ) : null}

        <Flex flexDir="column" justify="center" align="center">
          <Text as="b" fontSize="3xl">
            {data.name.fname + " " + data.name.lname}
          </Text>
          <Flex align="center" justify="center">
            <Text>{`${data.location.city}, ${data.location.country}`}</Text>
          </Flex>
        </Flex>
        <Box objectFit="contain" w="40%" h="40vh" borderRadius="lg" my="5">
          <video
            src={data.video}
            width="100%"
            height="100%"
            autoPlay
            controls
          />
        </Box>

        {data.summary ? (
          <Flex w="50%" align="center" flexDir="column">
            <Text fontSize="3xl" as="b">
              Summary
            </Text>
            <Text>{data.summary}</Text>
          </Flex>
        ) : null}

        <Flex w="100%" justifyContent="center" flexDir="column" align="center">
          <Text as="b" fontSize="3xl" my="5">
            Areas of interest
          </Text>
          <Flex align="center" justify="center" flexWrap="wrap" mb="10">
            {data.interests.map((interest) => {
              return interest.selected ? (
                <Flex
                  my="2"
                  w="40"
                  p="5"
                  justify="center"
                  align="center"
                  flexWrap="wrap"
                  bg="#F7CD6B"
                  mx="5"
                  borderRadius="2xl"
                >
                  <Text>{interest.text}</Text>
                </Flex>
              ) : null;
            })}
          </Flex>
        </Flex>
        {data.skills.length > 0 ? (
          <Flex
            w="100%"
            justifyContent="center"
            flexDir="column"
            align="center"
          >
            <Text as="b" fontSize="3xl" mb="5">
              Skills
            </Text>
            <Flex align="center" justify="center" flexWrap="wrap" mb="10">
              {data.skills.map((skill) => {
                return skill.selected ? (
                  <Flex
                    mb="2"
                    w="40"
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
          </Flex>
        ) : null}
      </Flex>
    </Flex>
  ) : (
    <Flex>Loading ...</Flex>
  );
}

export default Profile;
