import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeState } from "../../models/state";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    loading: false,
    error: false,
    dark: true
  } as ThemeState,
  reducers: {
    getThemeRequest(state: ThemeState) {
      state.loading = true;
      state.error = false;
    },
    getThemeSuccess(state: ThemeState, action: PayloadAction<boolean>) {
      state.dark = action.payload;
      state.loading = false;
    },
    getThemeFailure(state: ThemeState) {
      state.loading = false;
      state.error = true;
    },
    setThemeRequest(state: ThemeState, action: PayloadAction<boolean>) {
      state.dark = action.payload;
    }
  }
});

export const { getThemeRequest, getThemeSuccess, getThemeFailure, setThemeRequest } = themeSlice.actions;

export default themeSlice.reducer;
