import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import StoreState from "../../models/state";
import Event from "../../models/event";

interface ExperienceState extends StoreState {
  experience: Event[];
}

const experienceSlice = createSlice({
  name: "experience",
  initialState: {
    loading: false,
    error: false,
    experience: []
  } as ExperienceState,
  reducers: {
    getExperienceRequest(state: ExperienceState) {
      state.loading = true;
      state.error = false;
    },
    getExperienceSuccess(state: ExperienceState, action: PayloadAction<Event[]>) {
      state.experience = action.payload;
      state.loading = false;
    },
    getExperienceFailure(state: ExperienceState) {
      state.experience = [];
      state.loading = false;
      state.error = true;
    }
  }
});

export const { getExperienceRequest, getExperienceSuccess, getExperienceFailure } = experienceSlice.actions;

export default experienceSlice.reducer;
