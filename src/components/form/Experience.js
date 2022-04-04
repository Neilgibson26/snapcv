import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  Image,
  useMediaQuery,
  Textarea,
} from "@chakra-ui/react";
import { signInWithPopup } from "firebase/auth";
import logo from "../../Assets/whitesnapcv.png";
import { Link, useNavigate } from "react-router-dom";

function MidSection({ formData, updateFormData, goBack, goNext }) {
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
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
      <Flex flexDir="column" w="100%" justify="center" align="center">
        <Heading w="60%" size="md" textAlign="center">
          Experience
        </Heading>
      </Flex>
      <Textarea
        my="5"
        h="20vh"
        maxLength="500"
        placeholder="Write a short summmary of the experience you have accumilated"
        value={formData && formData.summary ? formData.summary : ""}
        onChange={(e) => {
          const copy = { ...formData };
          copy.summary = e.target.value;
          updateFormData(copy);
        }}
      />
      <Flex>
        <Button
          onClick={goBack}
          mb="8"
          mx="2"
          bg="#F7CD6B"
          leftIcon={<ChevronLeftIcon fontSize="2xl" />}
        >
          Back
        </Button>

        <Button
          bg="#F7CD6B"
          mx="2"
          rightIcon={<ChevronRightIcon fontSize="2xl" />}
          onClick={() => {
            navigate("/profile");
          }}
        >
          Preview
        </Button>
      </Flex>
    </Flex>
  );
}

export default MidSection;
