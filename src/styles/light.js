import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const lightTheme = {
  text: "#231b1b",
  icons: "#1C6DD0",
  background: "#fdfffc",
  contrast: "#FA4EAB",
};

export const light = responsiveFontSizes(
  createTheme({
    palette: {
      type: "light",
      primary: {
        main: lightTheme.text,
      },
      secondary: {
        main: lightTheme.icons,
      },
      common: {
        main: lightTheme.contrast,
      },
      background: {
        default: lightTheme.background,
      },
    },
  })
);
