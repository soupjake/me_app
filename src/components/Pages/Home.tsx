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
import whoImage from "../../assets/main.jpg";
import useStylesBase from "../../styles/styles-base";

export default function Home() {
  const classesBase = useStylesBase();
  const smAndDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const whoImg = <img className={classesBase.whoImage} src={whoImage} alt="main" />;

  return (
    <div>
      <Grid container direction="column" justify="center">
        <img src={homeImage} className={classesBase.headerImage} alt="" />
        <span className={classesBase.headerText}>Black Mountains CBD</span>
        <Grid container justify="center" className={classesBase.contentContainer}>
          <Grid item md={8} sm={10} xs={12}>
            <h4 className={classesBase.contentTitle}>Who We Are</h4>
          </Grid>
          {smAndDown && (
            <Grid item sm={10} xs={12} className={classesBase.textCenter}>
              {whoImg}
            </Grid>
          )}
          <Grid item md={5} sm={10} xs={12}>
            <p>
              CBD is one of the most remarkable natural substances on the planet. It is extracted from decarboxylated
              hemp using an organic solvent which dissolves the CBD and some of the other cannabinoids The mixture is
              then distilled, the solvent is then collected and used again and the CBD left as a dark sticky residue,
              The CBD is then emulsified with a carrier oil such as hemp oil, coconut oil or olive oil. It has recently
              been classed as a medicine by the MHRA. The very low levels of THC means it is not possible to get a high
              from our CBD. Using another two processes when extracting the CBD from the cannabis results in our CBD oil
              being being enriched in flavonoids and terpenes which help the CBD become more effective and powerful.
            </p>
            <p>
              At Black Mountains CBD we only use high quality full spectrum cannabis All our cannabis (hemp) is
              organically grown in Europe allowing us to manufacture a range of products high in CBD but low in THC.
            </p>
          </Grid>
          {!smAndDown && (
            <Grid item md={3}>
              {whoImg}
            </Grid>
          )}
          <Grid item md={8} sm={10} xs={12}>
            <h4 className={classesBase.contentTitle}>What We Do</h4>
            <p>
              All our products are chemical free using only plant material that is hand-picked and carefully graded for
              quality. Our main hemp supplier is a member of the Cannabis Trades Association as are we. Located in the
              shadow of the beautiful Black Mountains near Abergavenny we are a small company who are versatile and
              innovative. This means we can make a CBD oil just for you.
            </p>
            <p>
              We deliver high quality and hand crafted CBD products from rural Wales to anywhere in the world where CBD
              is legal. Please contact us if you are interested in CBD's promising results for your wellbeing, sleep and
              more.
            </p>
            <p>Post &amp; packing to mainland UK add £4.60. Orders over £50.00 free P&amp;P.</p>
          </Grid>
          <Grid item sm={10} xs={12}>
            <Divider className={classesBase.divider} />
          </Grid>
          <Grid item md={4} sm={10} xs={12} className={classesBase.textCenter}>
            <img src={avatar} alt="kim" className={classesBase.avatar} />
            <h6>Kim Kemp</h6>
            <h6>Senior Partner</h6>
          </Grid>
          <Grid item md={4} sm={10} xs={12}>
            <Grid container justify="center" alignItems="center" className={classesBase.fillHeight}>
              <p>
                My introduction to the world of CBD was initiated by a terminal diagnosis of an incurable head cancer.
                Whilst under palliative care, my wife purchased some CBD online. With nothing to lose I began taking it
                and within three months my quality of life improved. Initially I was very sceptical, nevertheless I
                began to research and study the history and medicinal properties of this ancient herb. My findings
                inspired me to learn how to manufacture and produce my own CBD. Through continued study and practice I
                have developed a quality product that can offer the most efficacious properties, from the CBD compounds
                that originate within the cannabis plant.
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
                  <ListItemText primary="Location" secondary="Abergavenny, Wales" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon color="primary" fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Email" secondary="cruziana2000@aol.com" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon color="primary" fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Telephone" secondary="+447855868314" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
