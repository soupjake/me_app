import { takeLatest } from "redux-saga/effects";
import { getLatestExperience, getExperienceSaga } from "./experience-sagas";
import { getExperienceRequest } from "../reducers/experience-reducers";

describe("getLatestExperience", () => {
  it("should dispatch getExperienceRequest", () => {
    const generator = getLatestExperience();
    expect(generator.next().value).toEqual(takeLatest(getExperienceRequest.type, getExperienceSaga));
    expect(generator.next().done).toBeTruthy();
  });
});
