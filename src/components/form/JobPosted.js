import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  Image,
  useMediaQuery,
  Textarea,
} from "@chakra-ui/react";
import logo from "../../Assets/whitesnapcv.png";
import { useNavigate } from "react-router-dom";

function JobPosted({ formData, updateFormData, goBack, goNext }) {
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
          Job Posted Successfully!
        </Heading>
      </Flex>

      <Flex mt="8">
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
          View Job Post
        </Button>
      </Flex>
    </Flex>
  );
}

export default JobPosted;
