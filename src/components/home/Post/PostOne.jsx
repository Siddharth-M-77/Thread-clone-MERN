import { Avatar, AvatarGroup, Badge, Stack, Stepper } from "@mui/material";
import React from "react";

const PostOne = () => {
  return (
    <Stack
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={2}
    >
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <Avatar
            alt="+"
            // src=""
            sx={{
              height: 20,
              width: 20,
              bgcolor: "green",
              position: "relative",
              right: 8,
              bottom: 15,
              mt: 2,
              ml: 2,
            }}
          >
            +
          </Avatar>
        }
      >
        <Avatar alt="SAM" src="" sx={{ width: 40, height: 40 }} />
      </Badge>
      <Stack
        flexDirection={"column"}
        alignItems={"center"}
        gap={2}
        height={"100%"}
      >
        <Stepper
          orientation={"vertical"}
          activeStep={0}
          sx={{
            height: "100%",
            border: "0.1rem solid gray",
            width: "1%",
          }}
        ></Stepper>
        <AvatarGroup
          total={3}
          sx={{
            "& .MuiAvatar-root": { width: 24, height: 24, fontSize: 12 },
          }}
        >
          <Avatar />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};

export default PostOne;
