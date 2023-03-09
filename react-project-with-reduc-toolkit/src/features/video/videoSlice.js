import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "axios";
import { getVideo } from "./videoAPI";

const initialState = {
  videos: [],
  isLoeading: false,
  isError: false,
  error: "",
};
export const fetchVideo = createAsyncThunk("video/fetchVideo", async () => {
  const videos = await getVideo();
  return videos;
});
const videoSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isError = false;
        state.isLoeading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoeading = false;
        state.isError = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.error = action?.error?.message;
        state.videos = [];
      });
  },
});
export default videoSlice.reducer;
