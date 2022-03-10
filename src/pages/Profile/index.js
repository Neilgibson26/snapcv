import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

function Profile() {
  return (
    <Flex w="100vw" alignItems="center" justify="center" p="10">
      <Flex
        flexDir="column"
        w="80%"
        h="100%"
        justify="center"
        align="center"
        p="5"
        shadow="dark-lg"
        borderRadius="3xl"
        my="2"
      >
        <Text fontSize="6xl" as="b">
          Neil Gibson
        </Text>
        <Skeleton h="60vh" w="80%"></Skeleton>
        <Text as="b" fontSize="6xl">
          Summary
        </Text>
        <Text>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </Text>
        <Text as="b" fontSize="6xl">
          Skills
        </Text>
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
  );
}

export default Profile;
