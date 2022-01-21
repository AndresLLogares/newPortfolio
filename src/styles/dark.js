import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const darkTheme = {
  colorBackground: "#444941",
  colorBlack: "#231b1b",
  colorWhite: "#FBFFE2",
  colorText: "#93FFD8",
};

export const dark = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: darkTheme.colorWhite,
      },
      secondary: {
        main: darkTheme.colorBlack,
      },
    },
  })
);
