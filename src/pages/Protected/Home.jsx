import React from "react";
import InputComonent from "../../components/home/InputComonent";
import { Stack } from "@mui/material";
import Post from "../../components/home/Post";

const Home = () => {
  return (
    <Stack height={"100%"}>
      <InputComonent />
      <Stack
        flexDirection={"column"}
        mb={10}
        gap={2}
        sx={{ overflowY: "auto" }}
        maxHeight={"80vh"}
        borderRadius={"20px"}
        overflow={"hidden"}
      >
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Stack>
    </Stack>
  );
};

export default Home;
