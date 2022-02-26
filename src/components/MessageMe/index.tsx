import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Subtitle from "../Subtitles/index";
import { DefaultTheme } from "@material-ui/styles";
import { Slide } from "react-awesome-reveal";
import { useTheme } from "@material-ui/core/styles";
import Form from "./form";

const MessageMe = () => {
  const { t } = useTranslation("global");
  let colorTheme: any = useTheme();
  const [colors, setColors] = useState<any>(colorTheme);

  useEffect(() => {
    const changeColor = () => {
      setColors(colorTheme);
    };
    changeColor();
  }, [colorTheme]);

  const useStyles = makeStyles<DefaultTheme>({
    rootContactMe: {
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

  return (
    <div id="message" className={classes.rootContactMe}>
      <Slide direction="left" className={classes.slide} triggerOnce={true}>
        <Subtitle title={t("titles.Message")} />
        <Form />
      </Slide>
    </div>
  );
};

export default MessageMe;
