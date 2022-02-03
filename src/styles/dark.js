import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const darkTheme = {
  text: "#fdfffc",
  icons: "#FA4EAB",
  background: "#231b1b",
  contrast: "#1C6DD0",
};

export const dark = responsiveFontSizes(
  createTheme({
    palette: {
      type: "dark",
      primary: {
        main: darkTheme.text,
      },
      secondary: {
        main: darkTheme.icons,
      },
      common: {
        main: darkTheme.contrast,
      },
      background: {
        default: darkTheme.background,
      },
    },
  })
);
