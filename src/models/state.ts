interface StoreState {
  loading: boolean;
  error: boolean;
}

export interface ThemeState extends StoreState {
  theme: ThemeType;
}

export type ThemeType = "dark" | "light";
