import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/common/Header";
import { Stack } from "@mui/material";

const ProtectedLayout = () => {
  return (
    <Stack
      flexDirection={"column"}
      minHeight={'100vh'}
      height={'79vh'}
      maxWidth={"800px"}
      minWidth={"100%"}
      mx={"auto"}
      overflow={"hidden"}
    >
      <Header />
      <Outlet />;
    </Stack>
  );
};

export default ProtectedLayout;
