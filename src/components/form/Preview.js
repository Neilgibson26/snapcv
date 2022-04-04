import {
  Button,
  Flex,
  Text,
  IconButton,
  Spacer,
  Image,
} from "@chakra-ui/react";
import { TiArrowLeftOutline } from "react-icons/ti";
import React from "react";
import TextDesign from "./TextDesign";

function Preview({ formData, data, goBack }) {
  // const uploadDataToDatabase = () => {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in,
  //       const uid = user.uid;
  //       axios
  //         .post(`http://localhost:5000/api/v1/user/${uid}/data`, {
  //           googleID: uid + "",
  //           userData: user,
  //           saved: data != null ? [...data.saved] : [],
  //           profileData: formData,
  //         })
  //         .then(function (response) {
  //           console.log("got response", response);
  //           toast({
  //             title: "Submitted!",
  //             description: "Your profile has been updated",
  //             status: "success",
  //             duration: 2000,
  //             isClosable: true,
  //           });
  //           history.push("/templates");
  //         })
  //         .catch(function (error) {
  //           console.log("got an error", error);
  //           alert("Server Error");
  //         });
  //     } else {
  //       alert("Please Sign in to submit");
  //     }
  //   });
  // };

  return (
    <Flex
      justify="center"
      w="50%"
      p="10"
      mb="10"
      direction="column"
      boxShadow="dark-lg"
      borderRadius="10px"
      bg="white"
    >
      <Image
        src={formData.profileImg}
        w="100px"
        h="100px"
        objectFit="cover"
        boxShadow="2xl"
        borderRadius="50"
      ></Image>

      <Flex
        justify="center"
        direction="column"
        p="5"
        boxShadow="2xl"
        borderRadius="10"
        w="100%"
        my="2"
      >
        <Flex justify="center" direction="column">
          <Flex m="2" justify="center" direction="row">
            <TextDesign text="First Name: " content={formData.name.fname} />
            <Spacer />
            <TextDesign text="Last Name: " content={formData.name.lname} />
          </Flex>
          <Flex justify="center" direction="row" m="2">
            <TextDesign text="Email: " content={formData.contact.email} />
            <Spacer />
            <TextDesign text="Country: " content={formData.location.country} />
          </Flex>
          <Flex justify="center" direction="row" m="2">
            <TextDesign
              text="Phone Number: "
              content={formData.contact.phone}
            />
            <Spacer />
            <TextDesign text="City: " content={formData.location.city} />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        justify="center"
        direction="column"
        p="5"
        boxShadow="2xl"
        borderRadius="10"
        w="100%"
        my="2"
      >
        <TextDesign text="Summary: " content={formData.summary} />
      </Flex>
      <Flex
        justify="center"
        direction="column"
        p="5"
        boxShadow="2xl"
        borderRadius="10"
        w="100%"
        my="2"
      >
        <Flex justify="center" fontWeight="bold" fontSize="30">
          <Text>Education</Text>
        </Flex>
        {formData.education.map((item) => {
          return (
            <Flex
              justify="center"
              direction="column"
              p="5"
              border="1px solid grey"
              borderRadius="10"
              w="100%"
              my="2"
            >
              <Flex my="1">
                <TextDesign
                  text="Institute Name: "
                  content={item.institutionName}
                />
              </Flex>
              <Flex justify="center" direction="row" my="1">
                <TextDesign text="Start Date: " content={item.startDate} />
                <Spacer />
                <TextDesign text="End Date: " content={item.endDate} />
                <Spacer />
                <TextDesign text="Current Year: " content={item.currentYear} />
              </Flex>
              <Flex justify="center" direction="row" my="1">
                <TextDesign text="Course: " content={item.course} />
                <Spacer />
                <TextDesign text="Score: " content={item.score} />
              </Flex>
              <Flex my="1" direction="column">
                <TextDesign text="Modules: " content={item.details.modules} />
                <TextDesign
                  text="Extra Curricular Activities: "
                  content={item.details.extra}
                />
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <Flex
        justify="center"
        direction="column"
        p="5"
        boxShadow="2xl"
        borderRadius="10"
        w="100%"
        my="2"
      >
        <Flex justify="center" fontWeight="bold" fontSize="30">
          <Text>Jobs</Text>
        </Flex>
        {formData.work.map((item) => {
          return (
            <Flex
              justify="center"
              direction="column"
              p="5"
              border="1px solid grey"
              borderRadius="10"
              w="100%"
              my="2"
            >
              <TextDesign text="Company Name: " content={item.company} />
              <TextDesign text="Job Title: " content={item.jobTitle} />
              <Flex justify="center" direction="row">
                <TextDesign text="Start Date: " content={item.startDate} />

                <Spacer />
                <TextDesign text="End Date: " content={item.endDate} />
              </Flex>
              <Flex>
                <TextDesign
                  text="Job Descrription: "
                  content={item.description}
                />
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      {/* <Flex
        justify="center"
        direction="column"
        p="5"
        boxShadow="2xl"
        borderRadius="10"
        w="100%"
        my="2"
      > */}
      {/* <Flex justify="center" fontWeight="bold" fontSize="30">
          <Text>Experience</Text>
        </Flex> */}
      {/* {formData.experience.map((item) => {
          return (
            <Flex
              justify="center"
              direction="column"
              p="5"
              border="1px solid grey"
              borderRadius="10"
              w="100%"
              my="2"
            >
              <TextDesign text="Company Name: " content={item.company} />
              <TextDesign text="Job Title: " content={item.jobTitle} />
              <Flex justify="center" direction="row">
                <TextDesign text="Start Date: " content={item.startDate} />

                <Spacer />
                <TextDesign text="End Date: " content={item.endDate} />
              </Flex>
              <Flex>
                <TextDesign
                  text="Job Descrription: "
                  content={item.description}
                />
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <Flex
        justify="center"
        direction="column"
        p="5"
        boxShadow="2xl"
        borderRadius="10"
        w="100%"
        my="2"
      >
        <Flex justify="center" fontWeight="bold" fontSize="30">
          <Text>Achievements</Text>
        </Flex>
        {formData.achievements.map((item) => {
          return (
            <Flex
              justify="center"
              direction="column"
              p="5"
              border="1px solid grey"
              borderRadius="10"
              w="100%"
              my="2"
            >
              <Flex>
                <TextDesign text="Achievement Title: " content={item.type} />
              </Flex>

              <Flex justify="center" direction="row">
                <TextDesign text="Organization: " content={item.org} />
                <Spacer />
                <TextDesign text="Date: " content={item.date} />
              </Flex>
              <Flex>
                <TextDesign
                  text="Achievement Description: "
                  content={item.desc}
                />
              </Flex>
            </Flex>
          );
        })} */}
      {/* </Flex> */}
      <Flex
        justify="center"
        direction="column"
        p="5"
        boxShadow="2xl"
        borderRadius="10"
        w="100%"
        my="2"
      >
        <Flex justify="center" fontWeight="bold" fontSize="30">
          <Text>Skills</Text>
        </Flex>
        {formData.skills.map((item) => {
          return (
            <Flex
              justify="center"
              direction="column"
              p="5"
              border="1px solid grey"
              borderRadius="10"
              w="100%"
              my="2"
            >
              <Flex>
                <TextDesign text="Skill Title: " content={item.title} />
              </Flex>
              <Flex>
                <TextDesign text="Description: " content={item.list} />
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <Flex
        justify="center"
        direction="column"
        p="5"
        boxShadow="2xl"
        borderRadius="10"
        w="100%"
        my="2"
      >
        <Flex justify="center" fontWeight="bold" fontSize="30">
          <Text>Links</Text>
        </Flex>
        {formData.links.map((item) => {
          return (
            <Flex
              justify="center"
              direction="column"
              p="5"
              border="1px solid grey"
              borderRadius="10"
              w="100%"
              my="2"
            >
              <Flex>
                <TextDesign text="Name: " content={item.name} />
              </Flex>
              <Flex>
                <TextDesign text="Link: " content={item.link} />
              </Flex>
            </Flex>
          );
        })}
      </Flex>

      <Flex justify="center">
        <IconButton placeContent="left" m="2vw" onClick={goBack}>
          <TiArrowLeftOutline fontSize="5vh" />
        </IconButton>
        <Spacer />
        <Button
          m="2vw"
          fontSize="3vh"
          alignContent="left"
          onClick={() => {
            // uploadDataToDatabase();
            alert("OK");
          }}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
}

export default Preview;
