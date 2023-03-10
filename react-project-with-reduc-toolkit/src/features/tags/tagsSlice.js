import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "axios";

import { getTags } from "./tagsAPI";

const initialState = {
  tags: [],
  isLoeading: false,
  isError: false,
  error: "",
};
export const fetchTags = createAsyncThunk("tag/fetchTag", async () => {
  const tags = await getTags();
  return tags;
});
const tagsSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.isError = false;
        state.isLoeading = true;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoeading = false;
        state.isError = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.error = action?.error?.message;
        state.tags = [];
        state.isError = false;
        state.isLoeading = false;
      });
  },
});
export default tagsSlice.reducer;
