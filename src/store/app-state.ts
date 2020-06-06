import { combineReducers } from "redux";
import themeReducer from "./reducers/theme-reducer";

export const rootReducer = combineReducers({
  theme: themeReducer
});

export type AppState = ReturnType<typeof rootReducer>;
