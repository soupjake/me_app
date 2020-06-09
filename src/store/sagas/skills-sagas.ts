import { call, put, takeLatest } from "redux-saga/effects";
import { getSkills } from "../../services/skills-service";
import { getSkillsRequest, getSkillsSuccess, getSkillsFailure } from "../reducers/skills-reducers";
import Skill from "../../models/skill";

export function* getSkillsSaga() {
  try {
    const skills: Skill[] = yield call(getSkills);
    yield put(getSkillsSuccess(skills));
  } catch (e) {
    console.error(e);
    yield put(getSkillsFailure());
  }
}

export function* getLatestSkills() {
  yield takeLatest(getSkillsRequest.type, getSkillsSaga);
}
