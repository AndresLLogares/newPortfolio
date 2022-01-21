import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Subtitle from "../Subtitles/index";
import { DefaultTheme } from "@material-ui/styles";
import Image from "../../assets/about.webp";
import { colors } from "../../styles/colors";
import { useGlobalState } from "../../hooks/useTheme";

const AboutMe = () => {
  const classes = useStyles();
  const { t } = useTranslation("global");
  const [theme] = useGlobalState("theme");

  return (
    <div id="aboutme" className={classes.rootAboutMe}>
      <Subtitle title={t("titles.about-me")} />
      <div className={classes.divFather}>
        <div className={classes.divChildren}>
          <img src={Image} alt="about" className={classes.image} />
        </div>{" "}
        <div className={classes.divSub}>
          <Typography
            className={
              theme === "light" ? classes.subtitle : classes.subtitleDark
            }
          >
            {t("About.first")}
          </Typography>
          <Typography
            className={
              theme === "light" ? classes.subtitle : classes.subtitleDark
            }
          >
            {t("About.second")}
          </Typography>
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles<DefaultTheme>((theme) => ({
  rootAboutMe: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "95%",
    marginTop: "2%",
    marginBottom: "5%",
    flexDirection: "column",
  },
  divFather: {
    display: "flex",
    width: "95%",
    height: "fit-content",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "start",
    marginTop: "2%",
    marginBottom: "5%",
    "@media (max-width: 1600px)": {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
  },
  divChildren: {
    display: "flex",
    width: "40%",
    height: "fit-content",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    textAlign: "start",
    "@media (max-width: 1600px)": {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      width: "95%",
      marginTop: "5%",
      marginBottom: "5%",
    },
  },
  divSub: {
    display: "flex",
    width: "50%",
    height: "fit-content",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    textAlign: "start",
    "@media (max-width: 1600px)": {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      width: "95%",
      marginTop: "5%",
      marginBottom: "5%",
    },
  },
  image: {
    width: "500px",
    borderRadius: "10px 10px 10px 10px",
    "@media (max-width: 1024px)": {
      width: "80%",
    },
  },
  subtitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    fontFamily: ["Poppins", "sans-serif"].join(","),
    color: colors.black,
  },
  subtitleDark: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    fontFamily: ["Poppins", "sans-serif"].join(","),
    color: colors.nav,
  },
}));

export default AboutMe;
