import { createMuiTheme, Theme, fade } from "@material-ui/core/styles";
import { blue, grey } from "@material-ui/core/colors";
import { getThemeBase } from "../helpers/theme-helper";

const primary: string = blue[700];
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
      paper: "#27262E"
    },
    text: {
      primary: grey[50]
    },
    type: "dark"
  }
});

export default DarkTheme;
