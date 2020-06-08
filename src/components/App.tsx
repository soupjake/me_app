import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import HelmetWrapper from "./Layout/HelmetWrapper";
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
  const title: string = "Jacob Gough";

  return (
    <ThemeProvider theme={dark ? DarkTheme : LightTheme}>
      <CssBaseline />
      <HelmetWrapper title={title} description={`${title}`}>
        <Router history={history}>
          <Main>
            <Switch>
              <Route
                path="/"
                exact
                render={() => {
                  return (
                    <HelmetWrapper title={`${title}`} description={`${title}`}>
                      <Home />
                    </HelmetWrapper>
                  );
                }}
              />
            </Switch>
          </Main>
        </Router>
      </HelmetWrapper>
    </ThemeProvider>
  );
}
