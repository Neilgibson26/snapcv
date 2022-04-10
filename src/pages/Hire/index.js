import { Flex, Input, Select } from "@chakra-ui/react";
import { React, useState, useEffect } from "react";
import Card from "../../components/Card";
import { getAllUsers } from "../../utils/firebaseFuncs";

function Hire() {
  const [allUsers, setAllUsers] = useState(null);

  const callback = (data) => {
    if (data) {
      setAllUsers(data);
      console.log(allUsers);
    }
  };
  useEffect(() => {
    getAllUsers(callback);
    return () => {};
  }, []);

  return allUsers ? (
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
      <Flex flexWrap="wrap" justify="center" align="center">
        {allUsers.map((user) => {
          return (
            <Card
              fname={user.name.fname}
              lname={user.name.lname}
              video={user.video}
              summary={user.summary}
              country={user.location.country}
              city={user.location.city}
              id={user.id}
              key={user.name.fname}
            />
          );
        })}
      </Flex>
    </Flex>
  ) : null;
}

export default Hire;
