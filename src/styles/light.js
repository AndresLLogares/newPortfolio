import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const lightTheme = {
  colorBackground: "#R2D2E9",
  colorBlack: "#231b1b",
  colorWhite: "#FBFFE2",
  colorBlue: "#1C6DD0",
};

export const light = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: lightTheme.colorBlack,
      },
      secondary: {
        main: lightTheme.colorWhite,
      },
    },
  })
);
