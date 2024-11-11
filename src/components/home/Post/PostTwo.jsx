import { Stack, Typography } from "@mui/material";
import React from "react";
import { FaRegHeart, FaRegComment, FaRetweet, FaHeart } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";

const PostTwo = () => {
  return (
    <Stack
      flexDirection={"column"}
      //   alignItems={"start"}
      justifyContent={"space-between"}
      gap={2}
    >
      <Stack flexDirection={"column"} gap={6}>
        <Stack>
          <Typography variant="p" fontSize={"1rem"}>
            Siddharth MAddheshiya
          </Typography>
          <Typography variant="caption">
            Hey, I am a MERN Stack Developer🔥
          </Typography>
        </Stack>
        <img
          src="/error-bg.png"
          alt=""
          className="post-img"
          loading="lazy"
          width={"400px"}
          height={"auto"}
        />
      </Stack>
      <Stack flexDirection={"column"} gap={2}>
        <Stack flexDirection={"row"} gap={1}>
          <FaRegHeart size={30} />
          <FaRegComment size={30} />
          <FaRetweet size={30} />
          <IoMdSend size={30} />
        </Stack>
        <Stack flexDirection={"row"} alignItems={"center"} gap={1} position={'relative'}
        top={-3}
        left={4}>
            
         <Typography variant="caption" fontSize={'1.1rem'} color="GrayText">
         2 Likes.
         </Typography>
         <Typography variant="caption" fontSize={'1.1rem'} color="GrayText">
         2 comments
         </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PostTwo;
