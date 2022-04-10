import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, Spacer, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";

function JobArea({ formData, updateFormData, goBack, goNext }) {
  const areas = [
    "Hospitality",
    "Construction",
    "Security",
    "Logistics",
    "Healthcare",
    "Childcare",
    "Retail",
  ];

  const [isOnmobile] = useMediaQuery("(max-width: 768px)");
  const [selected, setSelected] = useState(formData.job.area);

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
        Select Job Sector
      </Heading>

      <Flex w="100%" h="100%" align="center" justify="center" flexWrap="wrap">
        {areas.map((item, index) => {
          return (
            <Flex
              m="4"
              p="4"
              key={item.text + index}
              borderRadius="xl"
              cursor="pointer"
              fontWeight="semibold"
              bg={item === selected ? "#F7CD6B" : "#F1F3F4"}
              _hover={{ opacity: 0.7, cursor: "pointer" }}
              onClick={() => {
                const copy = { ...formData };
                copy.job.area = item;
                setSelected(item);
                updateFormData(copy);
              }}
            >
              {item}
            </Flex>
          );
        })}
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

export default JobArea;
