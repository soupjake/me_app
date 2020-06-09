import themeReducer, { setThemeRequest } from "./theme-reducers";

describe("setThemeRequest", () => {
  const intialState = { dark: true, error: false, loading: false };
  it("should return the initial state", () => {
    expect(themeReducer(undefined, {})).toEqual(intialState);
  });
  it('should handle "SET_THEME_REQUEST" action', () => {
    expect(
      themeReducer({ dark: true, error: false, loading: false }, { type: setThemeRequest.type, payload: false })
    ).toEqual({
      ...intialState,
      dark: false
    });
  });
});
