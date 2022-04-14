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

function EducationModel({ formData, updateFormData, isOpen, onClose }) {
  const [currentEdu, setCurrentEdu] = useState({
    startDate: "",
    endDate: "",
    currentYear: "",
    institutionName: "",
    course: "",
    score: "",
    details: {
      modules: "",
      extra: "",
    },
  });

  const checkValidInput = () => {
    if (
      !isValidDate(currentEdu.startDate, "start date") ||
      !isValidDate(currentEdu.endDate, "end date")
    ) {
      return false;
    }
    if (
      currentEdu.institutionName === "" ||
      currentEdu.startDate === "" ||
      currentEdu.endDate === "" ||
      currentEdu.course === ""
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
        <ModalHeader>Education</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justify="center" direction="column">
            <FormTextInput
              label="Institute Name"
              placeholder="Institute Name"
              value={currentEdu ? currentEdu.institutionName : ""}
              onChange={(text) => {
                const copy = { ...currentEdu };
                copy.institutionName = text;
                setCurrentEdu(copy);
              }}
            />
            <Flex justify="center" direction="row">
              <FormTextInput
                label="Start Date"
                placeholder="MM/YYYY"
                value={currentEdu ? currentEdu.startDate : ""}
                onChange={(text) => {
                  const copy = { ...currentEdu };
                  copy.startDate = text;
                  setCurrentEdu(copy);
                }}
              />
              <FormTextInput
                label="End Date"
                placeholder="MM/YYYY"
                value={currentEdu ? currentEdu.endDate : ""}
                onChange={(text) => {
                  const copy = { ...currentEdu };
                  copy.endDate = text;
                  setCurrentEdu(copy);
                }}
              />
              <FormTextInputNotRequired
                label="Current Year"
                placeholder="Current Year"
                value={currentEdu ? currentEdu.currentYear : ""}
                onChange={(text) => {
                  const copy = { ...currentEdu };
                  copy.currentYear = text;
                  setCurrentEdu(copy);
                }}
              />
            </Flex>
            <Flex justify="center" direction="row">
              <FormTextInput
                label="Course"
                placeholder="Course"
                value={currentEdu ? currentEdu.course : ""}
                onChange={(text) => {
                  const copy = { ...currentEdu };
                  copy.course = text;
                  setCurrentEdu(copy);
                }}
              />
              <FormTextInputNotRequired
                label="Score"
                placeholder="Score"
                value={currentEdu ? currentEdu.score : ""}
                onChange={(text) => {
                  const copy = { ...currentEdu };
                  copy.score = text;
                  setCurrentEdu(copy);
                }}
              />
            </Flex>
            <FormTextInputNotRequired
              label="Modules"
              placeholder="Modules"
              value={currentEdu ? currentEdu.details.modules : ""}
              onChange={(text) => {
                const copy = { ...currentEdu };
                copy.details.modules = text;
                setCurrentEdu(copy);
              }}
            />

            <FormTextInputNotRequired
              label="Extra Curricular"
              placeholder="Extra Curricular"
              value={currentEdu ? currentEdu.details.extra : ""}
              onChange={(text) => {
                const copy = { ...currentEdu };
                copy.details.extra = text;
                setCurrentEdu(copy);
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
                const arr = [...copy.education];
                arr.push(currentEdu);
                copy.education = arr;
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

export default EducationModel;
