import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      height: "100%",
      padding: theme.spacing(2)
    },
    info: {
      marginTop: theme.spacing(2),
      whiteSpace: "pre-line"
    }
  })
);

interface DataPaperProps {
  title: string;
  subtitle: string;
  info: string;
  className?: string;
}

export default function DataPaper(props: DataPaperProps) {
  const classes = useStyles();
  const { title, subtitle, info, className } = props;

  return (
    <Paper elevation={0} className={clsx(classes.paper, className)}>
      <Grid container justify="space-between">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h6" color="primary">
          {subtitle}
        </Typography>
      </Grid>
      <Typography variant="body1" className={classes.info}>
        {info}
      </Typography>
    </Paper>
  );
}
