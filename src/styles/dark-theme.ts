import { createMuiTheme, Theme, fade } from "@material-ui/core/styles";
import { grey, green } from "@material-ui/core/colors";

const secondary = fade(green.A700, 0.1);

const margin = {
  marginTop: 8,
  marginBottom: 8
};

const DarkTheme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: green.A700
    },
    secondary: {
      main: secondary
    },
    background: {
      default: "#2E3032",
      paper: "#1F2123"
    },
    text: {
      primary: grey[50]
    },
    type: "dark"
  },
  typography: {
    fontFamily: "Public Sans, sans-serif",
    h2: margin,
    h4: margin,
    h5: { ...margin, textAlign: "center" },
    allVariants: {
      lineHeight: 1.4,
      letterSpacing: "0.0075em"
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        ".MuiSkeleton-root": {
          backgroundColor: `${secondary} !important`,
          borderRadius: 4
        },
        ".MuiExpansionPanel-root:before": {
          backgroundColor: "unset !important"
        }
      }
    },
    MuiButton: {
      root: {
        fontWeight: "bold"
      }
    }
  }
});

export default DarkTheme;
