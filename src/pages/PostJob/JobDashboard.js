import { Button, Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import EmployerJobCard from "./EmployerJobCard";

function JobDashboard({ employer }) {
  const navigate = useNavigate();

  const [isOnmobile] = useMediaQuery("(max-width: 768px)");

  return (
    employer && (
      <Flex
        justify="flex-start"
        w="100%"
        p="10"
        mb="10"
        bg="white"
        direction="column"
        boxShadow="2xl"
        borderRadius="10px"
        align="center"
      >
        <Flex
          flexDir="column"
          w="100%"
          justify={isOnmobile ? "center" : "center"}
          align={isOnmobile ? "center" : "center"}
          pos={isOnmobile ? "" : "relative"}
        >
          <Heading w="60%" size="md" textAlign="center">
            Employer Dashboard
          </Heading>
          <Button
            my="1"
            mx="2"
            bg="#F7CD6B"
            pos={isOnmobile ? "left" : "absolute"}
            right="0"
            leftIcon={<BsPlusCircleFill fontSize="2xl" />}
            onClick={() => {
              navigate("/new-job");
            }}
          >
            New Job
          </Button>
        </Flex>

        <Flex mt="8" w="100%" align="center" flexDir="column">
          {employer.postedJobs.map((job) => {
            return <EmployerJobCard job={job} />;
          })}
        </Flex>
      </Flex>
    )
  );
}

export default JobDashboard;
