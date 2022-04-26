import { Button, Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import JobCard from "../../components/JobCard";

function JobDashboard({ employer }) {
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();

  console.log("emp", employer);

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
          justify="center"
          align="center"
          pos="relative"
        >
          <Heading w="60%" size="md" textAlign="center">
            Employer Dashboard
          </Heading>
          <Button
            my="1"
            mx="2"
            bg="#F7CD6B"
            pos="absolute"
            right="0"
            leftIcon={<BsPlusCircleFill fontSize="2xl" />}
            onClick={() => {
              navigate("/new-job");
            }}
          >
            New Job
          </Button>
        </Flex>

        <Flex mt="8" flexDir="column">
          {employer.postedJobs.map((job) => {
            return (
              <JobCard
                companyName={job.company.name}
                companyArea={job.job.area}
                jobRole={job.job.role}
                ratePay={job.job.rate}
                city={job.location.city}
                country={job.location.country}
                summary={job.summary}
              />
            );
          })}
        </Flex>
      </Flex>
    )
  );
}

export default JobDashboard;
