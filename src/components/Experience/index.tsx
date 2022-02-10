import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Subtitle from "../Subtitles/index";
import { DefaultTheme } from "@material-ui/styles";
import { Slide } from "react-awesome-reveal";
import Experiences from "./experiences";
import { useTheme } from "@material-ui/core/styles";

const Experience = () => {
  let colorTheme: any = useTheme();
  const [colors, setColors] = useState<any>(colorTheme);

  useEffect(() => {
    const changeColor = () => {
      setColors(colorTheme);
    };
    changeColor();
  }, [colorTheme]);

  const useStyles = makeStyles<DefaultTheme>({
    root: {
      display: "flex",
      width: "100%",
      height: "fit-content",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: "5vh",
      backgroundColor: colors.palette.background.default,
      borderTop: "5px solid " + colors.palette.common.main,
      borderBottom: "5px solid " + colors.palette.common.main,
      transition: "background-image 0.5s ease",
      zIndex: 1,
    },
    slide: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
      flexDirection: "column",
    },
  });

  const classes = useStyles();
  const { t } = useTranslation("global");
  let details = [
    t("Experience.first"),
    t("Experience.second"),
    t("Experience.third"),
    t("Experience.fourth"),
  ];
  return (
    <div id="experience" className={classes.root}>
      <Slide
        direction="left"
        cascade={true}
        className={classes.slide}
        triggerOnce={true}
      >
        <Subtitle title={t("Experience.title")} />
        <Experiences
          company={"Octosoft Professionals"}
          link={
            "https://www.linkedin.com/company/octosoft-professionals/mycompany/"
          }
          date={`08/2021 - ${t("Experience.time")}`}
          position={"Full Stack Developer"}
          details={details}
        />
      </Slide>
    </div>
  );
};

export default Experience;
