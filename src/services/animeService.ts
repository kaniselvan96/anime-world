import axios from "axios";
import type { Anime } from "../types/anime";

interface AnimeListResponse {
  data: Anime[];
}

interface AnimeDetailResponse {
  data: Anime; // single object
}

export const fetchAnimeList = async (query: string): Promise<Anime[]> => {
  const res = await axios.get<AnimeListResponse>(
    `https://api.jikan.moe/v4/anime?q=${query}`
  );
  return res.data.data;
};

export const fetchAnimeById = async (id: number): Promise<Anime> => {
  const res = await axios.get<AnimeDetailResponse>(
    `https://api.jikan.moe/v4/anime/${id}/full`
  );
  return res.data.data;
};

export const fetchTopAnimeList = async (): Promise<Anime[]> => {
  const res = await axios.get<AnimeListResponse>(
    `https://api.jikan.moe/v4/top/anime`
  );
  return res.data.data;
};
