import { combineReducers } from "redux";
import themeReducers from "./reducers/theme-reducers";
import skillsReducers from "./reducers/skills-reducers";
import experienceReducers from "./reducers/experience-reducers";

export const rootReducer = combineReducers({
  theme: themeReducers,
  skills: skillsReducers,
  experience: experienceReducers
});

export type AppState = ReturnType<typeof rootReducer>;
