import React from "react";
import { Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TopAppBar from "./TopAppBar";
import BottomNav from "./BottomNav";

interface MainProps {
  children: JSX.Element;
}

export default function Main(props: MainProps) {
  const { children } = props;
  const smAndDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const bottomNav = smAndDown ? <BottomNav /> : undefined;

  return (
    <Box display="flex">
      <TopAppBar />
      <Box flexGrow={1}>{children}</Box>
      {bottomNav}
    </Box>
  );
}
