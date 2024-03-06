import { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const UsersTable = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("http://localhost:3000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <TableContainer w={["full", "md"]} p={[8, 0]} mt={[20, "10vh"]} mx="auto">
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th color="teal.500">NAME</Th>
            <Th color="teal.500">EMAIL</Th>
            <Th color="teal.500">PASSWORD</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, index) => (
            <Tr key={user.id} bg={index % 2 === 0 ? "teal.500" : "white"}>
              <Td color={index % 2 === 0 ? "black" : "teal.500"}>
                {user.name}
              </Td>
              <Td color={index % 2 === 0 ? "black" : "teal.500"}>
                {user.email}
              </Td>
              <Td color={index % 2 === 0 ? "black" : "teal.500"}>
                {user.password}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
