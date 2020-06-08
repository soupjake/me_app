import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TopAppBar from "../Navigation/TopAppBar";
import BottomNav from "../Navigation/BottomNav";

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
  const smAndDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const bottomNav = smAndDown ? <BottomNav /> : undefined;

  return (
    <div className={classes.root}>
      <TopAppBar />
      <main className={classes.main}>{children}</main>
      {bottomNav}
    </div>
  );
}
