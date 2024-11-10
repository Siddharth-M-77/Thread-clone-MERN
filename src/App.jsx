import React from "react";

import { Route, Routes } from "react-router-dom";
import Loading from "./components/common/Loading";
import Header from "./components/common/Header";
import Search from "./pages/Protected/Search";
import Home from "./pages/Protected/Home";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/Protected/Register";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
        {/* <Route path="/user" element={<Post />} /> */}
        {/* <Route path="/post" element={<Post />} /> */}
      
      </Routes>
    </>
  );
}

export default App;
