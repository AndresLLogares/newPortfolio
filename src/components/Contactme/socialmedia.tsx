import { makeStyles } from "@material-ui/core/styles";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Phone } from "@styled-icons/boxicons-regular/Phone";
import { Email } from "@styled-icons/evaicons-solid/Email";
import { Discord } from "@styled-icons/fa-brands/Discord";
import { TextDocument } from "@styled-icons/entypo/TextDocument";
import { colors } from "../../styles/colors";
import { useGlobalState } from "../../hooks/useTheme";
import { useTranslation } from "react-i18next";
import { DefaultTheme } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import "./buttons.scss";

const SocialMedia = () => {
  const classes = useStyles();

  const [theme] = useGlobalState("theme");

  const { t } = useTranslation("global");

  return (
    <div className={classes.rootSocialMedia}>
      <div className={classes.container}>
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1jkP_jCG66JDquoF5S_2Xm7YdkRo0C2gz/view?usp=sharing"
        >
          <button
            className={theme === "light" ? "buttonSocial" : "buttonSocialDark"}
            type="button"
          >
            <TextDocument
              className={theme === "light" ? classes.icons : classes.iconsDark}
            />
          </button>
          <Typography
            className={theme === "light" ? classes.text : classes.textDark}
          >
            {t("CV.first")}
          </Typography>
        </a>
      </div>
      <div className={classes.container}>
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1s0Laq1mXXjft1YuLv1j38bLtOohk8zXK/view?usp=sharing"
        >
          <button
            className={theme === "light" ? "buttonSocial" : "buttonSocialDark"}
            type="button"
          >
            <TextDocument
              className={theme === "light" ? classes.icons : classes.iconsDark}
            />
          </button>
          <Typography
            className={theme === "light" ? classes.text : classes.textDark}
          >
            {t("CV.second")}
          </Typography>
        </a>
      </div>
      <div className={classes.container}>
        <a
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          href="https://www.linkedin.com/in/andr%C3%A9s-luis-logares-522595172/"
        >
          <button
            className={theme === "light" ? "buttonSocial" : "buttonSocialDark"}
            type="button"
          >
            <Linkedin
              className={theme === "light" ? classes.icons : classes.iconsDark}
            />
          </button>
          <Typography
            className={theme === "light" ? classes.text : classes.textDark}
          >
            Linkedin
          </Typography>
        </a>
      </div>
      <div className={classes.container}>
        <a
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          href="mailto:andresl940@hotmail.com"
        >
          <button
            className={theme === "light" ? "buttonSocial" : "buttonSocialDark"}
            type="button"
          >
            <Email
              className={theme === "light" ? classes.icons : classes.iconsDark}
            />
          </button>
          <Typography
            className={theme === "light" ? classes.text : classes.textDark}
          >
            Andresl940@hotmail.com
          </Typography>
        </a>
      </div>
      <div className={classes.container}>
        <a
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          href="https://github.com/AndresLLogares"
        >
          <button
            className={theme === "light" ? "buttonSocial" : "buttonSocialDark"}
            type="button"
          >
            <Github
              className={theme === "light" ? classes.icons : classes.iconsDark}
            />
          </button>
          <Typography
            className={theme === "light" ? classes.text : classes.textDark}
          >
            Github
          </Typography>
        </a>
      </div>
      <div className={classes.container}>
        <a
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          href="https://discord.com/"
        >
          <button
            className={theme === "light" ? "buttonSocial" : "buttonSocialDark"}
            type="button"
          >
            <Discord
              className={theme === "light" ? classes.icons : classes.iconsDark}
            />
          </button>
          <Typography
            className={theme === "light" ? classes.text : classes.textDark}
          >
            AndresLogares#6764
          </Typography>
        </a>
      </div>
      <div className={classes.container}>
        <a
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          href="https://wa.me/5491136005563"
        >
          <button
            className={theme === "light" ? "buttonSocial" : "buttonSocialDark"}
            type="button"
          >
            <Phone
              className={theme === "light" ? classes.icons : classes.iconsDark}
            />
          </button>
        </a>
        <Typography
          className={theme === "light" ? classes.text : classes.textDark}
        >
          +54 9 1136005563
        </Typography>
      </div>
    </div>
  );
};

const useStyles = makeStyles<DefaultTheme>({
  rootSocialMedia: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    marginTop: "5vh",
    marginBottom: "5vh",
    "@media (max-width: 1024px)": {
      width: "100%",
      justifyContent: "center",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "20rem",
    margin: "4vh",
    "@media (max-width: 1024px)": {
      width: "90%",
    },
  },
  text: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    zIndex: 2,
    textTransform: "none",
    fontSize: "2.5vh",
    fontWeight: "bold",
    color: colors.black,
    marginTop: "1rem",
    "@media (max-width: 1024px)": {
      fontSize: "2vh",
    },
  },
  textDark: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    zIndex: 2,
    textTransform: "none",
    fontSize: "2.5vh",
    fontWeight: "bold",
    color: colors.nav,
    marginTop: "1rem",
    "@media (max-width: 1024px)": {
      fontSize: "2vh",
    },
  },
  icons: {
    width: "6vh",
    height: "6vh",
    color: colors.black,
    zIndex: 2,
  },
  iconsDark: {
    width: "6vh",
    height: "6vh",
    color: colors.nav,
    zIndex: 2,
  },
});

export default SocialMedia;
