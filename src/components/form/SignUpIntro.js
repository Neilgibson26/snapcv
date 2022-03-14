import { ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, Image, useMediaQuery } from "@chakra-ui/react";
import { signInWithPopup } from "firebase/auth";
import logo from "../../Assets/whitesnapcv.png";
import { auth, provider } from "../../utils/firebase";

function SignUpIntro({ goNext, setCurrentUser, currentUser }) {
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");

  const signUserIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // // The signed-in user info.
        const user = result.user;
        setCurrentUser(user);
        goNext();
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
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
