import React, { useState, useEffect, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { createStyles, Theme, makeStyles, fade } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import { useLocation } from "react-router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      bottom: 0,
      width: "100%",
      backgroundColor: fade(theme.palette.background.paper, 0.8),
      "& a": {
        color: theme.palette.secondary.main
      }
    }
  })
);

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = useState<string>("/");
  const location = useLocation();

  useEffect(() => {
    setValue(location.pathname);
  }, [location]);

  function handleChange(event: ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} component={Link} to="/" />
      <BottomNavigationAction label="Skills" value="/skills" icon={<KeyboardIcon />} component={Link} to="/skills" />
      <BottomNavigationAction
        label="Experience"
        value="/experience"
        icon={<TrendingUpIcon />}
        component={Link}
        to="/experience"
      />
    </BottomNavigation>
  );
}
