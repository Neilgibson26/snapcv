import { Button, Flex, IconButton, Spacer } from "@chakra-ui/react";
import { TiArrowRightOutline } from "react-icons/ti";
import React from "react";
import FormTextInput from "./FormTextInput";

function ProfileData({
  formData,
  updateFormData,
  goBack,
  goNext,
}) {
  console.log(formData);

  const checkValidInput = () => {
    if (
      formData.name.fname === "" ||
      formData.name.lname === "" ||
      formData.contact.phone === "" ||
      formData.contact.email === "" ||
      formData.location.country === "" ||
      formData.location.city === ""
    ) {
      alert("Please Insert all Date Required");
      return false;
    }
    if (
      !formData.contact.email.includes(".") &&
      !formData.contact.email.includes("@")
    ) {
      alert("Please Insert Valid Email");
      return false;
    }
    var pattern = new RegExp(/^[0-9\b]+$/);
    if (!pattern.test(formData.contact.phone)) {
      alert("Please Insert Valid Phone Number ");
      return false;
    }

    return true;
  };
  return (
    <Flex
      justify="center"
      w="50%"
      p="10"
      mb="10"
      direction="column"
      boxShadow="dark-lg"
      borderRadius="10px"
    >
      <FormTextInput
        label="First Name"
        placeholder="First Name"
        value={formData && formData.name ? formData.name.fname : ""}
        onChange={(text) => {
          const copy = { ...formData };
          copy.name.fname = text;
          updateFormData(copy);
        }}
      />
      <FormTextInput
        label="Last Name"
        placeholder="Last Name"
        value={formData && formData.name ? formData.name.lname : ""}
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
        value={formData && formData.contact ? formData.contact.email : ""}
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
      <Flex justify="center">
        <Button m="2vw" fontSize="3vh" alignContent="left" onClick={goBack}>
          Cancel
        </Button>
        <Spacer />

        <IconButton
          m="2vw"
          onClick={() => {
            if (checkValidInput()) {
              goNext();
            }
          }}
        >
          <TiArrowRightOutline fontSize="5vh" />
        </IconButton>
      </Flex>
    </Flex>
  );
}

export default ProfileData;
