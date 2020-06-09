import { takeLatest } from "redux-saga/effects";
import { getLatestSkills, getSkillsSaga } from "./skills-sagas";
import { getSkillsRequest } from "../reducers/skills-reducers";

describe("getLatestSkills", () => {
  it("should dispatch getSkillsRequest", () => {
    const generator = getLatestSkills();
    expect(generator.next().value).toEqual(takeLatest(getSkillsRequest.type, getSkillsSaga));
    expect(generator.next().done).toBeTruthy();
  });
});
