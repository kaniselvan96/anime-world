import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Anime } from "../types/anime";
import {
  fetchAnimeById,
  fetchAnimeList,
  fetchTopAnimeList,
} from "../services/animeService";

type AnimeState = {
  list: Anime[];
  selectedAnime?: Anime;
  loading: boolean;
  error: string | null;
};

// Initial state
const initialState: AnimeState = {
  list: [],
  selectedAnime: undefined,
  loading: false,
  error: null,
};

// Async thunk for API call
export const fetchAnimes = createAsyncThunk(
  "anime/fetchAnimes",
  async (query: string): Promise<Anime[]> => {
    if (query) {
      const data = await fetchAnimeList(query);
      return data;
    } else {
      const data = await fetchTopAnimeList();
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
        state.list = action.payload;
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
