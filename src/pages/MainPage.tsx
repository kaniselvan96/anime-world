import React, { useEffect } from "react";
import AWSearchBar from "../components/molecules/SearchBar";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { fetchAnimes } from "../redux/animeSlice";
import { AnimeList } from "../components/organisms/AnimeList";
import { Box } from "@mui/material";

const MainPage = () => {
  // const [searchValue, setSearchValue] = useState("");
  const dispatch = useAppDispatch();
  const { list, loading } = useAppSelector((state) => state.anime);

  useEffect(() => {
    dispatch(fetchAnimes("with knife"));
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 20,
      }}
    >
      <AWSearchBar
        label="Search Anime"
        onSearch={(e) => {
          console.log("Search: ", e.target.value);
        }}
      />
      <AnimeList
        animes={list}
        onSelect={(id) => console.log("Clicked : ", id)}
        isLoading={loading}
      />
    </Box>
  );
};

export default MainPage;
