import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { BiSolidUpvote } from "react-icons/bi";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { PiShareFatBold } from "react-icons/pi";

const UserPost = () => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  return (
    <>
      <Link to={""}>
        <Flex gap={3} mb={4} py={5}>
          <Flex flexDirection={"column"} alignItems={"center"}>
            <Avatar size={"md"} name='vinayak' src='/user.jpg'></Avatar>
            <Box w={1} bg={"gray.light"} my={2} h={"full"}></Box>
            <Box position={"relative"} w={"full"}>
              <Avatar
                size={"xs"}
                position={"absolute"}
                top={"0px"}
                left={"15px"}
                p={"2px"}
                name='vinayak'
                src='/user.jpg'
              ></Avatar>
              <Avatar
                size={"xs"}
                position={"absolute"}
                bottom={"0px"}
                right={"-5px"}
                p={"2px"}
                name='vinayak'
                src='/user.jpg'
              ></Avatar>
              <Avatar
                size={"xs"}
                position={"absolute"}
                bottom={"0px"}
                left={"4px"}
                p={"2px"}
                name='vinayak'
                src='/user.jpg'
              ></Avatar>
            </Box>
          </Flex>
          <Flex flex={1} flexDirection={"column"} gap={2}>
            <Flex justifyContent={"space-between"} w={"full"}>
              <Flex alignItems={"center"} gap={1} w={"full"}>
                <Text>vinayak</Text>
                <MdVerified className='text-sky-500' />
              </Flex>
              <Flex gap={4} alignItems={"center"}>
                <Text fontSize={"sm"} color={"gray.light"}>
                  1d
                </Text>
                <BsThreeDots />
              </Flex>
            </Flex>
            <Text fontSize={"sm"}>This the title of this post.</Text>
            <Box borderRadius={6}>
              <Image
                name='image'
                src='https://images.pexels.com/photos/24861559/pexels-photo-24861559/free-photo-of-view-of-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
              />
            </Box>
            <Flex gap={3} my={1}>
              <Flex
                gap={3}
                my={2}
                alignItems={"center"}
                onClick={(e) => e.preventDefault()}
              >
                <Flex gap={2} p={1} bg={"gray.dark"} borderRadius={8}>
                  {liked ? (
                    <BiSolidUpvote
                      className=' h-6 w-6 text-red-500'
                      onClick={() => setLiked(!liked)}
                    />
                  ) : (
                    <BiUpvote
                      className=' h-6 w-6'
                      onClick={() => {
                        setLiked(!liked);
                        setDisliked(false);
                      }}
                    />
                  )}
                  <Text>5</Text>
                  {disliked ? (
                    <BiSolidDownvote
                      className=' h-6 w-6 text-red-500'
                      onClick={() => setDisliked(!disliked)}
                    />
                  ) : (
                    <BiDownvote
                      className=' h-6 w-6'
                      onClick={() => {
                        setLiked(false);
                        setDisliked(!disliked);
                      }}
                    />
                  )}
                </Flex>
                <FaRegComment className='h-6 w-6 hover:animate-bounce transition-all' />
                <PiShareFatBold className='h-6 w-6 hover:animate-bounce transition-all' />
              </Flex>
            </Flex>
            <Flex gap={2} alignItems={"center"}>
              <Text fontSize={"sm"} color={"gray.light"}>
                128 replies
              </Text>
              <Box
                h={0.5}
                w={0.5}
                borderRadius={"full"}
                bg={"gray.light"}
              ></Box>
              <Text fontSize={"sm"} color={"gray.light"}>
                128 replies
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Link>
    </>
  );
};

export default UserPost;
