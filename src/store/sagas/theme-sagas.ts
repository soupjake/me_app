import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { getLocalTheme } from "../../helpers/theme-helper";
import { getThemeRequest, getThemeSuccess, getThemeFailure, setThemeRequest } from "../reducers/theme-reducers";

function* getThemeSaga() {
  try {
    const theme: boolean = getLocalTheme();
    yield put(getThemeSuccess(theme));
  } catch (e) {
    console.error(e);
    yield put(getThemeFailure());
  }
}

function* setThemeSaga(action: PayloadAction<boolean>) {
  try {
    const theme: boolean = action.payload;
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
