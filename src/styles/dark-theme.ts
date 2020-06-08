import { createMuiTheme, Theme, fade } from "@material-ui/core/styles";
import { blue, grey } from "@material-ui/core/colors";
import { getThemeBase } from "../helpers/theme-helper";

const primary: string = blue[600];
const secondary: string = fade(primary, 0.1);
const themeBase: Theme = getThemeBase(secondary);

const DarkTheme: Theme = createMuiTheme({
  ...themeBase,
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: fade(primary, 0.1)
    },
    background: {
      default: "#1F1B22",
      paper: "#1F1B22"
    },
    text: {
      primary: grey[50]
    },
    type: "dark"
  }
});

export default DarkTheme;
