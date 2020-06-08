import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import Skills from "../Views/Skills";
import Experience from "../Views/Experience";
import homeImage from "../../assets/home.jpg";
import whoImage from "../../assets/who.jpg";
import avatar from "../../assets/avatar.jpg";
import { getHeaderSize, getSubheaderSize } from "../../helpers/text-helper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerImage: {
      height: "100vh",
      width: "100%",
      objectFit: "cover",
      [theme.breakpoints.down("md")]: {
        height: `calc(100vh - ${theme.spacing(7)})`
      }
    },
    headerText: {
      position: "absolute",
      bottom: 0,
      right: 0,
      color: "#FFFFFF",
      padding: theme.spacing(4),
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(2)
      }
    },
    whoImage: {
      width: "100%",
      objectFit: "cover",
      borderRadius: 4,
      margin: "auto",
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(2)
      }
    },
    background: {
      background:
        theme.palette.type === "dark"
          ? `linear-gradient(${theme.palette.background.default}, #050406)`
          : `linear-gradient(${theme.palette.background.default}, #E3F2FE)`
    },
    avatar: {
      height: 200,
      width: 200,
      margin: "auto"
    },
    list: {
      height: "100%"
    }
  })
);

export default function Home() {
  const classes = useStyles();
  const smAndDown: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const whoImg: JSX.Element = <img className={classes.whoImage} src={whoImage} alt="main" />;

  return (
    <>
      <img src={homeImage} className={classes.headerImage} alt="" />
      <Typography variant={getHeaderSize(smAndDown)} align="right" className={classes.headerText}>
        Jake Gough
      </Typography>
      <div className={classes.background}>
        <Container maxWidth="lg">
          <Grid container justify="center" spacing={2}>
            <Grid item xs={12}>
              <Typography variant={getSubheaderSize(smAndDown)}>Who I Am</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              {whoImg}
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                I am a brilliantly efficient, resilient, super fun full stack software with a keen eye and passion in UX
                design. Spends free time building and repairing computers, pumping iron at the gym, playing games and
                going on country walks with the family dog.
              </Typography>
            </Grid>
            <Skills />
            <Experience />
            <Grid container item xs={12} md={6} alignItems="center" spacing={2}>
              <Grid item xs={12}>
                <Avatar className={classes.avatar} src={avatar} alt="avatar" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" align="center">
                  Jake Gough
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" align="center">
                  Awesome Software Developer
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container justify="center" alignItems="center" className={classes.list}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <LocationOnIcon color="primary" fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Location" secondary="Cardiff, Wales" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <EmailIcon color="primary" fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Email" secondary="super.jake@hotmail.co.uk" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <PhoneIcon color="primary" fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Telephone" secondary="+447980595710" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
