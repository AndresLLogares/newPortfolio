import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Subtitle from "../Subtitles/index";
import { DefaultTheme } from "@material-ui/styles";
import Quotes from "./recommendations";
import Carlos from "../../assets/carlos.jpeg";
import { useTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { useTheme } from "@material-ui/core/styles";

const Recommendations = () => {
  let colorTheme: any = useTheme();
  const [colors, setColors] = useState<any>(colorTheme);

  useEffect(() => {
    const changeColor = () => {
      setColors(colorTheme);
    };
    changeColor();
  }, [colorTheme]);

  const useStyles = makeStyles<DefaultTheme>({
    rootRecommendations: {
      display: "flex",
      width: "100%",
      paddingTop: "2vh",
      height: "fit-content",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
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

  return (
    <div id="Recommendations" className={classes.rootRecommendations}>
      <Slide direction="left" className={classes.slide} triggerOnce={true}>
        <Subtitle title={t("Recommendations.first")} />
        <Quotes
          name={"Carlos Benetti"}
          recommendations={t("Recommendations.second")}
          image={Carlos}
        />
      </Slide>
    </div>
  );
};

export default Recommendations;
