import { Box } from "@mui/material";
import type { Anime } from "../../types/anime";
import AnimeCard from "../molecules/AnimeCard";
import { AWText } from "../atoms/Text/AWText";

interface AnimeListProps {
  animes: Anime[];
  onSelect?: (id: number) => void;
  isLoading: boolean;
}

const EmptyAnime = {
  id: 0,
  title: "",
  images: {
    jpg: {
      image_url: "",
      small_image_url: "",
      large_image_url: "",
    },
  },
};

export const AnimeList = ({
  animes,
  onSelect,
  isLoading = false,
}: AnimeListProps) => (
  <Box
    style={{
      display: "flex",
      gap: 20,
      flexWrap: "wrap",
      justifyContent: "center",
    }}
  >
    {isLoading ? (
      <>
        {Array.from(Array(20), () => {
          return <AnimeCard anime={EmptyAnime} isLoading={isLoading} />;
        })}
      </>
    ) : animes?.length < 1 ? (
      <>
        <AWText text="No Anime Found" variant="h6" />
      </>
    ) : (
      animes.map((anime) => (
        <Box key={anime.id}>
          <AnimeCard anime={anime} onClick={onSelect} />
        </Box>
      ))
    )}
  </Box>
);
