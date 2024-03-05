import { 
    Flex,
    Box,
    Link as ChakraLink,
    Text,
    
} from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <Flex bg="teal.500" p="4" pl="3em" pr="3em" color="white" alignItems="center">
                <Box>
                    <Text fontSize="xl" fontWeight="bold">
                        BrandName
                    </Text>
                </Box>
                <Box ml="auto">
                    <ChakraLink as={RouterLink} to="/user" mr="4">
                        Users
                    </ChakraLink>
                    <ChakraLink as={RouterLink} to="/register">
                        Register
                    </ChakraLink>
                </Box>
            </Flex>
        </>
  );
};

export default Navbar;
