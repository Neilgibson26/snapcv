import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Spacer,
  Textarea,
} from "@chakra-ui/react";
import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";

function Summary({
  formData,
  updateFormData,
  uploadDataToDatabase,
  goNext,
  goBack,
}) {
  const checkValidInput = () => {
    if (formData.summary === "") {
      alert("Insert Some Data to Proceed");
      return false;
    }

    return true;
  };
  return (
    <Flex
      justify="center"
      w="50%"
      p="10"
      mb="10"
      direction="column"
      boxShadow="dark-lg"
      borderRadius="10px"
    >
      <FormControl p="1vw" id="first-name" isRequired>
        <FormLabel fontWeight="bold">Summary</FormLabel>
        <Textarea
          h="62vh"
          placeholder="Summary"
          value={formData && formData.summary ? formData.summary : ""}
          onChange={(e) => {
            const copy = { ...formData };
            copy.summary = e.target.value;
            updateFormData(copy);
          }}
        />
      </FormControl>

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
            uploadDataToDatabase();
          }}
        >
          Save
        </Button>
        <IconButton
          placeContent="right"
          m="2vw"
          onClick={() => {
            if (checkValidInput()) {
              goNext();
            }
          }}
        >
          <TiArrowRightOutline fontSize="5vh" />
        </IconButton>
      </Flex>
    </Flex>
  );
}

export default Summary;
