import { Avatar, Button, Stack, Typography } from "@mui/material";
import React from "react";

const ProfileBar = () => {
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={2}
      py={1.5}
      boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.1)"}
      borderRadius={"15px"}
      width={"90%"}
      maxWidth={"750px"}
      mx={"auto"}
      bgcolor={"#fff"}   // Background color for better visibility
    >
      <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
        <Avatar />
        <Stack>
          <Typography variant="h6" fontWeight={"bold"} fontSize={15}>
            codewithsidd
          </Typography>
          <Typography variant="body2" fontWeight={"bold"} sx={{ opacity: 0.7 }} fontSize={13}>
            Hey, I am a MERN Stack Developer🔥
          </Typography>
          <Typography variant="body2" fontWeight={"bold"} fontSize={13} color="textSecondary">
            3K followers
          </Typography>
        </Stack>
      </Stack>
      <Button
        variant="outlined"
        sx={{
          color: "black",
          borderColor: "gray",
          textTransform: "none",
          fontSize: 14,
          px: 2,
          py: 0.5,
          height: 35
        }}
      >
        Follow
      </Button>
    </Stack>
  );
};

export default ProfileBar;
