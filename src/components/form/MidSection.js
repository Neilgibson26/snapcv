import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, Image, useMediaQuery } from "@chakra-ui/react";
import { signInWithPopup } from "firebase/auth";
import logo from "../../Assets/whitesnapcv.png";

function MidSection({ formData, updateFormData, goBack, goNext }) {
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");

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
        You're done
      </Heading>

      <Button
        m="4"
        leftIcon={<ChevronLeftIcon fontSize="2xl" />}
        onClick={goBack}
        bg="#F7CD6B"
      >
        Back
      </Button>

      <Button
        bg="#F7CD6B"
        mt="4"
        mb="8"
        rightIcon={<ChevronRightIcon fontSize="2xl" />}
        onClick={goNext}
      >
        Next
      </Button>
    </Flex>
  );
}

export default MidSection;
