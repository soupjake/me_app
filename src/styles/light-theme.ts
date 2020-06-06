import { createMuiTheme, Theme, fade } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { getThemeBase } from "../helpers/theme-helper";

const primary: string = blue[500];
const secondary: string = fade(primary, 0.1);
const themeBase: Theme = getThemeBase(secondary);

const DarkTheme: Theme = createMuiTheme({
  ...themeBase,
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF"
    },
    text: {
      primary: "#333333",
      secondary: "#233656"
    }
  }
});

export default DarkTheme;
