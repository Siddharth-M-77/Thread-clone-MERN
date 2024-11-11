import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import PostTwo from "./Post/PostTwo";
import PostOne from "./Post/Postone";

const Post = () => {
  return (
    <Stack
    
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"start"}
      p={2}
      width={"50%"}
      mx={"auto"}
      bgcolor={"#181818"}
      color={"white"}
      minHeight={"80vh"}
      borderRadius={"20px"}
      sx={{
        ":hover": {
          cursor: "pointer",
          boxShadow: "10px 10px 10px gray",
        },
        transition: "all ease-in-out 0.3s",
      }}
    >
      <Stack flexDirection={"row"} gap={2} height={"100%"}>
        <PostOne />
        <PostTwo />
      </Stack>
      <Stack
        flexDirection={"row"}
        gap={2}
        alignItems={"center"}
        justifyContent={"start"}
      >
        <Typography variant="p" alignSelf={"start"}>
          18h
        </Typography>
        <BsThreeDots size={28} />
      </Stack>
    </Stack>
  );
};

export default Post;
