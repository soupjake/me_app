import React, { useEffect, useState, ChangeEvent } from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Hidden from "@material-ui/core/Hidden";
import Skeleton from "@material-ui/lab/Skeleton";
import DataPaper from "../Layout/DataPaper";
import Event from "../../models/event";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store/app-state";
import { getExperienceRequest } from "../../store/reducers/experience-reducers";
import Typography from "@material-ui/core/Typography";
import { getSubheaderSize, formatDate } from "../../helpers/text-helper";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import LineChart from "../Charts/LineChart";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fade: {
      animationName: "$fadein",
      animationDuration: `${theme.transitions.duration.standard}ms`,
      animationTimingFunction: theme.transitions.easing.easeInOut
    },
    "@keyframes fadein": {
      "0%": {
        opacity: 0
      },
      "100%": {
        opacity: 1
      }
    }
  })
);

export default function Experience() {
  const classes = useStyles();
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
      <Hidden xsDown>
        <Grid item xs={12}>
          <LineChart experience={experience} values={values} smAndDown={smAndDown} />
        </Grid>
        <Grid item xs={12}>
          <Slider value={values} max={experience.length - 1} onChange={handleChange} valueLabelDisplay="off" />
        </Grid>
      </Hidden>
      <Grid item xs={12}>
        <Grid container spacing={2} justify="center">
          {experience
            .slice(values[0], values[1] + 1)
            .reverse()
            .map((event: Event) => (
              <Grid item xs={12} md={6} key={event.name} className={classes.fade}>
                <DataPaper title={event.name} subtitle={formatDate(event.date)} info={event.description} />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </>
  );

  return (
    <>
      <Grid item xs={12}>
        <Typography variant={getSubheaderSize(smAndDown)}>My Experience</Typography>
      </Grid>
      {content}
    </>
  );
}
