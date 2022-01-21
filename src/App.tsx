import React, { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import i18next from "i18next";
import { ThemeProvider } from "@material-ui/core";
import { useGlobalState } from "./hooks/useTheme";
import { light as lightTheme } from "./styles/light";
import { dark as darkTheme } from "./styles/dark";
import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";
import { colors } from "./styles/colors";
import Navbar from "./components/Navbar/index";
import ButtonSwap from "./components/Buttontoggle";
import { DefaultTheme } from "@material-ui/styles";
import Home from "./components/Home/index";

const App = () => {
  const [theme, setTheme] = useGlobalState("theme");

  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  useEffect(() => {
    const checkTheme = () => {
      let localTheme = window.localStorage.getItem("theme");
      if (localTheme === undefined) {
        setCurrentTheme(darkTheme);
        setTheme("dark");
      } else if (localTheme === "light") {
        setTheme("light");
        setCurrentTheme(lightTheme);
      } else {
        setTheme("dark");
        setCurrentTheme(darkTheme);
      }
    };
    checkTheme();
  }, [theme]);

  const classes = useStyles();
  console.log(theme);
  i18next.init({
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
      en: {
        global: global_en,
      },
      es: {
        global: global_es,
      },
    },
  });
  console.log(currentTheme);
  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider theme={currentTheme}>
        <Navbar />
        <Box
          className={theme === "light" ? classes.rootLight : classes.rootDark}
        >
          <ButtonSwap />
          <Home />
        </Box>
      </ThemeProvider>
    </I18nextProvider>
  );
};
const useStyles = makeStyles<DefaultTheme>((theme) => ({
  rootLight: {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    flexDirection: "column",
    height: "fit-content",
    backgroundColor: colors.nav,
  },
  rootDark: {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    flexDirection: "column",
    height: "fit-content",
    backgroundColor: colors.grey,
  },
}));
export default App;
