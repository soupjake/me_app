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
      fontWeight: "bold"
    },
    textCenter: {
      textAlign: "center"
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
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(2)
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
    fillHeight: {
      height: "100%"
    },
    avatar: {
      height: 200,
      width: 200
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
