import { Button, Flex, Text } from "@chakra-ui/react";
import { React, useEffect, useState } from "react";
import { Skeleton, Box } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { getUser } from "../../utils/firebaseFuncs";

function Profile({ currentUser, setCurrentUser }) {
  const [data, setData] = useState(null);

  const getExistingUser = (data) => {
    if (data) {
      setData(data);
      console.log("This is the users email ", data.contact.email);
    }
  };

  useEffect(() => {
    if (currentUser) {
      getUser(currentUser.uid, getExistingUser);
    }
    return () => {};
  }, []);

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
        shadow="dark-lg"
        borderRadius="3xl"
        my="10"
        bg="white"
      >
        <Flex flexDir="column">
          <Text as="b" fontSize="3xl">
            {data.name.fname + " " + data.name.lname}
          </Text>
          <Flex align="center" justify="center">
            <Text>{data.location.city + ", "}</Text>
            <Text>{data.location.country}</Text>
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
              {" "}
              Summary
            </Text>
            <Text>{data.summary}</Text>
          </Flex>
        ) : null}

        <Flex w="50%" justifyContent="center">
          <Text as="b" fontSize="3xl">
            Skills
          </Text>
          <Flex>
            {data.skills.map((skill) => {
              <Flex>{skill}</Flex>;
            })}
          </Flex>
        </Flex>
        <Button
          leftIcon={<EmailIcon />}
          colorScheme="teal"
          variant="solid"
          my="10"
        >
          Contact User
        </Button>
      </Flex>
    </Flex>
  ) : (
    <Flex>hello</Flex>
  );
}

export default Profile;
