import skillReducer, { getSkillsRequest, getSkillsSuccess, getSkillsFailure } from "./skills-reducers";
import { getSkills } from "../../services/skills-service";

function initialState() {
  return { skills: [], error: false, loading: false };
}

describe("getSkills", () => {
  it("should return the initial state", () => {
    expect(skillReducer(undefined, {})).toEqual(initialState());
  });

  it("should handle getSkillsRequest action", () => {
    expect(skillReducer(initialState(), { type: getSkillsRequest.type })).toEqual({
      ...initialState(),
      loading: true
    });
  });

  it("should handle getSkillsSuccess action", async () => {
    const skills = await getSkills();
    expect(skillReducer(initialState(), { type: getSkillsSuccess.type, payload: skills })).toEqual({
      skills: skills,
      loading: false,
      error: false
    });
  });

  it("should handle getSkillsFailure action", () => {
    const skills = undefined;
    expect(skillReducer(initialState(), { type: getSkillsFailure.type })).toEqual({
      skills: [],
      loading: false,
      error: true
    });
  });
});
