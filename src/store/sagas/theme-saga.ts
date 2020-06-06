import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { getLocalTheme } from "../../services/theme-service";
import { getThemeRequest, getThemeSuccess, getThemeFailure, setThemeRequest } from "../reducers/theme-reducer";
import { ThemeType } from "../../models/state";

function* getThemeSaga() {
  try {
    const theme: ThemeType = getLocalTheme();
    yield put(getThemeSuccess(theme));
  } catch (e) {
    console.error(e);
    yield put(getThemeFailure());
  }
}

function* setThemeSaga(action: PayloadAction<ThemeType>) {
  try {
    const theme: ThemeType = action.payload;
    yield call(setThemeRequest, theme);
  } catch (e) {
    console.error(e);
  }
}

export function* getLatestTheme() {
  yield takeLatest(getThemeRequest.type, getThemeSaga);
}

export function* setLatestTheme() {
  yield takeLatest(setThemeRequest.type, setThemeSaga);
}
