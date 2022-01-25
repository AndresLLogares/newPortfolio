import { makeStyles } from "@material-ui/core/styles";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Phone } from "@styled-icons/boxicons-regular/Phone";
import { Email } from "@styled-icons/evaicons-solid/Email";
import { TextDocument } from "@styled-icons/entypo/TextDocument";
import { colors } from "../../styles/colors";
import { useGlobalState } from "../../hooks/useTheme";
import { useTranslation } from "react-i18next";
import { DefaultTheme } from "@material-ui/styles";
import "../Technologies/icon.scss";

const SocialMedia = () => {
  const classes = useStyles();

  const [theme] = useGlobalState("theme");

  const { t } = useTranslation("global");

  return (
    <div className={classes.rootSocialMedia}>
      <a
        style={{ textDecoration: "none" }}
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/file/d/1JcWVsJkDIw-iFITPQGex8qwI5aLwv4ky/view?usp=sharing"
      >
        <span className={classes.mas}>
          <TextDocument
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
        </span>
        <button type="button" name="Hover">
          {t("CV.first")}
        </button>
      </a>
      <a
        style={{ textDecoration: "none" }}
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/file/d/10MLP4tvDM8QXsBwxPAIuTVqglq-8Zk12/view?usp=sharing"
      >
        <span className={classes.mas}>
          <TextDocument
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
        </span>
        <button type="button" name="Hover">
          {t("CV.second")}
        </button>
      </a>
      <a
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
        href="https://www.linkedin.com/in/andr%C3%A9s-luis-logares-522595172/"
      >
        <span className={classes.mas}>
          <Linkedin
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />{" "}
        </span>
        <button type="button" name="Hover">
          Linkedin
        </button>
      </a>
      <a
        href="mailto:andresl940@hotmail.com"
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
      >
        <span className={classes.mas}>
          <Email
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
        </span>
        <button type="button" name="Hover">
          Andresl940@hotmail.com
        </button>
      </a>
      <a
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
        href="https://github.com/AndresLLogares"
      >
        <span className={classes.mas}>
          <Github
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
        </span>
        <button type="button" name="Hover">
          Github
        </button>
      </a>
      <a
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
        href="https://wa.me/5491136005563"
      >
        <span className={classes.mas}>
          <Phone
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
        </span>
        <button type="button" name="Hover">
          +54 9 1136005563
        </button>
      </a>
    </div>
  );
};

const useStyles = makeStyles<DefaultTheme>({
  rootSocialMedia: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "95%",
    marginTop: "2%",
    marginBottom: "5%",
    "@media (max-width: 1024px)": {
      width: "100%",
      justifyContent: "center",
    },
  },
  Links: {
    width: "20%",
    backgroundColor: colors.white,
    borderRadius: "10px 10px 10px 10px",
    marginRight: "2%",
    marginBottom: "2%",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "1%",
    color: colors.black,
    fontFamily: ["Poppins", "sans-serif"].join(","),
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "1.8vh",
    "&:hover": {
      backgroundColor: colors.blue,
      color: colors.white,
      cursor: "pointer",
      "& $icons": {
        color: colors.white,
      },
    },
  },
  mas: {
    position: "absolute",
    color: colors.black,
    textAlign: "center",
    width: "101%",
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontWeight: "bold",
    fontSize: "3vh",
    marginTop: "0.6rem",
    overflow: "hidden",
  },
  icons: {
    width: "3.5rem",
    height: "3.5rem",
    color: colors.blue,
  },
  iconsDark: {
    width: "3.5rem",
    height: "3.5rem",
    color: colors.pink,
  },
});

export default SocialMedia;
