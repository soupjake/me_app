import { ThemeType } from "../models/state";

export function getLocalTheme(): ThemeType {
  const localTheme: ThemeType | null = window.localStorage.getItem("theme") as ThemeType;

  if (localTheme) {
    return localTheme;
  } else {
    throw new Error("Failed to get local theme.");
  }
}

export function setLocalTheme(theme: string) {
  window.localStorage.setItem("theme", theme);
}
