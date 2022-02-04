import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Subtitle from "../Subtitles/index";
import { DefaultTheme } from "@material-ui/styles";
import Image from "../../assets/about.webp";
import { useTheme } from "@material-ui/core/styles";
import { Slide } from "react-awesome-reveal";

const AboutMe = (props: any) => {
  let colorTheme: any = useTheme();
  const [colors, setColors] = useState<any>(colorTheme);
  const { t } = useTranslation("global");

  useEffect(() => {
    const changeColor = () => {
      setColors(colorTheme);
    };
    changeColor();
  }, [colorTheme]);

  const useStyles = makeStyles<DefaultTheme>(() => ({
    rootAboutMe: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "95%",
      flexDirection: "column",
      marginBottom: "7vh",
      transition: "background-image 0.5s ease",
    },
    slide: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
      flexDirection: "column",
    },
    divFather: {
      display: "flex",
      width: "100%",
      height: "fit-content",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "start",
      zIndex: 1,
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
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "start",
      "@media (max-width: 1600px)": {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "95%",
      },
    },
    divSub: {
      display: "flex",
      width: "60%",
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
        width: "90%",
        marginTop: "5vh",
      },
    },
    image: {
      width: "350px",
      marginLeft: "4.5vw",
      border: `5px solid`,
      borderColor: colors.palette.secondary.main,
      "@media (max-width: 1024px)": {
        marginLeft: "0",
        width: "80%",
      },
    },
    subtitle: {
      display: "flex",
      fontSize: "2.5vh",
      fontWeight: "bold",
      fontFamily: ["Poppins", "sans-serif"].join(","),
      color: colors.palette.primary.main,
    },
  }));

  const classes = useStyles();

  return (
    <div id="aboutme" className={classes.rootAboutMe}>
      <Slide direction="left" className={classes.slide}>
        <Subtitle title={t("titles.about-me")} />
        <div className={classes.divFather}>
          <div className={classes.divChildren}>
            <img src={Image} alt="about" className={classes.image} />
          </div>{" "}
          <div className={classes.divSub}>
            <Typography className={classes.subtitle}>
              {t("About.first")}
            </Typography>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default AboutMe;
