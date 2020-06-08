import React, { useEffect, useState, ChangeEvent } from "react";
import Grid from "@material-ui/core/Grid";
import experienceImage from "../../assets/experience.jpg";
import Paper from "@material-ui/core/Paper";
import Slider from "@material-ui/core/Slider";
import Skeleton from "@material-ui/lab/Skeleton";
import LinkButton from "../Navigation/LinkButton";
import Event from "../../models/event";
import useStylesBase from "../../styles/styles-base";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store/app-state";
import { getExperienceRequest } from "../../store/reducers/experience-reducers";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { getHeaderSize, getSubheaderSize } from "../../helpers/text-helper";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import LineChart from "../Charts/LineChart";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    event: {
      padding: theme.spacing(2)
    },
    fade: {
      animationName: "$fadein",
      animationDuration: `${theme.transitions.duration.standard}ms`,
      animationTimingFunction: theme.transitions.easing.easeInOut
    },
    "@keyframes fadein": {
      "0%": {
        opacity: 0,
        height: 0
      },
      "100%": {
        opacity: 1,
        height: 78
      }
    }
  })
);

export default function Experience() {
  const classes = useStyles();
  const classesBase = useStylesBase();
  const { experience, loading, error } = useSelector((state: AppState) => state.experience);
  const [values, setValues] = useState<number[]>([0, 0]);
  const smAndDown: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!experience.length && !error) {
      dispatch(getExperienceRequest());
    } else {
      setValues([0, experience.length - 1]);
    }
  }, [experience.length, error, dispatch]);

  const handleChange = (event: ChangeEvent<{}>, newValues: number | number[]) => {
    setValues(newValues as number[]);
  };

  const content = loading ? (
    <Grid item xs={12}>
      <Grid container>
        <Skeleton variant="rect" height={smAndDown ? 300 : 400} width="100%" />
      </Grid>
    </Grid>
  ) : error || !experience.length ? (
    <Grid item xs={12}>
      <Typography variant="h6">No experience to show.</Typography>
    </Grid>
  ) : (
    <>
      <Grid item xs={12}>
        <LineChart experience={experience} values={values} smAndDown={smAndDown} />
      </Grid>
      <Grid item xs={12}>
        <Slider value={values} max={experience.length - 1} onChange={handleChange} valueLabelDisplay="auto" />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {experience.slice(values[0], values[1] + 1).map((event: Event) => (
            <Grid item xs={12} key={event.name} className={classes.fade}>
              <Paper elevation={0} className={classes.event}>
                <Typography variant="h6">{event.name}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );

  return (
    <Grid container className={classesBase.background}>
      <img src={experienceImage} className={classesBase.headerImage} alt="experience_image" />
      <Typography variant={getHeaderSize(smAndDown)} align="right" className={classesBase.headerText}>
        Experience
      </Typography>
      <Container maxWidth="lg">
        <Grid container justify="center" alignItems="center" className={classesBase.contentContainer} spacing={2}>
          <Grid item xs={12}>
            <Typography variant={getSubheaderSize(smAndDown)}>My Experience</Typography>
          </Grid>
          {content}
          <Grid item xs={12}>
            <Grid container justify="center">
              <LinkButton to="/">Home</LinkButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
