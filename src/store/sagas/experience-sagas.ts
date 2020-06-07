import { call, put, takeLatest } from "redux-saga/effects";
import { getEvents } from "../../services/experience-service";
import { getExperienceRequest, getExperienceSuccess, getExperienceFailure } from "../reducers/experience-reducers";
import Event from "../../models/event";

function* getExperienceSaga() {
  try {
    const events: Event[] = yield call(getEvents);
    yield put(getExperienceSuccess(events));
  } catch (e) {
    console.error(e);
    yield put(getExperienceFailure());
  }
}

export function* getLatestExperience() {
  yield takeLatest(getExperienceRequest.type, getExperienceSaga);
}
