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
    contentContainer: {
      padding: theme.spacing(2)
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
    }
  })
);

export default useStylesBase;
