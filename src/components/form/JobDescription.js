import {
  Button,
  Flex,
  Heading,
  Spacer,
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
      formData.name.fname === "" ||
      formData.name.lname === "" ||
      formData.contact.phone === "" ||
      formData.contact.email === "" ||
      formData.location.country === "" ||
      formData.location.city === ""
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
    if (
      !formData.contact.email.includes(".") &&
      !formData.contact.email.includes("@")
    ) {
      toast({
        title: `Please enter a valid email address`,
        variant: "left-accent",
        status: "error",
        position: "top",
        isClosable: false,
      });
      return false;
    }
    var pattern = new RegExp(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
    );
    if (!pattern.test(formData.contact.phone)) {
      toast({
        title: `Please enter a valid phone number`,
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
        label="First Name"
        placeholder="First Name"
        value={
          formData && formData.name
            ? formData.name.fname === ""
              ? currentUser.displayName.split(" ")[0]
              : formData.name.fname
            : ""
        }
        onChange={(text) => {
          const copy = { ...formData };
          copy.name.fname = text;
          updateFormData(copy);
        }}
      />
      <FormTextInput
        label="Last Name"
        placeholder="Last Name"
        value={
          formData && formData.name
            ? formData.name.lname === "" &&
              currentUser.displayName.split(" ").length > 1
              ? currentUser.displayName.split(" ")[1]
              : formData.name.lname
            : ""
        }
        onChange={(text) => {
          const copy = { ...formData };
          copy.name.lname = text;
          updateFormData(copy);
        }}
      />
      <FormTextInput
        label="Phone Number"
        placeholder="Phone Number"
        value={formData && formData.contact ? formData.contact.phone : ""}
        onChange={(text) => {
          const copy = { ...formData };
          copy.contact.phone = text;
          updateFormData(copy);
        }}
      />
      <FormTextInput
        label="Email"
        placeholder="Email"
        value={
          formData && formData.contact
            ? formData.contact.email === ""
              ? currentUser.email
              : formData.contact.email
            : ""
        }
        onChange={(text) => {
          const copy = { ...formData };
          copy.contact.email = text;
          updateFormData(copy);
        }}
      />
      <Flex justify="center">
        <FormTextInput
          label="Country"
          placeholder="Country"
          value={formData && formData.location ? formData.location.country : ""}
          onChange={(text) => {
            const copy = { ...formData };
            copy.location.country = text;
            updateFormData(copy);
          }}
        />
        <FormTextInput
          label="City"
          placeholder="City"
          value={formData && formData.location ? formData.location.city : ""}
          onChange={(text) => {
            const copy = { ...formData };
            copy.location.city = text;
            updateFormData(copy);
          }}
        />
      </Flex>
      <Flex w="100%" justify="space-between" mt="8">
        <Button onClick={goBack} bg="#F7CD6B">
          Cancel
        </Button>

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
