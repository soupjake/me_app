import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";
import DataPaper from "../Layout/DataPaper";
import Skill from "../../models/skill";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store/app-state";
import { getSkillsRequest } from "../../store/reducers/skills-reducers";
import Typography from "@material-ui/core/Typography";
import { getSubheaderSize } from "../../helpers/text-helper";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import PieChart from "../Charts/PieChart";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    skill: {
      opacity: 1.0,
      transition: theme.transitions.create("opacity")
    },
    nonHover: {
      opacity: 0.5
    }
  })
);

export default function Skills() {
  const classes = useStyles();
  const { skills, loading, error } = useSelector((state: AppState) => state.skills);
  const [hover, setHover] = useState<string>("");
  const dispatch = useDispatch();
  const smAndDown: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    if (!skills.length && !error) {
      dispatch(getSkillsRequest());
    }
  }, [skills.length, error, dispatch]);

  return (
    <>
      <Grid item xs={12}>
        <Typography variant={getSubheaderSize(smAndDown)}>My Skills</Typography>
      </Grid>
      {loading ? (
        <>
          <Grid item xs={12} md={6}>
            <Grid container justify="center">
              <Skeleton variant="circle" height={smAndDown ? 300 : 400} width={smAndDown ? 300 : 400} />
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Skeleton variant="rect" height={150} width="100%" />
              </Grid>
              <Grid item xs={12}>
                <Skeleton variant="rect" height={150} width="100%" />
              </Grid>
              <Grid item xs={12}>
                <Skeleton variant="rect" height={150} width="100%" />
              </Grid>
            </Grid>
          </Grid>
        </>
      ) : error || !skills.length ? (
        <Grid item xs={12}>
          <Typography variant="h6">No skills to show.</Typography>
        </Grid>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <PieChart skills={skills} handleOnHover={setHover} smAndDown={smAndDown} />
          </Grid>
          {skills.map((skill: Skill) => (
            <Grid item xs={12} md={6} key={skill.name}>
              <DataPaper
                title={skill.name}
                subtitle={skill.level}
                info={skill.description}
                className={clsx(classes.skill, hover && hover !== skill.name && classes.nonHover)}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
