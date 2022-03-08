import {
  ModalHeader,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  Button,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import FormTextInput from "./FormTextInput";
import FormTextInputNotRequired from "./FormTextInputNotRequired";
import { isValidDate } from "./Validator";

function ExperienceModel({ formData, updateFormData, isOpen, onClose }) {
  const [currentExp, setCurrentExp] = useState({
    startDate: "",
    endDate: "",
    title: "",
    org: "",
    type: "",
    description: "",
  });
  const checkValidInput = () => {
    if (
      !isValidDate(currentExp.startDate, "start date") ||
      !isValidDate(currentExp.endDate, "end date")
    ) {
      return false;
    }
    if (
      currentExp.title === "" ||
      currentExp.startDate === "" ||
      currentExp.endDate === "" ||
      currentExp.type === "" ||
      currentExp.org === ""
    ) {
      alert("Please Insert all Data Where Required");
      return false;
    }

    return true;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Experience</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justify="center" direction="column">
            <FormTextInput
              label="Title"
              placeholder="Title"
              value={currentExp ? currentExp.title : ""}
              onChange={(text) => {
                const copy = { ...currentExp };
                copy.title = text;
                setCurrentExp(copy);
              }}
            />
            <FormTextInput
              label="Organization"
              placeholder="Organization"
              value={currentExp ? currentExp.org : ""}
              onChange={(text) => {
                const copy = { ...currentExp };
                copy.org = text;
                setCurrentExp(copy);
              }}
            />
            <Flex justify="center" direction="row">
              <FormTextInput
                label="Start Date"
                placeholder="MM/YYYY"
                value={currentExp ? currentExp.startDate : ""}
                onChange={(text) => {
                  const copy = { ...currentExp };
                  copy.startDate = text;
                  setCurrentExp(copy);
                }}
              />
              <FormTextInput
                label="End Date"
                placeholder="MM/YYYY"
                value={currentExp ? currentExp.endDate : ""}
                onChange={(text) => {
                  const copy = { ...currentExp };
                  copy.endDate = text;
                  setCurrentExp(copy);
                }}
              />
              <FormTextInput
                label="Type"
                placeholder="Type"
                value={currentExp ? currentExp.type : ""}
                onChange={(text) => {
                  const copy = { ...currentExp };
                  copy.type = text;
                  setCurrentExp(copy);
                }}
              />
            </Flex>

            <FormTextInputNotRequired
              label="Description"
              placeholder="Description"
              value={currentExp ? currentExp.description : ""}
              onChange={(text) => {
                const copy = { ...currentExp };
                copy.description = text;
                setCurrentExp(copy);
              }}
            />
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose}>Cancel</Button>
          <Spacer />
          <Button
            onClick={() => {
              if (checkValidInput()) {
                const copy = { ...formData };
                console.log("copy", copy);
                const arr = [...copy.experience];
                arr.push(currentExp);
                copy.experience = arr;
                updateFormData(copy);
                onClose();
              }
            }}
          >
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ExperienceModel;
