import { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import SocialMedia from "./socialmedia";
import Subtitle from "../Subtitles/index";
import { DefaultTheme } from "@material-ui/styles";

const ContactMe = () => {
  let colorTheme: any = useTheme();
  const [colors, setColors] = useState<any>(colorTheme);

  useEffect(() => {
    const changeColor = () => {
      setColors(colorTheme);
    };
    changeColor();
  }, [colorTheme]);

  const { t } = useTranslation("global");

  const useStyles = makeStyles<DefaultTheme>({
    rootContactMe: {
      display: "flex",
      width: "100%",
      height: "fit-content",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2,
    },
    container: {
      display: "flex",
      width: "100%",
      height: "fit-content",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderTop: `5px solid`,
      borderColor: colors.palette.secondary.main,
      transition: "background-color 1s ease",
    },
  });

  const classes = useStyles();

  return (
    <div id="contactme" className={classes.rootContactMe}>
      <Subtitle title={t("titles.Contact")} />
      <div className={classes.container}>
        <SocialMedia />
      </div>
    </div>
  );
};

export default ContactMe;
