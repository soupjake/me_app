import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import experienceImage from "../../assets/experience.jpg";
import Paper from "@material-ui/core/Paper";
import Skeleton from "@material-ui/lab/Skeleton";
import LinkButton from "../Navigation/LinkButton";
import Skill from "../../models/skill";
import useStylesBase from "../../styles/styles-base";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store/app-state";
import { getSkillsRequest } from "../../store/reducers/skills-reducers";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { getHeaderSize, getSubheaderSize } from "../../helpers/text-helper";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import PieChart from "../Charts/PieChart";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    skill: {
      padding: theme.spacing(2),
      opacity: 1.0,
      transition: theme.transitions.create("opacity")
    },
    nonHover: {
      opacity: 0.5
    }
  })
);

export default function Experience() {
  const classes = useStyles();
  const classesBase = useStylesBase();
  const { skills, loading, error } = useSelector((state: AppState) => state.skills);
  const [hover, setHover] = useState<string>("");
  const dispatch = useDispatch();
  const smAndDown: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    async function test() {
      if (!skills.length && !error) {
        dispatch(getSkillsRequest());
      }
    }
    test();
  }, [skills.length, error, dispatch]);

  const pieLoading = (
    <Grid item xs={12} md={6}>
      <Grid container justify="center">
        <Skeleton variant="circle" height={smAndDown ? 300 : 400} width={smAndDown ? 300 : 400} />
      </Grid>
    </Grid>
  );

  const pieChart = (
    <Grid item xs={12} md={6}>
      <PieChart skills={skills} handleOnHover={setHover} smAndDown={smAndDown} />
    </Grid>
  );

  const content = loading ? (
    <>
      {smAndDown && pieLoading}
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
      {!smAndDown && pieLoading}
    </>
  ) : error || !skills.length ? (
    <Grid item xs={12}>
      <Typography variant="h6">No skills to show.</Typography>
    </Grid>
  ) : (
    <>
      {smAndDown && pieChart}
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          {skills.map((skill: Skill) => (
            <Grid item xs={12} key={skill.name}>
              <Paper elevation={0} className={clsx(classes.skill, hover && hover !== skill.name && classes.nonHover)}>
                <Typography variant="h6">{skill.name}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {!smAndDown && pieChart}
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
          <Grid item xs={12}>
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
