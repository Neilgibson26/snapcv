import React from "react";
import { Flex, Input, Select } from "@chakra-ui/react";
import Card from "../../components/Card";

function Explore() {
  return (
    <Flex flexDir="column" w="100%" h="100%">
      <Flex w="100%" my="10" flexWrap="wrap" justifyContent="space-evenly">
        <Input w="20vw" placeholder="Search for Name"></Input>

        <Select placeholder="Country" w="10vw">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select placeholder="City" w="10vw">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select placeholder="Skills" w="10vw">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select placeholder="Sector" w="10vw">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Flex>
      <Flex flexWrap="wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Flex>
    </Flex>
  );
}

export default Explore;
