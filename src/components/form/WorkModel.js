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
import { isValidDate } from "./Validator";

function WorkModel({ formData, updateFormData, isOpen, onClose }) {
  const [currentWork, setCurrentWork] = useState({
    startDate: "",
    endDate: "",
    jobTitle: "",
    company: "",
    description: "",
  });

  const checkValidInput = () => {
    if (
      !isValidDate(currentWork.startDate, "start date") ||
      !isValidDate(currentWork.endDate, "end date")
    ) {
      return false;
    }
    if (
      currentWork.company === "" ||
      currentWork.startDate === "" ||
      currentWork.endDate === "" ||
      currentWork.jobTitle === "" ||
      currentWork.description === ""
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
        <ModalHeader>Job</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justify="center" direction="column">
            <FormTextInput
              label="Company Name"
              placeholder="Company Name"
              value={currentWork ? currentWork.company : ""}
              onChange={(text) => {
                const copy = { ...currentWork };
                copy.company = text;
                setCurrentWork(copy);
              }}
            />
            <FormTextInput
              label="Job Title"
              placeholder="Job Title"
              value={currentWork ? currentWork.jobTitle : ""}
              onChange={(text) => {
                const copy = { ...currentWork };
                copy.jobTitle = text;
                setCurrentWork(copy);
              }}
            />
            <Flex justify="center" direction="row">
              <FormTextInput
                label="Start Date"
                placeholder="MM/YYYY"
                value={currentWork ? currentWork.startDate : ""}
                onChange={(text) => {
                  const copy = { ...currentWork };
                  copy.startDate = text;
                  setCurrentWork(copy);
                }}
              />
              <FormTextInput
                label="End Date"
                placeholder="MM/YYYY"
                value={currentWork ? currentWork.endDate : ""}
                onChange={(text) => {
                  const copy = { ...currentWork };
                  copy.endDate = text;
                  setCurrentWork(copy);
                }}
              />
            </Flex>
            <Flex justify="center" direction="row">
              <FormTextInput
                label="Description"
                placeholder="Description"
                value={currentWork ? currentWork.description : ""}
                onChange={(text) => {
                  const copy = { ...currentWork };
                  copy.description = text;
                  setCurrentWork(copy);
                }}
              />
            </Flex>
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
                const arr = [...copy.work];
                arr.push(currentWork);
                copy.work = arr;
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

export default WorkModel;
