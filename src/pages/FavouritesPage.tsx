import { Box } from "@mui/material";
import { useNavigation } from "../hooks/useNavigation";
import AnimeList from "../components/organisms/AnimeList";
import { FAVORITES_KEY, getLocalStorage } from "../utils/localStorage";
import type { Anime } from "../types/anime";
import PageLoader from "../components/organisms/PageLoader";
import { useEffect, useState } from "react";

const FavouritesPage = () => {
  const { clickToNavigate } = useNavigation();
  const favorites = getLocalStorage<Anime>(FAVORITES_KEY);
  const [showLoader, setShowLoader] = useState<boolean>(true);
  const duration = 3500;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  if (showLoader)
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
          src="https://lottie.host/fcbe321c-e07b-451c-8960-899b3f8e8dc6/A9vSTvBA2I.lottie"
          duration={duration}
        />
      </Box>
    );

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
      <AnimeList
        animes={favorites}
        onSelect={(id) => clickToNavigate(`/anime/${id}`)}
        isLoading={false}
        title={"Favourites List:"}
      />
    </Box>
  );
};

export default FavouritesPage;
