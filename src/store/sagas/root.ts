import { all, fork } from "redux-saga/effects";
import { takeLatestTheme } from "./theme-sagas";

export default function* root() {
  yield all([fork(takeLatestTheme)]);
}
