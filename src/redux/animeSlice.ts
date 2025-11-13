import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Anime, AnimeListResponse } from "../types/anime";
import {
  fetchAnimeById,
  fetchAnimeList,
  fetchTopAnimeList,
} from "../services/animeService";
import type { Pagination } from "../types/pagination";

type AnimeState = {
  list: Anime[];
  pagination?: Pagination;
  selectedAnime?: Anime;
  loading: boolean;
  error: string | null;
};

interface FetchAnimesListPayload {
  query?: string;
  page?: number;
}

// Initial state
const initialState: AnimeState = {
  list: [],
  pagination: undefined,
  selectedAnime: undefined,
  loading: false,
  error: null,
};

// Async thunk for API call
export const fetchAnimes = createAsyncThunk<
  AnimeListResponse, // Return type
  FetchAnimesListPayload // Argument type
>(
  "anime/fetchAnimes",
  async ({ query = "", page = 1 }: FetchAnimesListPayload) => {
    if (query) {
      const data = await fetchAnimeList(query, page);
      return data;
    } else {
      const data = await fetchTopAnimeList(page);
      return data;
    }
  }
);

export const fetchAnime = createAsyncThunk(
  "anime/fetchAnimeById",
  async (id: number): Promise<Anime> => {
    const data = await fetchAnimeById(id);
    return data;
  }
);

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnimes.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.data;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchAnimes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      })

      // AnimeById
      .addCase(fetchAnime.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnime.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedAnime = action.payload;
      })
      .addCase(fetchAnime.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default animeSlice.reducer;
