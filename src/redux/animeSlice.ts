import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Anime } from "../types/anime";
import { fetchAnimeList } from "../services/animeService";

type AnimeState = {
  list: Anime[];
  loading: boolean;
  error: string | null;
};

// Initial state
const initialState: AnimeState = {
  list: [],
  loading: false,
  error: null,
};

// Async thunk for API call
export const fetchAnimes = createAsyncThunk(
  "anime/fetchAnimes",
  async (query: string): Promise<Anime[]> => {
    const data = await fetchAnimeList(query);
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
      });
  },
});

export default animeSlice.reducer;
