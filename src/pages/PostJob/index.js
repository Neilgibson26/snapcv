import { Flex } from "@chakra-ui/react";
import React from "react";
import Form from "../../components/form";
import { EMPLOYER } from "../../utils/Constants";

function PostJob({ currentUser, setCurrentUser }) {
  return (
    <Flex minH="90vh" p="8" bg="#F7CD6B">
      <Form
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        type={EMPLOYER}
      />
    </Flex>
  );
}

export default PostJob;
