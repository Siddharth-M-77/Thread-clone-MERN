import React from "react";

import { Route, Routes } from "react-router-dom";
import Loading from "./components/common/Loading";
import Header from "./components/common/Header";
import Search from "./pages/Protected/Search";
import Home from "./pages/Protected/Home";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/Protected/Register";
import { Box } from "@mui/material";
import ProtectedLayout from "./pages/Protected/ProtectedLayout";

function App() {
  return (
    <Box minHeight={"100vh"}>
      <Routes>
        <Route path="register" element={<Register />} />

        <Route path="/" element={<ProtectedLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
