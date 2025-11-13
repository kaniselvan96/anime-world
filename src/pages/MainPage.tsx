import { useEffect, useMemo, useState } from "react";
import AWSearchBar from "../components/molecules/SearchBar";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxHook";
import { fetchAnimes } from "../redux/animeSlice";
import { AnimeList } from "../components/organisms/AnimeList";
import { Box } from "@mui/material";
import { useNavigation } from "../hooks/useNavigation";
import { debounce } from "lodash";

const MainPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const { clickToNavigate } = useNavigation();
  const { list, loading } = useAppSelector((state) => state.anime);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const debouncedSearch = useMemo(() => {
    return debounce(handleSearch, 250);
  }, []);

  useEffect(() => {
    dispatch(fetchAnimes(searchValue));
  }, [dispatch, searchValue]);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
      }}
    >
      <AWSearchBar label="Search anime by title" onSearch={debouncedSearch} />

      <AnimeList
        animes={list}
        onSelect={(id) => clickToNavigate(`/anime/${id}`)}
        isLoading={loading}
        title={searchValue ? "Searched Animes :" : "Top Animes List :"}
      />
    </Box>
  );
};

export default MainPage;
