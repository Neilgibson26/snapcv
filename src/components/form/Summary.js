import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Spacer,
  Textarea,
  useMediaQuery,
} from "@chakra-ui/react";
import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";

function Summary({
  formData,
  updateFormData,
  uploadDataToDatabase,
  goNext,
  goBack,
}) {
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");

  const checkValidInput = () => {
    // if (formData.summary === "") {
    //   alert("Insert Some Data to Proceed");
    //   return false;
    // }

    return true;
  };
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
    >
      <FormControl p="1vw" id="first-name" isRequired>
        <FormLabel fontWeight="bold">Summary</FormLabel>
        <Textarea
          h="42vh"
          maxLength="500"
          placeholder="Upload Summary video 20 seconds / write short summary (optional)"
          value={formData && formData.summary ? formData.summary : ""}
          onChange={(e) => {
            const copy = { ...formData };
            copy.summary = e.target.value;
            updateFormData(copy);
          }}
        />
      </FormControl>

      <Flex w="100%" justify="space-between" mt="8">
        <Button
          onClick={goBack}
          bg="#F7CD6B"
          leftIcon={<ChevronLeftIcon fontSize="2xl" />}
        >
          Back
        </Button>

        <Spacer />

        <Button
          bg="#F7CD6B"
          rightIcon={<ChevronRightIcon fontSize="2xl" />}
          onClick={() => {
            if (checkValidInput()) {
              goNext();
            }
          }}
        >
          Next
        </Button>
      </Flex>
    </Flex>
  );
}

export default Summary;
