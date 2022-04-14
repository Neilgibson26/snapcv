import { Flex, Input, Select } from "@chakra-ui/react";
import { React, useState, useEffect } from "react";
import JobCard from "../../components/JobCard";
import { getAllJobs } from "../../utils/firebaseFuncs";

function Hire() {
  const [allJobs, setAllJobs] = useState(null);

  const callback = (data) => {
    if (data) {
      setAllJobs(data);
      console.log("this is all jobs ", allJobs);
    }
  };
  useEffect(() => {
    getAllJobs(callback);
    return () => {};
  }, []);

  return allJobs ? (
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
      <Flex align="center" justify="center" flexWrap="wrap">
        {allJobs.map((job) => {
          return (
            <JobCard
              companyName={job.company.name}
              companyArea={job.company.area}
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
  ) : null;
}

export default Hire;
