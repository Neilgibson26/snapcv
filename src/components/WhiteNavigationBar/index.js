import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { BsPersonCircle } from "react-icons/bs";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Text,
  Image,
  Stack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../utils/firebase";
import logo from "../../Assets/whitesnapcv.png";

function WhiteNavigationBar({ currentUser, setCurrentUser }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    <>
      <Box py="3" px="4" w="100%" overflow="hidden">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <HStack spacing={12} alignItems="center">
            <Image
              w="120px"
              h="120px"
              src={logo}
              onClick={() => {
                navigate("/");
              }}
            />
            <HStack
              as="nav"
              spacing={4}
              display={{ base: "none", md: "flex" }}
            />
          </HStack>
          <Flex
            alignItems="center"
            fontFamily="Inter"
            fontWeight="bold"
            display={{ base: "none", md: "flex" }}
          >
            <Link to="explore">
              <Text
                px="6"
                py="2"
                fontFamily="sans-serif"
                fontWeight="bold"
                borderRadius="lg"
                _hover={{ bg: "#F7CD6B" }}
              >
                Explore Jobs
              </Text>
            </Link>
            <Link to="hire">
              <Text
                px="6"
                py="2"
                fontFamily="sans-serif"
                fontWeight="bold"
                borderRadius="lg"
                _hover={{ bg: "#F7CD6B" }}
              >
                Hire somebody
              </Text>
            </Link>
            <Link to="post">
              <Text
                px="6"
                py="2"
                fontFamily="sans-serif"
                fontWeight="bold"
                borderRadius="lg"
                _hover={{ bg: "#F7CD6B" }}
              >
                Post a Job
              </Text>
            </Link>
            {currentUser ? (
              <Button
                rightIcon={<BsPersonCircle />}
                mx="4"
                bg="#F7CD6B"
                onClick={() => {
                  navigate("/profile");
                }}
              >
                My Profile
              </Button>
            ) : (
              <Button
                mx="4"
                onClick={() => {
                  navigate("/signup");
                }}
                bg="#F7CD6B"
                _hover={{ opacity: 0.8 }}
              >
                Sign Up
              </Button>
            )}
          </Flex>
          <IconButton
            size="md"
            fontSize="lg"
            background="black"
            color="white"
            p={3}
            icon={isOpen ? <ImCross /> : <GiHamburgerMenu />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            _hover={{
              background: "white",
              color: "black",
            }}
          />
        </Flex>
        {isOpen ? (
          <Box w="100%" pb={4} display={{ md: "none" }}>
            <Stack
              as="nav"
              w="100%"
              spacing={4}
              alignItems="center"
              fontFamily="Inter"
              fontWeight="bold"
            >
              <Link to="explore">
                <Text
                  px="6"
                  py="2"
                  fontFamily="sans-serif"
                  fontWeight="bold"
                  borderRadius="lg"
                  _hover={{ bg: "#F7CD6B" }}
                >
                  Explore Jobs
                </Text>
              </Link>
              <Link to="hire">
                <Text
                  px="6"
                  py="2"
                  fontFamily="sans-serif"
                  fontWeight="bold"
                  borderRadius="lg"
                  _hover={{ bg: "#F7CD6B" }}
                >
                  Hire somebody
                </Text>
              </Link>
              <Link to="post">
                <Text
                  px="6"
                  py="2"
                  fontFamily="sans-serif"
                  fontWeight="bold"
                  borderRadius="lg"
                  _hover={{ bg: "#F7CD6B" }}
                >
                  Post a Job
                </Text>
              </Link>
              {currentUser ? (
                <Button
                  rightIcon={<BsPersonCircle />}
                  mx="4"
                  bg="#F7CD6B"
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  My Profile
                </Button>
              ) : (
                <Button
                  mx="4"
                  onClick={() => {
                    navigate("/signup");
                  }}
                  bg="#F7CD6B"
                  _hover={{ opacity: 0.8 }}
                >
                  Sign Up
                </Button>
              )}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default WhiteNavigationBar;

// function NavigationBar() {
//   return (
//     <Flex px="4" bg="#EAD657" justify="space-between" align="center">
//       <Flex pr="8">

//       </Flex>
//     </Flex>
//   );
// }
