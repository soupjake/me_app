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
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LinkButton from "../Layout/LinkButton";
import useStylesBase from "../../styles/styles-base";
import { Typography } from "@material-ui/core";
import { openUrl } from "../../helpers/text-helper";
import { Media } from "../../models/media";

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
  const classesBase = useStylesBase();
  const [anchorEl, setAnchorEl] = useState<undefined | HTMLElement>(undefined);
  const medias: Media[] = [
    {
      url: "https://github.com/superjakegough",
      icon: <GitHubLogo />
    },
    {
      url: "https://www.linkedin.com/in/jake-gough-9b128169/",
      icon: <LinkedInLogo />
    }
  ];

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(undefined);
  }

  function handleSocialClick(url: string) {
    window.open(url, "_blank");
  }

  const smAndDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  const name = (
    <Grid item xs>
      <Typography variant="h6" color="primary">
        Jake Gough
      </Typography>
    </Grid>
  );

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
                  <MenuItem onClick={() => openUrl(media.url)}>{media.icon}</MenuItem>
                ))}
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
            <Grid container justify="center" wrap="nowrap">
              <LinkButton className={classesBase.button} to="/">
                Home
              </LinkButton>
              <LinkButton className={classesBase.button} to="/images">
                Skills
              </LinkButton>
              <LinkButton className={classesBase.button} to="/videos">
                Timeline
              </LinkButton>
            </Grid>
          </Grid>
          <Grid item xs>
            <Grid container justify="flex-end">
              {medias.map(media => (
                <IconButton color="primary" onClick={() => openUrl(media.url)}>
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
