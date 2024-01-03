import {
  Box,
  Flex,
  Button,
  Text,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { currentUser } from "../../redux/slices/authSLice";
import Sidebar from "../../components/sidebar";
import TopNav from "../../components/TopNav";
import { useUserCarQuery } from "../../redux/api_Slices/carSlice";
import { Link } from "react-router-dom";
const MyVehicle = () => {
  const user = useSelector(currentUser);
  const { data: cars = [] } = useUserCarQuery(user.otherInfo._id);

  console.log("cars", cars);
  return (
    <Box className='home1' width={"100%"} height={"fit-content"} bg={"#00111C"}>
      <Flex width={"100%"} height={"fit-content"} bg={"#00111C"}>
        <Sidebar />
        <Box width={"100%"} height={"100vh"} bg={"#00111C"} paddingY={4}>
          <TopNav />
          <Box paddingX={10} paddingY={2} width={"full"} height={"8vh"}>
            <Text fontSize={20} fontWeight={500} color={"#ffffff"}>
              My Vehicles
            </Text>
          </Box>

          <Flex
            bg={"#00111C"}
            width={"100%"}
            height={"150vh"}
            paddingX={10}
            justifyContent={"center"}>
            <TableContainer
              width={"100%"}
              height={"fit-content"}
              bg={"#00283F"}
              padding={3}
              rounded={16}>
              <Table colorScheme='teal' rounded={12}>
                <Thead>
                  <Tr>
                    <Th color={"#ffffff"}>Car ID</Th>
                    <Th color={"#ffffff"}>Car Name</Th>
                    <Th color={"#ffffff"}> Car Type </Th>
                    <Th color={"#ffffff"}> Price (£)</Th>
                    <Th color={"#ffffff"}> Full Details</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {cars.map((car) => (
                    <>
                      <Tr key={car._id}>
                        <Td color={"#ffffff"}>{car._id}</Td>
                        <Td color={"#ffffff"}>{car.name}</Td>
                        <Td color={"#ffffff"}>{car.vehicleType}</Td>
                        <Td color={"#ffffff"}>{car.price}</Td>

                        <Td color={"#ffffff"}>
                          <Link to={`/car/${car._id}`}>
                            <Button rounded={12}>Details</Button>
                          </Link>
                        </Td>
                      </Tr>
                    </>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default MyVehicle;
