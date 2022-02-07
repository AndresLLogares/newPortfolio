import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import SocialMedia from "./socialmedia";
import Subtitle from "../Subtitles/index";
import { DefaultTheme } from "@material-ui/styles";
import { Slide } from "react-awesome-reveal";

const ContactMe = () => {
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
    <div id="contactme" className={classes.rootContactMe}>
      <Slide direction="right" className={classes.slide} triggerOnce={true}>
        <Subtitle title={t("titles.Contact")} />
      </Slide>
      <SocialMedia />
    </div>
  );
};

export default ContactMe;
