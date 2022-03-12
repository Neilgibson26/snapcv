import { Flex } from "@chakra-ui/react";
import React from "react";
import Form from "../../components/form";

function SignUp({ currentUser, setCurrentUser }) {
  return (
    <Flex minH="90vh" p="8" bg="#F7CD6B">
      <Form currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </Flex>
  );
}

export default SignUp;
