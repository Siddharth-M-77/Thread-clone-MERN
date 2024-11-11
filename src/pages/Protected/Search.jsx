import React from "react";
import SearchInput from "../../components/Search/SearchInput";
import { Stack } from "@mui/material";
import ProfileBar from "../../components/Search/ProfileBar";

const Search = () => {
  return (
    <Stack
      flexDirection={"column"}
      gap={2}
      width={"50%"}
      mx={"auto"}
      borderRadius={"20px"}
      minHeight={"100%"}
    >
      <SearchInput />
      <Stack
        flexDirection={"column"}
        alignItems={"center"}
        gap={2}
        overflow={"auto"}
        sx={{
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "gray",
            borderRadius: "8px",
          },
        }}
      >
        <ProfileBar />
        <ProfileBar />
        <ProfileBar />
        <ProfileBar />
        <ProfileBar />
        <ProfileBar />
        <ProfileBar />
        <ProfileBar />
        <ProfileBar />
        <ProfileBar />
        <ProfileBar />
      </Stack>
    </Stack>
  );
};

export default Search;
