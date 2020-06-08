import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopAppBar from "./TopAppBar";

const useStyles = makeStyles({
  root: {
    display: "flex"
  },
  main: {
    flexGrow: 1
  }
});

interface MainProps {
  children: JSX.Element;
}

export default function Main(props: MainProps) {
  const classes = useStyles();
  const { children } = props;

  return (
    <div className={classes.root}>
      <TopAppBar />
      <main className={classes.main}>{children}</main>
    </div>
  );
}
