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

function LinksModel({ formData, updateFormData, isOpen, onClose }) {
  const [currentLink, setCurentLink] = useState({
    name: "",
    link: "",
  });
  const checkValidInput = () => {
    if (currentLink.name === "" || currentLink.link === "") {
      alert("Please Insert all Data Where Required");
      return false;
    }

    return true;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Links</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justify="center" direction="column">
            <FormTextInput
              label="Name"
              placeholder="Name"
              value={currentLink ? currentLink.name : ""}
              onChange={(text) => {
                const copy = { ...currentLink };
                copy.name = text;
                setCurentLink(copy);
              }}
            />
            <Flex justify="center" direction="row">
              <FormTextInput
                label="Link"
                placeholder="Link"
                value={currentLink ? currentLink.link : ""}
                onChange={(text) => {
                  const copy = { ...currentLink };
                  copy.link = text;
                  setCurentLink(copy);
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
                const arr = [...copy.links];
                arr.push(currentLink);
                copy.links = arr;
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

export default LinksModel;
