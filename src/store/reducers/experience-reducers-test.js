import experienceReducer, {
  getExperienceRequest,
  getExperienceSuccess,
  getExperienceFailure
} from "./experience-reducers";
import { getEvents } from "../../services/experience-service";

function initialState() {
  return { experience: [], error: false, loading: false };
}

describe("getExperience", () => {
  it("should return the initial state", () => {
    expect(experienceReducer(undefined, {})).toEqual(initialState());
  });

  it("should handle getExperienceRequest action", () => {
    expect(experienceReducer(initialState(), { type: getExperienceRequest.type })).toEqual({
      ...initialState(),
      loading: true
    });
  });

  it("should handle getExperienceSuccess action", async () => {
    const experience = await getEvents();
    expect(experienceReducer(initialState(), { type: getExperienceSuccess.type, payload: experience })).toEqual({
      experience: experience,
      loading: false,
      error: false
    });
  });

  it("should handle getExperienceFailure action", () => {
    const experience = undefined;
    expect(experienceReducer(initialState(), { type: getExperienceFailure.type })).toEqual({
      experience: [],
      loading: false,
      error: true
    });
  });
});
