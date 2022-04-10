import {
  Button,
  Flex,
  Heading,
  Spacer,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import FormTextInput from "./FormTextInput";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function JobDetails({ formData, updateFormData, goBack, goNext, currentUser }) {
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");
  const toast = useToast();

  const checkValidInput = () => {
    if (
      formData.job.hours === "" ||
      formData.job.rate === "" ||
      formData.location.country === "" ||
      formData.location.city === ""
    ) {
      toast({
        title: `Please fill all required fields`,
        variant: "left-accent",
        status: "error",
        position: "top",
        isClosable: false,
      });
      return false;
    }

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
      <Heading mb="6" size="md" textAlign="center">
        Job Details
      </Heading>

      <FormTextInput
        label="Weekly Hours"
        isNumber
        placeholder="40"
        value={formData && formData.job ? formData.job.hours : ""}
        onChange={(text) => {
          const copy = { ...formData };
          copy.job.hours = text;
          updateFormData(copy);
        }}
      />

      <FormTextInput
        label="Hourly Pay Rate (€ / hour)"
        isNumber
        placeholder="40"
        value={formData && formData.job ? formData.job.rate : ""}
        onChange={(text) => {
          const copy = { ...formData };
          copy.job.rate = text;
          updateFormData(copy);
        }}
      />

      <Flex justify="center">
        <FormTextInput
          label="City"
          placeholder="City"
          value={formData && formData.location ? formData.location.city : ""}
          onChange={(text) => {
            const copy = { ...formData };
            copy.location.city = text;
            updateFormData(copy);
          }}
        />
        <FormTextInput
          label="Country"
          placeholder="Country"
          value={formData && formData.location ? formData.location.country : ""}
          onChange={(text) => {
            const copy = { ...formData };
            copy.location.country = text;
            updateFormData(copy);
          }}
        />
      </Flex>
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

export default JobDetails;
