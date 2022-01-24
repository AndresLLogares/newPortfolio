import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const darkTheme = {
  colorBlack: "#231b1b",
  colorWhite: "#FBFFE2",
  colorText: "#93FFD8",
  colorBackground: "#2C272E",
};

export const dark = responsiveFontSizes(
  createTheme({
    palette: {
      type: "dark",
      primary: {
        main: darkTheme.colorWhite,
      },
      secondary: {
        main: darkTheme.colorBlack,
      },
      background: {
        default: darkTheme.colorBackground,
      },
    },
  })
);
