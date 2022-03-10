import { Button, Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import React from "react";

function JobType({ formData, updateFormData, goBack, goNext }) {
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      justify="center"
      minH="50vh"
      w={isOnmobile ? "100%" : "50%"}
      p="10"
      mb="10"
      bg="white"
      boxShadow="2xl"
      borderRadius="10px"
      flexDir="column"
    >
      <Heading size="lg" textAlign="center" mb="4">
        Select employment type
      </Heading>

      <Flex w="100%" h="100%" align="center" justify="center" flexWrap="wrap">
        <Flex
          flexDir="column"
          justify="center"
          align="center"
          fontSize="lg"
          fontWeight="bold"
          _hover={{ opacity: 0.8, cursor: "pointer" }}
          onClick={() => {
            const copy = { ...formData };
            copy.jobType = "casual";
            updateFormData(copy);
            goNext();
          }}
        >
          <Flex
            m="4"
            p="4"
            w="200px"
            h="200px"
            bg="blue.400"
            color="white"
            borderRadius="xl"
            bgSize="cover"
            bgImage="https://images.unsplash.com/photo-1576669801820-a9ab287ac2d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
          Casual Jobs
        </Flex>
        <Flex
          flexDir="column"
          justify="center"
          align="center"
          fontSize="lg"
          fontWeight="bold"
          _hover={{ opacity: 0.8, cursor: "pointer" }}
          onClick={() => {
            const copy = { ...formData };
            copy.jobType = "skilled";
            updateFormData(copy);

            goNext();
          }}
        >
          <Flex
            m="4"
            p="4"
            w="200px"
            h="200px"
            bg="blue.400"
            color="white"
            borderRadius="xl"
            bgSize="cover"
            bgImg="https://images.unsplash.com/photo-1640622842223-e1e39f4bf627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          />
          Skilled Jobs
        </Flex>
      </Flex>

      <Flex justify="center" mt="4">
        <Button m="4" onClick={goBack} bg="#EAD757">
          Cancel
        </Button>

        {/* <Spacer />

        <Button
          m="2vw"
          rightIcon={<ChevronRightIcon fontSize="2xl" />}
          onClick={() => {
            goNext();
          }}
        >
          Next
        </Button> */}
      </Flex>
    </Flex>
  );
}

export default JobType;
