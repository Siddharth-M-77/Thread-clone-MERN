import { Avatar, Button, Input, Stack, Typography } from "@mui/material";
import React from "react";

const InputComonent = () => {
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      height={28}
      width={"50%"}
      my={5}
      mx={"auto"}
      p={3}
      borderBottom={"2px solid black"}
    >
      <Stack flexDirection={"row"} alignItems={"center"} gap={"2"} pb={2}>
        <Avatar src="" alt="profile" />
        <Typography color="GrayText">Start a thred...</Typography>
      </Stack>
      <Button
        size="medium"
        sx={{
          bgcolor: "gray",
          color: "aliceblue",
          ":hover": {
            bgcolor: "Black",
            cursor: "pointer",
          },
        }}
      >
        Post
      </Button>
    </Stack>
  );
};

export default InputComonent;
