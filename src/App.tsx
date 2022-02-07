import { useEffect, useState, Suspense, lazy } from "react";
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
import { DefaultTheme } from "@material-ui/styles";
import { colors } from "./styles/colors";
import Loading from "./components/Loading/index";
import { urlsSVG } from "./styles/urls";

const Home = lazy(() => import("./components/Home/index"));
const Navbar = lazy(() => import("./components/Navbar/index"));
const Buttontoggle = lazy(() => import("./components/Buttontoggle/index"));

const App = () => {
  const [theme, setTheme] = useGlobalState("theme");

  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    const checkTheme = () => {
      let localTheme = window.localStorage.getItem("theme");
      if (!localTheme) {
        setCurrentTheme(lightTheme);
        setTheme("light");
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
  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider theme={currentTheme}>
        <Box className={theme !== "light" ? classes.rootDark : classes.root}>
          <Suspense fallback={<Loading />}>
            <Navbar />
            <Buttontoggle />
            <Home />
          </Suspense>
        </Box>
      </ThemeProvider>
    </I18nextProvider>
  );
};
const useStyles = makeStyles<DefaultTheme>((theme) => ({
  rootDark: {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    flexDirection: "column",
    height: "fit-content",
    backgroundColor: colors.black,
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    backgroundSize: "contain",
    backgroundImage: `${urlsSVG.navbarDark}`,
    transition: "background-color 1s ease",
  },
  root: {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    flexDirection: "column",
    height: "fit-content",
    backgroundColor: colors.nav,
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    backgroundSize: "contain",
    backgroundImage: `${urlsSVG.navbarLight}`,
    transition: "background-color 1s ease",
  },
}));
export default App;
