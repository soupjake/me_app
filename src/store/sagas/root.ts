import { all, fork } from "redux-saga/effects";
import { getLatestTheme, setLatestTheme } from "./theme-sagas";

export default function* root() {
  yield all([fork(getLatestTheme), fork(setLatestTheme)]);
}
