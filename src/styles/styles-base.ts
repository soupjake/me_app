import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

export const darkBackground2: string = "#050406";
export const lightBackground2: string = "#E3F2FE";

const useStylesBase = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      background:
        theme.palette.type === "dark"
          ? `linear-gradient(${theme.palette.background.default}, ${darkBackground2})`
          : `linear-gradient(${theme.palette.background.default}, ${lightBackground2})`
    },
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
      color: "#FFFFFF",
      padding: theme.spacing(4),
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(2)
      }
    },
    fillHeight: {
      height: "100%"
    },
    avatar: {
      height: 200,
      width: 200,
      margin: "auto"
    }
  })
);

export default useStylesBase;
