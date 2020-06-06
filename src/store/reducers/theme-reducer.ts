import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeState, ThemeType } from "../../models/state";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    loading: false,
    error: false,
    theme: "dark"
  } as ThemeState,
  reducers: {
    getThemeRequest(state: ThemeState) {
      state.loading = true;
      state.error = false;
    },
    getThemeSuccess(state: ThemeState, action: PayloadAction<ThemeType>) {
      state.theme = action.payload;
      state.loading = false;
    },
    getThemeFailure(state: ThemeState) {
      state.loading = false;
      state.error = true;
    },
    setThemeRequest(state: ThemeState, action: PayloadAction<ThemeType>) {
      state.theme = action.payload;
    }
  }
});

export const { getThemeRequest, getThemeSuccess, getThemeFailure, setThemeRequest } = themeSlice.actions;

export default themeSlice.reducer;
