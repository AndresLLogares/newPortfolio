import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import SocialMedia from "./socialmedia";
import Subtitle from "../Subtitles/index";
import { DefaultTheme } from "@material-ui/styles";
import { useGlobalState } from "../../hooks/useTheme";
import { colors } from "../../styles/colors";

const ContactMe = () => {
  const classes = useStyles();
  const { t } = useTranslation("global");
  const [theme] = useGlobalState("theme");

  return (
    <div id="contactme" className={classes.rootContactMe}>
      <Subtitle title={t("titles.Contact")} />
      <div
        className={
          theme === "light" ? classes.container : classes.containerDark
        }
      >
        <SocialMedia />
      </div>
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
  },
  container: {
    display: "flex",
    width: "100%",
    height: "fit-content",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.nav,
    borderTop: `5px solid ${colors.blue}`,
    transition: "background-color 1s ease",
  },
  containerDark: {
    display: "flex",
    width: "100%",
    height: "fit-content",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.grey,
    borderTop: `5px solid ${colors.pink}`,
    transition: "background-color 1s ease",
  },
});

export default ContactMe;
