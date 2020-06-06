import { all, fork } from "redux-saga/effects";
import { getLatestTheme, setLatestTheme } from "./theme-sagas";
import { getLatestSkills } from "./skills-sagas";

export default function* root() {
  yield all([fork(getLatestTheme), fork(setLatestTheme), fork(getLatestSkills)]);
}
