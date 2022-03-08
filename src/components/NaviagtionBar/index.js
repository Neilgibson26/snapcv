import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../utils/firebase";

function NavigationBar({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const signUserIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // // The signed-in user info.
        const user = result.user;
        alert("Hello " + user.displayName);
        setCurrentUser(user);
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

  const signUserOut = () => {
    signOut(auth).then(() => {
      setCurrentUser(null);
    });
  };

  return (
    <Flex px="4" bg="#EAD657" justify="space-between" align="center">
      <Image
        w="120px"
        h="120px"
        src="https://i.imgur.com/h7IuUMm.png"
        onClick={() => {
          navigate("/");
        }}
      />
      <Flex pr="8">
        <Link to="explore">
          <Text
            px="6"
            py="2"
            fontFamily="sans-serif"
            fontWeight="bold"
            borderRadius="lg"
            _hover={{ bg: "white" }}
          >
            Explore Jobs
          </Text>
        </Link>
        <Link to="apply">
          <Text
            px="6"
            py="2"
            fontFamily="sans-serif"
            fontWeight="bold"
            borderRadius="lg"
            _hover={{ bg: "white" }}
          >
            Post a Job
          </Text>
        </Link>
        {currentUser ? (
          <Button mx="4" onClick={signUserOut}>
            Sign Out
          </Button>
        ) : (
          <Button mx="4" leftIcon={<FcGoogle />} onClick={signUserIn}>
            Sign In
          </Button>
        )}
      </Flex>
    </Flex>
  );
}

export default NavigationBar;
