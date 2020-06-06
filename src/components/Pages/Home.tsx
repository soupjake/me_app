import React from "react";
import { Theme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import homeImage from "../../assets/home.jpg";
import whoImage from "../../assets/who.jpg";
import avatar from "../../assets/avatar.jpg";
import useStylesBase from "../../styles/styles-base";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { getHeaderSize, getSubheaderSize } from "../../helpers/text-helper";

export default function Home() {
  const classesBase = useStylesBase();
  const smAndDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const whoImg = <img className={classesBase.whoImage} src={whoImage} alt="main" />;

  return (
    <div>
      <Grid container direction="column" justify="center">
        <img src={homeImage} className={classesBase.headerImage} alt="" />
        <Typography variant={getHeaderSize(smAndDown)} align="right" className={classesBase.headerText}>
          Jacob Gough
        </Typography>
        <Grid container justify="center" className={classesBase.contentContainer}>
          <Grid item md={8} sm={10} xs={12}>
            <Typography variant={getSubheaderSize(smAndDown)}>Who I Am</Typography>
          </Grid>
          {smAndDown && (
            <Grid container item sm={10} xs={12} justify="center">
              {whoImg}
            </Grid>
          )}
          <Grid item md={5} sm={10} xs={12}>
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
          <Grid item md={8} sm={10} xs={12}>
            <Typography variant={getSubheaderSize(smAndDown)}>What I Do</Typography>
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
          <Grid item sm={10} xs={12}>
            <Divider className={classesBase.divider} />
          </Grid>
          <Grid container direction="column" item md={4} sm={10} xs={12} alignItems="center">
            <Avatar className={classesBase.avatar} src={avatar} alt="avatar" />
            <Typography variant="h6">Jacob Gough</Typography>
            <Typography variant="h6">Give me money</Typography>
          </Grid>
          <Grid item md={4} sm={10} xs={12}>
            <Grid container justify="center" alignItems="center" className={classesBase.fillHeight}>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur?
              </p>
            </Grid>
          </Grid>
          <Grid item md={4} sm={10} xs={12}>
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
      </Grid>
    </div>
  );
}
