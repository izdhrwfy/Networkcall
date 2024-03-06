import {
  Box,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import React from "react";

function UserForm() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Box
        bg="teal.200"
        w={["full", "md"]}
        p={[8, 10]}
        mt={[20, "10vh"]}
        mx="auto"
        border={["none", "1px"]}
        borderColor={["", "gray.300"]}
        borderRadius={10}
      >
        <VStack spacing={4} align="flex-start" w="full">
          <VStack spacing={1} align={["flex-start", "left"]} w="full">
            <Heading fontWeight="bold">Page Register</Heading>
          </VStack>

          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input bg="white" rounded="6" variant="filled" />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" rounded="6" variant="filled" />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                variant="filled"
              />

              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {" "}
                  {show ? "Hide" : "Show"}{" "}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button colorScheme="gray" w={["full", "auto"]} alignSelf="center">
            Submit
          </Button>
        </VStack>
      </Box>
    </>
  );
}

export default UserForm;
