import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import pic from "../assets/user.jpg";
import {
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
} from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { TbShare } from "react-icons/tb";
import { toast } from "react-toastify";

const UserHeader = () => {
  const copyUrl = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      toast.success("Profile link copied");
    });
  };
  return (
    <>
      <VStack gap={4} alignItems={"start"}>
        <Flex justifyContent={"space-between"} w={"full"}>
          <Box>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              User Name
            </Text>
            <Flex gap={2} alignItems={"center"}>
              <Text fontSize={"sm"}>username</Text>
              <Text
                fontSize={"xs"}
                bg={"gray.dark"}
                color={"gray.light"}
                p={1}
                borderRadius={"full"}
              >
                threads.net
              </Text>
            </Flex>
          </Box>
          <Box>
            <Avatar src={pic} size={"xl"} name='name' />
          </Box>
        </Flex>
        <Text>Co-founder and chairman of meta</Text>
        <Flex w={"full"} justifyContent={"space-between"}>
          <Flex gap={2} alignItems={"center"}>
            <Text color={"gray.light"}>110K followers</Text>
            <Box w={1} h={1} borderRadius={"full"} bg={"gray.light"}></Box>
            <Link color={"gray.light"}>github.com</Link>
          </Flex>
          <Flex>
            <Box className=' h-[40px] w-[px] p-[8px] rounded-full hover:bg-[#1e1e1e]'>
              <BsInstagram size={24} cursor={"pointer"} />
            </Box>
            <Box className=' h-[40px] w-[px] p-[8px] rounded-full hover:bg-[#1e1e1e]'>
              <Menu>
                <MenuButton>
                  <TbShare size={24} cursor={"pointer"} />
                </MenuButton>
                <Portal>
                  <MenuList bg={"gray.dark"}>
                    <MenuItem onClick={copyUrl} bg={"gray.dark"}>
                      Copy link
                    </MenuItem>
                  </MenuList>
                </Portal>
              </Menu>
            </Box>
          </Flex>
        </Flex>
        <Flex w={"full"}>
          <Flex
            flex={1}
            borderBottom={"1.5px solid white"}
            justifyContent={"center"}
            pb={"3"}
            cursor={"pointer"}
          >
            <Text fontWeight={"bold"}>Posts</Text>
          </Flex>
          <Flex
            flex={1}
            borderBottom={"1px solid gray"}
            justifyContent={"center"}
            pb={"3"}
            cursor={"pointer"}
          >
            <Text fontWeight={"bold"} color={"gray.light"}>Replies</Text>
          </Flex>
        </Flex>
      </VStack>
    </>
  );
};

export default UserHeader;
