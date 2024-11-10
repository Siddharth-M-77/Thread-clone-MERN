import { Stack } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <div>
      <Stack
        flexDirection={"row"}
        height={52}
        justifyContent={"space-around"}
        position={"sticky"}
        top={0}
        alignItems={"center"}
      >
        <img width={60} height={48} src="/Threads-logo-black-bg.webp" alt="" />
        <Stack
          bgcolor={"aliceblue"}
          justifyContent={"center"}
          height={96}
          zIndex={2}
          color={"white"}
          width={"550px"}
        >
          <Navbar />
        </Stack>
        <Stack>
          <IoMenu className="image-icon" size={36} mt={2} />
        </Stack>
      </Stack>
    </div>
  );
};

export default Header;
