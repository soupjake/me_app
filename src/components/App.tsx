import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import Main from "./Layout/Main";
import Home from "./Pages/Home";
import DarkTheme from "../styles/dark-theme";
import LightTheme from "../styles/light-theme";
import { useSelector } from "react-redux";
import { AppState } from "../store/app-state";
import "./App.css";

const history = createBrowserHistory();
history.listen(_ => {
  window.scrollTo(0, 0);
});

export default function App() {
  const dark: boolean = useSelector((state: AppState) => state.theme.dark);

  return (
    <ThemeProvider theme={dark ? DarkTheme : LightTheme}>
      <CssBaseline />
      <Router history={history}>
        <Main>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Main>
      </Router>
    </ThemeProvider>
  );
}
