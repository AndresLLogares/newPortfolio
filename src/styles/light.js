import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const lightTheme = {
  colorBlack: "#231b1b",
  colorWhite: "#fdfffc",
  colorBlue: "#1C6DD0",
  colorBackground: "#fdfffc",
};

export const light = createTheme({
  palette: {
    type: "light",
    primary: {
      main: lightTheme.colorBlack,
    },
    secondary: {
      main: lightTheme.colorWhite,
    },
    background: {
      default: lightTheme.colorBackground,
    },
  },
});
