import React from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Employer";
import Profile from "./pages/Home";
import Create from "./pages/Jobseeker";

function App() {
  return (
    <Flex h="100%" w="100%" bg="red">
      {" "}
      hi{" "}
    </Flex>
  );
}

export default App;
