import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import StoreState from "../../models/state";

interface ThemeState extends StoreState {
  dark: boolean;
}

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    loading: false,
    error: false,
    dark: true
  } as ThemeState,
  reducers: {
    setThemeRequest(state: ThemeState, action: PayloadAction<boolean>) {
      state.dark = action.payload;
    }
  }
});

export const { setThemeRequest } = themeSlice.actions;

export default themeSlice.reducer;
