import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
const Post = () => {
  return (
    <Stack
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"start"}
      p={2}
      width={"40%"}
      mx={"auto"}
      bgcolor={"#181818"}
      color={"white"}
      minHeight={"100vh"}
      borderRadius={"20px"}
    >
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
      >
        <Avatar src="" alt="img" />
        <Typography variant="h5" alignSelf={"start"}>
          Siddharth
        </Typography>
        <Typography variant="p" alignSelf={"start"}>
          18h
        </Typography>
      </Stack>
      <BsThreeDots />
    </Stack>
  );
};

export default Post;
