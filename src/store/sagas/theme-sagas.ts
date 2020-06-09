import { PayloadAction } from "@reduxjs/toolkit";
import { call, takeLatest } from "redux-saga/effects";
import { setThemeRequest } from "../reducers/theme-reducers";

export function* setThemeSaga(action: PayloadAction<boolean>) {
  try {
    const theme: boolean = action.payload;
    yield call(setThemeRequest, theme);
  } catch (e) {
    console.error(e);
  }
}

export function* setLatestTheme() {
  yield takeLatest(setThemeRequest.type, setThemeSaga);
}
