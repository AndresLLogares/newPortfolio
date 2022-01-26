import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import SocialMedia from "./socialmedia";
import Subtitle from "../Subtitles/index";
import { DefaultTheme } from "@material-ui/styles";

const ContactMe = () => {
  const classes = useStyles();
  const { t } = useTranslation("global");

  return (
    <div id="contactme" className={classes.rootContactMe}>
      <Subtitle title={t("titles.Contact")} />
      <SocialMedia />
    </div>
  );
};
const useStyles = makeStyles<DefaultTheme>({
  rootContactMe: {
    display: "flex",
    width: "100%",
    height: "fit-content",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5vh",
  },
});

export default ContactMe;
