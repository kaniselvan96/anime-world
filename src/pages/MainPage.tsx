import { useEffect, useMemo, useState } from "react";
import AWSearchBar from "../components/molecules/SearchBar";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxHook";
import { fetchAnimes } from "../redux/animeSlice";
import { Box } from "@mui/material";
import { useNavigation } from "../hooks/useNavigation";
import { debounce } from "lodash";
import AnimeList from "../components/organisms/AnimeList";
import PageLoader from "../components/organisms/PageLoader";
import ErrorPageTemplate from "../components/templates/ErrorPageTemplate";

const MainPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const { clickToNavigate } = useNavigation();
  const { list, pagination, loading, error } = useAppSelector(
    (state) => state.anime
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setPage(1);
  };

  const debouncedSearch = useMemo(() => {
    return debounce(handleSearch, 250);
  }, []);

  useEffect(() => {
    dispatch(fetchAnimes({ query: searchValue, page }));
  }, [dispatch, searchValue, page]);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  if (error) return <ErrorPageTemplate />;

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
      <PageLoader
        src="https://lottie.host/66d176db-ea78-47f8-aa20-0c1a8be1878f/lgcLltfbxz.lottie"
        duration={3500}
        sessionKey="hasVisitedSite"
      />
      <>
        <AWSearchBar label="Search anime by title" onSearch={debouncedSearch} />
        <AnimeList
          animes={list}
          onSelect={(id) => clickToNavigate(`/anime/${id}`)}
          isLoading={loading}
          title={searchValue ? "Searched Animes :" : "Top Animes List :"}
          pagination={pagination}
          setPage={setPage}
        />
      </>
    </Box>
  );
};

export default MainPage;
