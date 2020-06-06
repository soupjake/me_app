import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStylesBase = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1)
    },
    fullHeight: {
      height: "100vh"
    },
    boldText: {
      fontWeight: 700
    },
    contentContainer: {
      padding: theme.spacing(7),
      [theme.breakpoints.down("md")]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4)
      }
    },
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
      padding: theme.spacing(4),
      fontSize: 56,
      fontWeight: "bold",
      textAlign: "right",
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(2),
        fontSize: 28
      }
    },
    whoImage: {
      width: "100%",
      objectFit: "cover",
      maxHeight: 380,
      borderRadius: 4,
      [theme.breakpoints.up("md")]: {
        marginLeft: theme.spacing(2)
      }
    },
    contentTitle: {
      fontSize: "2.125rem",
      color: theme.palette.primary.main,
      fontWeight: 700,
      lineHeight: 1.17,
      letterSpacing: "0.00735em",
      marginTop: 8,
      marginBottom: 8,
      [theme.breakpoints.down("md")]: {
        fontSize: "1.5rem",
        lineHeight: 1.33,
        letterSpacing: 0,
        textAlign: "center"
      }
    },
    fillHeight: {
      height: "100%"
    },
    avatar: {
      height: 200,
      width: 200,
      margin: "auto",
      borderRadius: "50%"
    },
    divider: {
      margin: `${theme.spacing(4)}px !important`
    },
    card: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    },
    cardPadding: {
      padding: theme.spacing(2)
    }
  })
);

export default useStylesBase;
