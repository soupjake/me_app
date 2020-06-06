import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import skillsImage from "../../assets/skills.jpg";
import Paper from "@material-ui/core/Paper";
import Skeleton from "@material-ui/lab/Skeleton";
import LinkButton from "../Layout/LinkButton";
import Skill from "../../models/skill";
import useStylesBase from "../../styles/styles-base";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store/app-state";
import { getSkillsRequest } from "../../store/reducers/skills-reducers";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { getHeaderSize, getSubheaderSize } from "../../helpers/text-helper";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Theme } from "@material-ui/core/styles";

export default function Images() {
  const classesBase = useStylesBase();
  const { skills, loading, error } = useSelector((state: AppState) => state.skills);
  const dispatch = useDispatch();
  const smAndDown: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    if (!skills.length && !error) {
      dispatch(getSkillsRequest());
    }
  }, [skills.length, error, dispatch]);

  if (loading) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Skeleton height={300} width="100%" />
        </Grid>
        <Grid item xs={12}>
          <Skeleton height={300} width="100%" />
        </Grid>
        <Grid item xs={12}>
          <Skeleton height={300} width="100%" />
        </Grid>
      </Grid>
    );
  }

  if (error) {
    return <Typography variant="h6">No skills to show.</Typography>;
  }

  return (
    <Grid container className={classesBase.background}>
      <img src={skillsImage} className={classesBase.headerImage} alt="" />
      <Typography variant={getHeaderSize(smAndDown)} align="right" className={classesBase.headerText}>
        Skills
      </Typography>
      <Container maxWidth="lg">
        <Grid container justify="center" className={classesBase.contentContainer} spacing={2}>
          <Grid item xs={12}>
            <Typography variant={getSubheaderSize(smAndDown)}>My Skills</Typography>
          </Grid>
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
          {skills.map(skill => (
            <Grid item xs={12}>
              <Typography variant="h6">{skill.name}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Grid>
  );
}
