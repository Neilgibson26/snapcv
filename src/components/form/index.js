import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProfileData from "./ProfileData";
import Summary from "./Summary";
import Experience from "./Experience";
import { useNavigate } from "react-router-dom";
import AreaOfInterest from "./AreaOfInterest";
import SignUpIntro from "./SignUpIntro";
import Skills from "./Skills";
import MidSection from "./MidSection";
import WrittenSummary from "./WrittenSummary";
import { JOBSEEKER } from "../../utils/Constants";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import JobDescription from "./JobDescription";

const defaultData = {
  profileImg: "",
  jobType: "casual",
  name: {
    fname: "",
    lname: "",
  },
  contact: {
    phone: "",
    email: "",
  },
  location: {
    city: "",
    country: "",
  },
  summary: "",
  video: "",
  education: [],
  skills: [],
  interests: [],
  work: [],
};

function Form({ currentUser, setCurrentUser, type = JOBSEEKER }) {
  const [currentStep, setCurrentStep] = useState(0);
  // const [data, setData] = useState(null);
  const [formData, setFormData] = useState(defaultData);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        // User is signed out
        setCurrentUser(null);
      }
    });
  }, [setCurrentUser]);

  let currentContent = <Flex>Loading...</Flex>;
  const goNext = (page = -1) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (page !== -1) {
      setCurrentStep(page);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const goBack = () => {
    if (currentStep === 0) {
      navigate("/");
    }
    setCurrentStep(currentStep - 1);
  };

  switch (currentStep) {
    case 0:
      currentContent = (
        <SignUpIntro
          type={type}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;
    case 1:
      currentContent = (
        <ProfileData
          formData={formData}
          currentUser={currentUser}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;
    case 2:
      currentContent = (
        <Summary
          currentUser={currentUser}
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;
    case 3:
      currentContent = (
        <WrittenSummary
          currentUser={currentUser}
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;
    case 4:
      currentContent = (
        <AreaOfInterest
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;

    case 5:
      currentContent = (
        <MidSection
          currentUser={currentUser}
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;
    case 6:
      currentContent = (
        <Skills
          currentUser={currentUser}
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;

    case 7:
      currentContent = (
        <Experience
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;

    case 11:
      currentContent = (
        <JobDescription
          formData={formData}
          currentUser={currentUser}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;

    default:
      break;
  }

  return (
    <Flex w="100%" flexDir="column" bg="#F7CD6B">
      <Flex w="100%" justify="center">
        {currentContent}
      </Flex>
    </Flex>
  );
}

export default Form;
