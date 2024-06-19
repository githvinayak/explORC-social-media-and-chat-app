import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BiSolidUpvote } from "react-icons/bi";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { PiShareFatBold } from "react-icons/pi";

const Action = ({liked,disliked,setDisliked,setLiked}) => {
  return (
    <>
      <Flex gap={3} my={1}>
        <Flex
          gap={3}
          my={2}
          alignItems={"center"}
          onClick={(e) => e.preventDefault()}
        >
          <Flex gap={2} p={1} borderRadius={8}>
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
            <Text>{128 + (liked ? 1 : 0) - (disliked ? 1 : 0)}</Text>
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
    </>
  );
};

export default Action;
