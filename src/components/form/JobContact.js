import {
  Button,
  Flex,
  Heading,
  Spacer,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import FormTextInput from "./FormTextInput";
import { ChevronRightIcon } from "@chakra-ui/icons";

function JobContact({ formData, updateFormData, goBack, goNext, currentUser }) {
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");
  const toast = useToast();

  const checkValidInput = () => {
    if (
      formData.contact.name === "" ||
      formData.contact.phone === "" ||
      formData.contact.email === ""
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

  useEffect(() => {
    const copy = { ...formData };

    copy.contact.email =
      formData && formData.contact
        ? formData.contact.email === ""
          ? currentUser.email
          : formData.contact.email
        : "";
    updateFormData(copy);
  }, []);

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
        Enter Contact Details
      </Heading>
      <FormTextInput
        label="Name"
        placeholder="Eg: Steve Jobs"
        value={formData && formData.contact ? formData.contact.name : ""}
        onChange={(text) => {
          const copy = { ...formData };
          copy.contact.name = text;
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
      <FormTextInput
        label="Website"
        placeholder="Eg: www.company.com"
        isRequired={false}
        value={formData && formData.contact ? formData.contact.website : ""}
        onChange={(text) => {
          const copy = { ...formData };
          copy.contact.website = text;
          updateFormData(copy);
        }}
      />

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

export default JobContact;
