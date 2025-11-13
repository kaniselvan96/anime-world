import type { Pagination } from "./pagination";

export interface Anime {
  id?: number;
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  rating?: number;
  synopsis?: string;
  year?: string | number;
}

export interface AnimeListResponse {
  data: Anime[];
  pagination: Pagination;
}
