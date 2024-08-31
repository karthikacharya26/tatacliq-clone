import {
    Box,
    Button,
    Divider,
    Flex,
    Img,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    SimpleGrid,
    Text,
    useDisclosure,
    useToast,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import axios from "axios";
  import Login from "./Login";
  import { useDispatch } from "react-redux";
  import { loginUser } from "../redux/Login/actions";
  
  const Signup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      
    });
  
    const toast = useToast();
  
    // Handle input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Password mismatch",
          description: "Passwords do not match. Please try again.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }
  
      try {
        const response = await axios.post(
          `https://tatacliq-clone-gzf3.onrender.com/user/register`,
          {
            name: formData.username,
            email: formData.email,
            password: formData.password,
          }
        );
  
        if (response.status === 201) {
          toast({
            title: "Account created",
            description: `Congratulations ${formData.username}, you are registered!`,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          onClose();
          const obj = { email: formData.email, password: formData.password };
          dispatch(loginUser(obj));
  
          const isAuthUser = { isAuth: true, data: formData.username };
  
          localStorage.setItem("user", JSON.stringify(isAuthUser));
          setFormData({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        }
      } catch (error) {
        console.error("Error creating account:", error);
        toast({
          title: "Error",
          description:
            error.response?.data?.message ||
            "An error occurred while creating your account.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    };
  
    return (
      <Box>
        <Button
          color={"white"}
          bgColor={"red"}
          borderRadius={"20px"}
          onClick={onOpen}
        >
          Login / Register
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Account</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <SimpleGrid spacing={"15px"}>
                  

                  <Input
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
  
                 
  
                  <Button
                    bgColor={"#da1c5c"}
                    color={"white"}
                    borderRadius={"20px"}
                    _hover={{ bgColor: "grey" }}
                    type="submit"
                  >
                    Join Now
                  </Button>
                </SimpleGrid>
              </form>
  
              <Divider />
              <SimpleGrid spacing={"12px"} py={"20px"}>
                <Text>Already have an account?</Text>
                <Box w={"40%"} onClose={onClose}>
                  <Login />
                </Box>
              </SimpleGrid>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    );
  };
  
  export default Signup;