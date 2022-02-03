import { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
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
  let colorTheme: any = useTheme();
  const [colors, setColors] = useState<any>(colorTheme);

  useEffect(() => {
    const changeColor = () => {
      setColors(colorTheme);
    };
    changeColor();
  }, [colorTheme]);

  const [theme] = useGlobalState("theme");

  const { t } = useTranslation("global");

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
      margin: "4vh",
      "@media (max-width: 1024px)": {
        width: "90%",
      },
    },
    text: {
      display: "flex",
      fontFamily: ["Poppins", "sans-serif"].join(","),
      zIndex: 2,
      textTransform: "none",
      fontSize: "2.5vh",
      fontWeight: "bold",
      color: colors.palette.primary.main,
      "@media (max-width: 1024px)": {
        fontSize: "1.5vh",
      },
    },
    icons: {
      width: "6vh",
      height: "6vh",
      marginRight: "1vh",
      color: colors.palette.primary.main,
      zIndex: 2,
    },
    "@media (max-width: 1024px)": {
      width: "2.5vh",
      height: "2.5vh",
    },
  });

  const classes = useStyles();

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
            <TextDocument className={classes.icons} />
            <Typography className={classes.text}>{t("CV.first")}</Typography>
          </button>
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
            <TextDocument className={classes.icons} />
            <Typography className={classes.text}>{t("CV.second")}</Typography>
          </button>
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
            <Linkedin className={classes.icons} />
            <Typography className={classes.text}>Linkedin</Typography>
          </button>
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
            <Email className={classes.icons} />
            <Typography className={classes.text}>
              Andresl940@hotmail.com
            </Typography>
          </button>
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
            <Github className={classes.icons} />
            <Typography className={classes.text}>Github</Typography>
          </button>
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
            <Discord className={classes.icons} />
            <Typography className={classes.text}>AndresLogares#6764</Typography>
          </button>
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
            <Phone className={classes.icons} />
            <Typography className={classes.text}>+54 9 1136005563</Typography>
          </button>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
