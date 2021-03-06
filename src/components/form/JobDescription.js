import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Spacer,
  Textarea,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
// import React, { useEffect } from "react";
import FormTextInput from "./FormTextInput";
import { ChevronRightIcon } from "@chakra-ui/icons";

function JobDescription({
  formData,
  updateFormData,
  goBack,
  goNext,
  currentUser,
}) {
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");
  const toast = useToast();

  const checkValidInput = () => {
    if (
      formData.company.name === "" ||
      formData.job.role === "" ||
      formData.summary === ""
    ) {
      toast({
        title: `Please fill all required fields`,
        variant: "left-accent",
        status: "error",
        position: "top",
        isClosable: false,
      });
      return false;
    }

    return true;
  };

  return (
    <Flex
      justify="center"
      w={isOnmobile ? "100%" : "50%"}
      p="10"
      mb="10"
      bg="white"
      direction="column"
      boxShadow="2xl"
      borderRadius="10px"
    >
      <Heading mb="6" size="md" textAlign="center">
        Hello {currentUser.displayName.split(" ")[0]} 👋
        <br /> Enter details about the job
      </Heading>

      <FormTextInput
        label="Company Name"
        placeholder="Company Name"
        value={formData && formData.company ? formData.company.name : ""}
        onChange={(text) => {
          const copy = { ...formData };
          copy.company.name = text;
          updateFormData(copy);
        }}
      />

      <FormTextInput
        label="Job Role"
        placeholder="Eg: Sales Assistant"
        value={formData && formData.job ? formData.job.role : ""}
        onChange={(text) => {
          const copy = { ...formData };
          copy.job.role = text;
          updateFormData(copy);
        }}
      />

      <FormControl p="1vw" id="first-name" isRequired>
        <FormLabel fontWeight="bold">Job Description</FormLabel>
        <Textarea
          h="22vh"
          maxLength="500"
          placeholder="Describe the job tasks"
          value={formData && formData.summary ? formData.summary : ""}
          onChange={(e) => {
            const copy = { ...formData };
            copy.summary = e.target.value;
            updateFormData(copy);
          }}
        />
      </FormControl>

      <Flex w="100%" justify="space-between" mt="8">
        <Spacer />

        <Button
          bg="#F7CD6B"
          rightIcon={<ChevronRightIcon fontSize="2xl" />}
          onClick={() => {
            if (checkValidInput()) {
              goNext();
            }
          }}
        >
          Next
        </Button>
      </Flex>
    </Flex>
  );
}

export default JobDescription;
