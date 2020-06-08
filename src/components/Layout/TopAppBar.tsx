import React, { useState, MouseEvent } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import GitHubLogo from "@material-ui/icons/GitHub";
import LinkedInLogo from "@material-ui/icons/LinkedIn";
import Brightess7Icon from "@material-ui/icons/Brightness7";
import Brightess3Icon from "@material-ui/icons/Brightness3";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Typography } from "@material-ui/core";
import { openUrl } from "../../helpers/text-helper";
import Media from "../../models/media";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store/app-state";
import { setThemeRequest } from "../../store/reducers/theme-reducers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: "none"
    },
    logo: {
      marginRight: theme.spacing(3)
    },
    moreButton: {
      marginRight: -22
    }
  })
);

export default function TopAppBar() {
  const classes = useStyles();
  const dark: boolean = useSelector((state: AppState) => state.theme.dark);
  const [anchorEl, setAnchorEl] = useState<undefined | HTMLElement>(undefined);
  const dispatch = useDispatch();
  const smAndDown: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const medias: Media[] = [
    {
      url: "https://github.com/superjakegough/me_app",
      icon: <GitHubLogo color="primary" />
    },
    {
      url: "https://www.linkedin.com/in/jake-gough-9b128169/",
      icon: <LinkedInLogo color="primary" />
    }
  ];

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(undefined);
  }

  function handleTheme() {
    dispatch(setThemeRequest(!dark));
  }

  const name = (
    <Grid item xs>
      <Typography variant="h6" color="primary">
        Jake Gough
      </Typography>
    </Grid>
  );

  const themeIcon = dark ? <Brightess7Icon color="primary" /> : <Brightess3Icon color="primary" />;

  const topAppBar = smAndDown ? (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Grid container alignItems="center">
          {name}
          <Grid item xs>
            <Grid container justify="flex-end">
              <IconButton className={classes.moreButton} color="primary" onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
              <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                {medias.map(media => (
                  <MenuItem key={media.url} onClick={() => openUrl(media.url)}>
                    {media.icon}
                  </MenuItem>
                ))}
                <MenuItem onClick={() => handleTheme()}>{themeIcon}</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  ) : (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Grid container alignItems="center">
          {name}
          <Grid item xs>
            <Grid container justify="flex-end">
              <IconButton color="primary" onClick={() => handleTheme()}>
                {themeIcon}
              </IconButton>
              {medias.map(media => (
                <IconButton key={media.url} color="primary" onClick={() => openUrl(media.url)}>
                  {media.icon}
                </IconButton>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

  return <div>{topAppBar}</div>;
}
