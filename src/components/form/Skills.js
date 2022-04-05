import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, Spacer, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";

const convertToSelectableObjects = (list) => {
  const selectableList = [];

  for (let i = 0; i < list.length; i++) {
    selectableList.push({
      text: list[i],
      selected: false,
    });
  }

  return selectableList;
};

function Skills({ formData, updateFormData, goBack, goNext }) {
  const skills = [
    "Technology",
    "Driving",
    "Customer Service",
    "Attention to Detail",
    "Craft",
    "example here",
  ];

  const [isOnmobile] = useMediaQuery("(max-width: 768px)");
  const [currentList, setCurrentList] = useState(
    formData.skills.length !== 0
      ? formData.skills
      : convertToSelectableObjects(skills)
  );

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
        Select Your Skills
      </Heading>

      <Flex w="100%" h="100%" align="center" justify="center" flexWrap="wrap">
        {(formData.skills.length !== 0 ? formData.skills : currentList).map(
          (item, index) => {
            return (
              <Flex
                m="4"
                p="4"
                borderRadius="xl"
                cursor="pointer"
                fontWeight="semibold"
                bg={item.selected ? "#F7CD6B" : "#F1F3F4"}
                _hover={{ opacity: 0.7, cursor: "pointer" }}
                onClick={() => {
                  const newList = [...currentList];
                  const currentItem = newList[index];
                  currentItem.selected = !currentItem.selected;

                  newList[index] = currentItem;
                  setCurrentList(newList);
                  const copy = { ...formData };
                  copy.skills = currentList;
                  updateFormData(copy);
                }}
              >
                {item.text}
              </Flex>
            );
          }
        )}
      </Flex>

      <Flex justify="center" mt="4">
        <Button
          m="4"
          leftIcon={<ChevronLeftIcon fontSize="2xl" />}
          onClick={goBack}
          bg="#F7CD6B"
        >
          Back
        </Button>

        <Spacer />

        <Button
          m="4"
          bg="#F7CD6B"
          rightIcon={<ChevronRightIcon fontSize="2xl" />}
          onClick={() => {
            goNext();
          }}
        >
          Next
        </Button>
      </Flex>
    </Flex>
  );
}

export default Skills;
