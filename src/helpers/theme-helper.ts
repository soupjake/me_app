import { Theme, createMuiTheme } from "@material-ui/core/styles";

export function getThemeBase(secondary: string): Theme {
  const header = {
    fontWeight: "bold" as "bold"
  };

  return createMuiTheme({
    typography: {
      fontFamily: "Public Sans, sans-serif",
      h2: header,
      h4: header,
      h5: { ...header, textAlign: "center" },
      h6: header,
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
