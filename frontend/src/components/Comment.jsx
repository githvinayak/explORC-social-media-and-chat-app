import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Action from "./Action";

const Comment = () => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar src='/user.jpg' size={"sm"} />
        <Flex gap={1} w={"full"} flexDirection={"column"}>
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize={"sm"} fontWeight='bold'>
              User name
            </Text>
            <Flex alignItems={"center"} gap={2}>
              <Text size={"sm"} color={"gray.light"}>
                1d
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>
          <Text fontSize={"sm"}>This is a comment</Text>
          <Action liked={liked} disliked={disliked} />
          <Text fontSize={"sm"} color={"gray.light"}>
            {128 + (liked ? 1 : 0) - (disliked ? 1 : 0)} likes
          </Text>
        </Flex>
      </Flex>
      <Divider/>
    </>
  );
};

export default Comment;
