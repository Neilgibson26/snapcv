import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, Image, useMediaQuery } from "@chakra-ui/react";
import {} from "firebase/auth";
import logo from "../../Assets/whitesnapcv.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser } from "../../utils/firebaseFuncs";

function MidSection({ formData, updateFormData, goBack, goNext, currentUser }) {
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();

  useEffect(() => {
    addUser(currentUser.uid, formData);
  }, []);

  return (
    <Flex
      justify="center"
      w={isOnmobile ? "100%" : "50%"}
      p="10"
      mb="10"
      bg="white"
      direction="column"
      boxShadow="2xl"
      borderRadius="10px"
      align="center"
    >
      <Image w="150px" h="150px" src={logo} />
      <Heading w="60%" mb="6" size="md" textAlign="center">
        Your profile is now ready!
      </Heading>
      <Heading w="60%" mb="6" size="md" textAlign="center">
        If you would like to add more information click next.
      </Heading>

      <Flex>
        <Button
          m="4"
          leftIcon={<ChevronLeftIcon fontSize="2xl" />}
          onClick={goBack}
          bg="#F7CD6B"
        >
          Back
        </Button>
        <Button
          mt="4"
          mx="2"
          onClick={() => {
            navigate("/explore");
          }}
          bg="#F7CD6B"
        >
          Explore jobs
        </Button>
        <Button
          bg="#F7CD6B"
          mt="4"
          mb="8"
          mx="2"
          onClick={() => {
            navigate("/profile");
          }}
        >
          Preview
        </Button>

        <Button
          bg="#F7CD6B"
          mt="4"
          mx="2"
          rightIcon={<ChevronRightIcon fontSize="2xl" />}
          onClick={goNext}
        >
          Next
        </Button>
      </Flex>
    </Flex>
  );
}

export default MidSection;
