import themeReducer, { setThemeRequest } from "./theme-reducers";

function initialState() {
  return { dark: true, error: false, loading: false };
}

describe("setThemeRequest", () => {
  it("should return the initial state", () => {
    expect(themeReducer(undefined, {})).toEqual(initialState());
  });

  it("should handle setThemeRequest action", () => {
    expect(themeReducer(initialState(), { type: setThemeRequest.type, payload: false })).toEqual({
      ...initialState(),
      dark: false
    });
  });
});
