import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
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
      maxHeight: 380,
      borderRadius: 4,
      marginLeft: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        width: "50%",
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
        Jacob Gough
      </Typography>
      <div className={classes.background}>
        <Container maxWidth="lg">
          <Grid container justify="center" spacing={2}>
            <Grid item xs={12}>
              <Typography variant={getSubheaderSize(smAndDown)}>Who I Am</Typography>
            </Grid>
            {smAndDown && (
              <Grid container item xs={12} justify="center">
                {whoImg}
              </Grid>
            )}
            <Grid item xs={12} md={9}>
              <Typography variant="body1">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur?
              </Typography>
            </Grid>
            {!smAndDown && (
              <Grid item md={3}>
                {whoImg}
              </Grid>
            )}
            <Skills />
            <Experience />
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid container item xs={12} md={6} alignItems="center" spacing={2}>
              <Grid item xs={12}>
                <Avatar className={classes.avatar} src={avatar} alt="avatar" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" align="center">
                  Jacob Gough
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
