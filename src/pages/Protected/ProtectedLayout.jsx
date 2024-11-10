import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/common/Header";
import { Stack } from "@mui/material";

const ProtectedLayout = () => {
  return (
    <Stack flexDirection={'column'} maxWidth={'800px'} minWidth={'100%'} mx={'auto'} overflow={'hidden'}>
    <Header/>
      <Outlet />;
    </Stack>
  );
};

export default ProtectedLayout;
