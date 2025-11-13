import axios from "axios";
import type { Anime, AnimeListResponse } from "../types/anime";

interface AnimeDetailResponse {
  data: Anime; // single object
}

export const fetchAnimeList = async (
  query: string,
  page: number = 1
): Promise<AnimeListResponse> => {
  const res = await axios.get<AnimeListResponse>(
    `https://api.jikan.moe/v4/anime?q=${query}&page=${page}`
  );
  return res.data;
};

export const fetchAnimeById = async (id: number): Promise<Anime> => {
  const res = await axios.get<AnimeDetailResponse>(
    `https://api.jikan.moe/v4/anime/${id}/full`
  );
  return res.data.data;
};

export const fetchTopAnimeList = async (
  page: number
): Promise<AnimeListResponse> => {
  const res = await axios.get<AnimeListResponse>(
    `https://api.jikan.moe/v4/top/anime?page=${page}`
  );
  return res.data;
};
