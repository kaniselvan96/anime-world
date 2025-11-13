import { Box } from "@mui/material";
import { useNavigation } from "../hooks/useNavigation";
import AnimeList from "../components/organisms/AnimeList";
import { FAVORITES_KEY, getLocalStorage } from "../utils/localStorage";
import type { Anime } from "../types/anime";

const FavouritesPage = () => {
  const { clickToNavigate } = useNavigation();
  const favorites = getLocalStorage<Anime>(FAVORITES_KEY);

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
