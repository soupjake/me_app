interface StoreState {
  loading: boolean;
  error: boolean;
}

export interface ThemeState extends StoreState {
  dark: boolean;
}
