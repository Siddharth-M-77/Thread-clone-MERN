import React from "react";
import Stack from "@mui/material/Stack";
import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div>
      <Stack
        spacing={2}
        display={"flex"}
        alignItems={"center"}
        height={"100%"}
        width={"100%"}
        minHeight={"50vh"}
        my={5}
        justifyContent={"center"}
        fontSize={"50px"}
      >
        <CircularProgress color="success" />
      </Stack>
    </div>
  );
};

export default Loading;
