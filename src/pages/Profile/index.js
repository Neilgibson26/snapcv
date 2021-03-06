import { Button, Flex, Text } from "@chakra-ui/react";
import { React, useEffect, useState } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { EmailIcon, EditIcon } from "@chakra-ui/icons";
import { getUser } from "../../utils/firebaseFuncs";
import { useNavigate, useParams } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";

function Profile({ currentUser, setCurrentUser }) {
  const [data, setData] = useState(null);
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");
  const { id } = useParams();
  console.log("data is ", data);
  console.log("current user is ", currentUser);
  const getExistingUser = (data) => {
    if (data) {
      setData(data);
      console.log("UserData is: ", data);
    }
  };

  useEffect(() => {
    if (currentUser) {
      getUser(!id ? currentUser.uid : id, getExistingUser);
    }
    return () => {};
  }, [currentUser, id]);

  const navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      setCurrentUser(null);
      navigate("/");
    });
  };

  return currentUser && data ? (
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
        {currentUser && data.id === currentUser.uid ? (
          <Button
            colorScheme="teal"
            variant="solid"
            my="6"
            pos="absolute"
            top="0"
            right="0"
            mr={isOnmobile ? "2" : "10"}
            onClick={() => {
              //Implement sign out here
              signUserOut();
            }}
          >
            Sign out
          </Button>
        ) : (
          <Button
            rightIcon={<EmailIcon />}
            colorScheme="teal"
            variant="solid"
            my="6"
            pos="absolute"
            top="0"
            right="0"
            mr={isOnmobile ? "2" : "10"}
          >
            {isOnmobile ? "Contact" : "Contact User"}
          </Button>
        )}
        {currentUser && data.id === currentUser.uid ? (
          <Button
            leftIcon={<EditIcon />}
            colorScheme="teal"
            variant="solid"
            my="6"
            pos="absolute"
            top="0"
            left="0"
            ml={isOnmobile ? "2" : "10"}
            onClick={() => {
              navigate("/signup");
            }}
          >
            Edit
          </Button>
        ) : null}

        <Flex flexDir="column" justify="center" align="center">
          <Text as="b" fontSize="3xl" mt={isOnmobile ? "50px" : null}>
            {data.name.fname + " " + data.name.lname}
          </Text>
          <Flex align="center" justify="center">
            <Text>{`${data.location.city}, ${data.location.country}`}</Text>
          </Flex>
        </Flex>
        <Flex
          objectFit="contain"
          align="center"
          maxW="300px"
          minH={isOnmobile ? "200px" : "300px"}
          borderRadius="lg"
          mb="6"
        >
          <Box as="video" src={data.video} minW="200px" autoPlay controls />
        </Flex>

        {data.summary ? (
          <Flex
            w={isOnmobile ? "80%" : "50%"}
            align="center"
            flexDir="column"
            mt="10"
          >
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
                  h="90"
                  p="5"
                  justify="center"
                  align="center"
                  flexWrap="wrap"
                  bg="#F7CD6B"
                  mx="5"
                  borderRadius="2xl"
                >
                  <Text textAlign="center">{interest.text}</Text>
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
          </Flex>
        ) : null}
      </Flex>
    </Flex>
  ) : (
    <Flex>Loading ...</Flex>
  );
}

export default Profile;
