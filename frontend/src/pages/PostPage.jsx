import React, { useState } from "react";
import { MdVerified } from "react-icons/md";
import { Avatar, Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { BiSolidUpvote } from "react-icons/bi";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { PiShareFatBold } from "react-icons/pi";
import Comment from "../components/Comment";
import Action from "../components/Action";

const PostPage = () => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  return (
    <>
      <Flex>
        <Flex alignItems={"center"} w={"full"} gap={3}>
          <Avatar src='/user.jpg' size={"md"}></Avatar>
          <Flex alignItems={"center"} gap={1}>
            <Text fontSize='sm' fontWeight='bold'>
              User Name
            </Text>
            <MdVerified className='text-sky-500' />
          </Flex>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text color={"gray.light"}>1d</Text>
          <BsThreeDots />
        </Flex>
      </Flex>
      <Text my={3}>Lets talk about threads</Text>
      <Box borderRadius={6} border={"1px solid gray"} overflow={"hidden"}>
        <Image
          name='image'
          src='https://images.pexels.com/photos/24861559/pexels-photo-24861559/free-photo-of-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
        />
      </Box>
     <Action liked={liked} disliked={disliked} setLiked={setLiked} setDisliked={setDisliked}/>
      <Flex gap={2} alignItems={"center"}>
        <Text fontSize={"sm"} color={"gray.light"}>
          128 replies
        </Text>
        <Box h={0.5} w={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text fontSize={"sm"} color={"gray.light"}>
          {128 + (liked ? 1 : 0) - (disliked ? 1 : 0)} likes
        </Text>
      </Flex>
      <Divider my={4}/>
      <Comment/>
      <Comment/>
      <Comment/>
    </>
  );
};

export default PostPage;
