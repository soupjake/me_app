import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import homeImage from "../../assets/home.jpg";
import whoImage from "../../assets/who.jpg";
import avatar from "../../assets/avatar.jpg";
import useStylesBase from "../../styles/styles-base";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { getHeaderSize, getSubheaderSize } from "../../helpers/text-helper";
import LinkButton from "../Layout/LinkButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    expansionSummary: {
      fontWeight: 700,
      margin: 0
    },
    expansionPanel: {
      borderRadius: 4,
      marginBottom: theme.spacing(2)
    },
    linkButton: {
      marginTop: theme.spacing(2),
      marginBottom: -theme.spacing(1)
    }
  })
);

export default function Home() {
  const classes = useStyles();
  const classesBase = useStylesBase();
  const smAndDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const whoImg = <img className={classes.whoImage} src={whoImage} alt="main" />;

  return (
    <Grid container className={classesBase.background}>
      <img src={homeImage} className={classesBase.headerImage} alt="" />
      <Typography variant={getHeaderSize(smAndDown)} align="right" className={classesBase.headerText}>
        Jacob Gough
      </Typography>
      <Container maxWidth="lg">
        <Grid container justify="center" className={classesBase.contentContainer} spacing={2}>
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
              vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
              dolorem eum fugiat quo voluptas nulla pariatur?
            </Typography>
          </Grid>
          {!smAndDown && (
            <Grid item md={3}>
              {whoImg}
            </Grid>
          )}
          <Grid item xs={12}>
            <Typography variant={getSubheaderSize(smAndDown)}>What I Do</Typography>
            <ExpansionPanel elevation={0} defaultExpanded={true} className={classes.expansionPanel}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body1" className={classesBase.boldText}>
                  Skills
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container direction="column" justify="center" alignItems="center">
                  <Grid item>
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <LinkButton className={classes.linkButton} to="/skills">
                      Skills
                    </LinkButton>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel elevation={0} className={classes.expansionPanel}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body1" className={classesBase.boldText}>
                  Timeline
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container direction="column" justify="center" alignItems="center">
                  <Grid item>
                    <Typography variant="body1">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                      sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                      numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                      ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                      ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                      quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </Typography>
                  </Grid>
                  <Grid item>
                    <LinkButton className={classes.linkButton} to="/timeline">
                      Timeline
                    </LinkButton>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid container item xs={12} md={6} alignItems="center" spacing={2}>
            <Grid item xs={12}>
              <Avatar className={classesBase.avatar} src={avatar} alt="avatar" />
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
            <Grid container justify="center" alignItems="center" className={classesBase.fillHeight}>
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
    </Grid>
  );
}
