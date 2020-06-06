import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import StoreState from "../../models/state";
import Skill from "../../models/skill";

interface SkillsState extends StoreState {
  skills: Skill[];
}

const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    loading: false,
    error: false,
    skills: []
  } as SkillsState,
  reducers: {
    getSkillsRequest(state: SkillsState) {
      state.loading = true;
      state.error = false;
    },
    getSkillsSuccess(state: SkillsState, action: PayloadAction<Skill[]>) {
      state.skills = action.payload;
      state.loading = false;
    },
    getSkillsFailure(state: SkillsState) {
      state.skills = [];
      state.loading = false;
      state.error = true;
    }
  }
});

export const { getSkillsRequest, getSkillsSuccess, getSkillsFailure } = skillsSlice.actions;

export default skillsSlice.reducer;
