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

function AchievementsModel({ formData, updateFormData, isOpen, onClose }) {
  const [currentAch, setCurrentAch] = useState({
    type: "",
    org: "",
    date: "",
    desc: "",
  });

  const checkValidInput = () => {
    if (!isValidDate(currentAch.date, "date")) {
      return false;
    }
    if (
      currentAch.type === "" ||
      currentAch.org === "" ||
      currentAch.date === "" ||
      currentAch.desc === ""
    ) {
      alert("Please Insert all Date Where Required");
      return false;
    }

    return true;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Achievements</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justify="center" direction="column">
            <FormTextInput
              label="Achievement Title"
              placeholder="Title"
              value={currentAch ? currentAch.type : ""}
              onChange={(text) => {
                const copy = { ...currentAch };
                copy.type = text;
                setCurrentAch(copy);
              }}
            />
            <FormTextInput
              label="Organization"
              placeholder="Organization"
              value={currentAch ? currentAch.org : ""}
              onChange={(text) => {
                const copy = { ...currentAch };
                copy.org = text;
                setCurrentAch(copy);
              }}
            />
            <Flex justify="center" direction="row">
              <FormTextInput
                label="Date"
                placeholder="MM/YYYY"
                value={currentAch ? currentAch.date : ""}
                onChange={(text) => {
                  const copy = { ...currentAch };
                  copy.date = text;
                  setCurrentAch(copy);
                }}
              />
            </Flex>
            <Flex justify="center" direction="row">
              <FormTextInput
                label="Description"
                placeholder="Description"
                value={currentAch ? currentAch.desc : ""}
                onChange={(text) => {
                  const copy = { ...currentAch };
                  copy.desc = text;
                  setCurrentAch(copy);
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
                const arr = [...copy.achievements];
                arr.push(currentAch);
                copy.achievements = arr;
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

export default AchievementsModel;
