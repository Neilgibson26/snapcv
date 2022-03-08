import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProfileData from "./ProfileData";
import Summary from "./Summary";
import { useNavigate } from "react-router-dom";
import Education from "./Education";
import Work from "./Work";
import Experience from "./Experience";
import Links from "./Links";
import Achievements from "./Achievements";
import Skills from "./Skills";
import ProfilePicture from "./ProfilePicture";
import Preview from "./Preview";

const defaultData = {
  profileImg: "",
  name: {
    fname: "",
    lname: "",
  },
  contact: {
    phone: "",
    email: "",
  },
  links: [
    // {
    //   name: "",
    //   link: "",
    // },
  ],
  location: {
    city: "",
    country: "",
  },
  summary: "",
  education: [
    // {
    //   startDate: "",
    //   endDate: "",
    //   currentYear: "",
    //   institutionName: "",
    //   course: "",
    //   score: "",
    //   details: {
    //     modules: "",
    //     extra: "",
    //   },
    // },
  ],
  skills: [
    // {
    //   title: "",
    //   list: [],
    // },
  ],
  work: [
    // {
    //   startDate: "",
    //   endDate: "",
    //   jobTitle: "",
    //   company: "",
    //   description: "",
    // },
  ],
  experience: [
    // {
    //   startDate: "",
    //   endDate: "",
    //   title: "",
    //   org: "",
    //   type: "",
    //   description: "",
    // },
  ],
  achievements: [
    // {
    //   type: "",
    //   org: "",
    //   date: "",
    //   desc: "",
    // },
  ],
};

function Form() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState(defaultData);

  const navigate = useNavigate();

  useEffect(() => {
    // const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     axios
    //       .get("http://localhost:5000/api/v1/user/" + user.uid + "/data")
    //       .then(function (response) {
    //         console.log("throw");
    //         setFormData(response.data.data.profile.profileData);
    //         setData(response.data.data.profile);
    //         if (
    //           !response.data.data.profile.profileData.name ||
    //           !response.data.data.profile.profileData.name.fname
    //         ) {
    //           setFormData(defaultData);
    //         }
    //         console.log("profile data", response.data.data.profile.profileData);
    //         // handle success
    //       })
    //       .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //       });
    //     console.log("User signed in");
    //   } else {
    //     console.log("User not signed in");
    //   }
    // });
  }, []);

  let currentContent = <Flex>Loading</Flex>;
  const goNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const goBack = () => {
    if (currentStep === 0) {
      navigate("/templates");
    }
    setCurrentStep(currentStep - 1);
  };

  switch (currentStep) {
    case 0:
      currentContent = (
        <ProfileData
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;
    // case 2:
    //   currentContent = (
    //     <ProfilePicture
    //       formData={formData}
    //       updateFormData={setFormData}
    //       goNext={goNext}
    //       goBack={goBack}
    //     />
    //   );
    //   break;

    case 1:
      currentContent = (
        <Summary
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;

    case 2:
      currentContent = (
        <Education
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;
    case 3:
      currentContent = (
        <Work
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;
    // case 5:
    //   currentContent = (
    //     <Experience
    //       formData={formData}
    //       updateFormData={setFormData}
    //       goNext={goNext}
    //       goBack={goBack}
    //     />
    //   );
    // break;
    // case 6:
    //   currentContent = (
    //     <Achievements
    //       formData={formData}
    //       updateFormData={setFormData}
    //       goNext={goNext}
    //       goBack={goBack}
    //     />
    //   );
    //   break;
    // case 7:
    //   currentContent = (
    //     <Skills
    //       formData={formData}
    //       updateFormData={setFormData}
    //       goNext={goNext}
    //       goBack={goBack}
    //     />
    //   );
    //   break;
    case 4:
      currentContent = (
        <Links
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;
    case 5:
      currentContent = (
        <Preview
          formData={formData}
          updateFormData={setFormData}
          data={data}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;

    default:
      break;
  }

  return (
    <Flex w="100%" flexDir="column">
      <Flex w="100%" justify="center">
        {currentContent}
      </Flex>
    </Flex>
  );
}

export default Form;
