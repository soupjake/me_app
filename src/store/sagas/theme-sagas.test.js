import { takeLatest } from "redux-saga/effects";
import { setLatestTheme, setThemeSaga } from "./theme-sagas";
import { setThemeRequest } from "../reducers/theme-reducers";

describe("setLatestTheme", () => {
  it("should dispatch setThemeRequest", () => {
    const generator = setLatestTheme();
    expect(generator.next().value).toEqual(takeLatest(setThemeRequest.type, setThemeSaga));
    expect(generator.next().done).toBeTruthy();
  });
});
