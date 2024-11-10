import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const Register = () => {
  return (
    <Stack
      height={"100vh"}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        backgroundImage: 'url("/register-bg.webp")',
        blockSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 600px",
      }}
    >
      <Stack
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"100%"}
        width={"30%"}
        gap={2}
        mt={14}
      >
        <Typography
          alignSelf={"center"}
          variant="h4"
          fontSize={"1.5rem"}
          fontWeight={"bold"}
        >
          Register with email
        </Typography>
        <TextField
          variant="outlined"
          sx={{ width: "100%" }}
          placeholder="Enter your name...."
        />
        <TextField
          variant="outlined"
          width={"100%"}
          placeholder="Enter your email...."
          sx={{ width: "100%" }}
        />
        <TextField
          variant="outlined"
          width={"100%"}
          sx={{ width: "100%" }}
          placeholder="Enter your password...."
        />
        <Button
          size="large"
          sx={{
            bgcolor: "green",
            width: "100%",
            color: "white",
            fontSize: "1rem",
            ":hover": {
              bgcolor: "blue",
              cursor: "pointer",
            },
          }}
        >
          Log In
        </Button>
        <Typography variant="subtitle2" fontSize={"1.2rem"}>
          Already have an account ?
          <span
            className="login-link"
            style={{ color: "blue", hover: "cursor-pointer" }}
          >
            LogIn
          </span>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Register;
