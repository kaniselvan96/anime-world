import axios from "axios";
import type { Anime } from "../types/anime";

interface ApiResponse {
  data: Anime[];
}

export const fetchAnimeList = async (query: string): Promise<Anime[]> => {
  const res = await axios.get<ApiResponse>(
    `https://api.jikan.moe/v4/anime?q=${query}`
  );
  return res.data.data;
};
