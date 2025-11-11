import { Box } from "@mui/material";
import type { Anime } from "../../types/anime";
import AnimeCard from "../molecules/AnimeCard";

interface AnimeListProps {
  animes: Anime[];
  onSelect?: (id: number) => void;
}

export const AnimeList = ({ animes, onSelect }: AnimeListProps) => (
  <Box
    style={{
      display: "flex",
      gap: 20,
      flexWrap: "wrap",
      justifyContent: "center",
    }}
  >
    {animes.map((anime) => (
      <Box key={anime.id}>
        <AnimeCard anime={anime} onClick={onSelect} />
      </Box>
    ))}
  </Box>
);
