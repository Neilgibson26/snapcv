import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Form from "../../components/form";
import { EMPLOYER } from "../../utils/Constants";
import { getEmployer } from "../../utils/firebaseFuncs";
import JobDashboard from "./JobDashboard";

function PostJob({ currentUser, setCurrentUser }) {
  const [employerData, setEmployerData] = useState(null);

  const getEmployerData = (data) => {
    setEmployerData(data);
  };
  useEffect(() => {
    if (currentUser) {
      getEmployer(currentUser.uid, getEmployerData);
    }
  }, [currentUser]);

  return (
    <Flex minH="90vh" p="8" bg="#F7CD6B">
      {employerData ? (
        <JobDashboard employer={employerData} />
      ) : (
        <Form
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          type={EMPLOYER}
        />
      )}
    </Flex>
  );
}

export default PostJob;
