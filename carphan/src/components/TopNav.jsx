/* eslint-disable react/prop-types */
import { Flex, Avatar, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { currentUser } from "../redux/slices/authSLice";
import SearchBar from "./searchBar";
const TopNav = () => {
  const user = useSelector(currentUser);
  return (
    <Flex
      width={"full"}
      height={"8vh"}
      paddingX={12}
      rounded={12}
      gap={1}
      alignItems={"center"}>
      <Flex width={"100%"} justifyContent={"flex-end"}>
        <SearchBar />
      </Flex>
      <Flex
        width={"65%"}
        gap={3}
        justifyContent={"flex-end"}
        alignItems={"center"}>
        <Text fontWeight={500} color={"#ffffff"}>
          {user && user.otherInfo.firstName} {user && user.otherInfo.lastName}
        </Text>
        <Avatar
          name={`${user && user.otherInfo.firstName} ${
            user && user.otherInfo.lastName
          }`}
          src=''
          size='sm'
        />
      </Flex>
    </Flex>
  );
};

export default TopNav;
