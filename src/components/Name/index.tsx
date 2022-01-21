import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Logo from "./logo.svg";
import { DefaultTheme } from "@material-ui/styles";
import { useGlobalState } from "../../hooks/useTheme";
import { colors } from "../../styles/colors";

const Name = () => {
  const classes = useStyles();
  const { t } = useTranslation("global");
  const [theme] = useGlobalState("theme");

  return (
    <div id="name" className={classes.rootName}>
      <div className={classes.divFather}>
        <div className={classes.divSort}>
          <img src={Logo} alt="logo" className={classes.logo} />
        </div>
        <div className={classes.divSort}>
          <Typography
            variant="h1"
            className={theme === "light" ? classes.name : classes.nameDark}
          >
            Andrés
          </Typography>
          <Typography
            variant="h1"
            className={theme === "light" ? classes.name : classes.nameDark}
          >
            Luis
          </Typography>
          <Typography
            variant="h1"
            className={theme === "light" ? classes.name : classes.nameDark}
          >
            Logares
          </Typography>
        </div>
      </div>
      <div className={classes.divSubname}>
        <Typography
          className={
            theme === "light" ? classes.subtitle : classes.subtitleDark
          }
        >
          {t("name.full-stack-developer")}
        </Typography>
      </div>
    </div>
  );
};

const useStyles = makeStyles<DefaultTheme>({
  rootName: {
    display: "flex",
    width: "100%",
    marginTop: "6%",
    marginBottom: "5%",
    flexDirection: "column",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 1024px)": {
      marginTop: "10rem",
    },
  },
  divFather: {
    display: "flex",
    width: "50%",
    flexDirection: "row",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 1024px)": {
      flexDirection: "column",
      width: "100%",
    },
  },
  divSort: {
    display: "flex",
    marginTop: "5%",
    marginBottom: "5%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 1024px)": {
      marginTop: "5%",
      marginBottom: "10%",
    },
  },
  logo: {
    display: "flex",
    width: "150px",
    borderRadius: "10% 10% 10% 10%",
  },
  name: {
    fontSize: "8vh",
    fontFamily: ["Oswald", "sans-serif"].join(","),
    textTransform: "uppercase",
    fontWeight: "bold",
    color: colors.black,
    "@media (max-width: 1024px)": {
      fontSize: "6vh",
    },
  },
  nameDark: {
    fontSize: "8vh",
    fontFamily: ["Oswald", "sans-serif"].join(","),
    textTransform: "uppercase",
    fontWeight: "bold",
    color: colors.nav,
    "@media (max-width: 1024px)": {
      fontSize: "6vh",
    },
  },
  divSubname: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "6vh",
    fontFamily: ["Ultra", "serif"].join(","),
    textTransform: "uppercase",
    fontWeight: 500,
    color: colors.black,
    "@media (max-width: 1024px)": {
      fontSize: "4vh",
    },
  },
  subtitleDark: {
    fontSize: "6vh",
    fontFamily: ["Ultra", "serif"].join(","),
    textTransform: "uppercase",
    fontWeight: 500,
    color: colors.nav,
    "@media (max-width: 1024px)": {
      fontSize: "4vh",
    },
  },
});

export default Name;
