import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Spacer,
  Textarea,
  useMediaQuery,
} from "@chakra-ui/react";

function WrittenSummary({ formData, updateFormData, goNext, goBack }) {
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
    >
      <Heading mb="6" size="md" textAlign="center">
        Written Summary (optional)
      </Heading>

      <FormControl p="1vw" id="first-name" isRequired>
        <FormLabel fontWeight="bold">Summary</FormLabel>
        <Textarea
          h="42vh"
          maxLength="500"
          placeholder="Write short summary (optional)"
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
            goNext();
          }}
        >
          {formData.summary !== "" ? "Next" : "Skip"}
        </Button>
      </Flex>
    </Flex>
  );
}

export default WrittenSummary;
