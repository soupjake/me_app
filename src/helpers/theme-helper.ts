import { Theme, createMuiTheme } from "@material-ui/core/styles";

export function getThemeBase(secondary: string): Theme {
  const header = {
    fontWeight: "bold" as "bold",
    marginTop: 24
  };

  return createMuiTheme({
    typography: {
      fontFamily: "Public Sans, sans-serif",
      h2: header,
      h4: header,
      h5: header,
      h6: { ...header, marginTop: 0 },
      allVariants: {
        lineHeight: 1.5,
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
}
