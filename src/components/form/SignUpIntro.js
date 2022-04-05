import { ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, Image, useMediaQuery } from "@chakra-ui/react";
import { signInWithPopup } from "firebase/auth";
import logo from "../../Assets/whitesnapcv.png";
import { auth, provider } from "../../utils/firebase";
import { getUser } from "../../utils/firebaseFuncs";

function SignUpIntro({ goNext, updateFormData, setCurrentUser, currentUser }) {
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");

  const getExistingUser = (data) => {
    if (data) {
      updateFormData(data);
    }
  };

  const signUserIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setCurrentUser(user);

        getUser(user.uid, getExistingUser);
        goNext();
        // ...
      })
      .catch((error) => {});
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
      align="center"
    >
      <Image w="150px" h="150px" src={logo} />
      <Heading w="60%" mb="6" size="md" textAlign="center">
        Let's get you set up for employment in a snap
      </Heading>

      <Button
        bg="#F7CD6B"
        mt="4"
        mb="8"
        rightIcon={<ChevronRightIcon fontSize="2xl" />}
        onClick={signUserIn}
      >
        Sign Up
      </Button>
      {currentUser != null ? (
        <Button
          bg="transparent"
          mb="8"
          rightIcon={<ChevronRightIcon fontSize="2xl" />}
          onClick={() => {
            getUser(currentUser.uid, getExistingUser);
            goNext();
          }}
        >
          Continue as {currentUser.displayName.split(" ")[0]}
        </Button>
      ) : null}
    </Flex>
  );
}

export default SignUpIntro;
