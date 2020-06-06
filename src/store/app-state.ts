import { combineReducers } from "redux";
import themeReducers from "./reducers/theme-reducers";
import skillsReducers from "./reducers/skills-reducers";

export const rootReducer = combineReducers({
  theme: themeReducers,
  skills: skillsReducers
});

export type AppState = ReturnType<typeof rootReducer>;
