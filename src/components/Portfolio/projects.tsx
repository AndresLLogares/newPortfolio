import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { DefaultTheme } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import NextLingo from "../../assets/NextLingo.png";
import { Link } from "@styled-icons/bootstrap/Link";
import { Github } from "@styled-icons/boxicons-logos/Github";
import Nile from "../../assets/Nile.svg";
import Coolormedia from "../../assets/coolormedia.svg";
import Fairview from "../../assets/Fairview.svg";

import "./title.scss";
const Projects = () => {
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
      alignItems: "center",
      justifyContent: "flex-start",
      flexDirection: "column",
      textAlign: "start",
      marginBottom: "5vh",
    },
    wrap: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "95%",
      "@media (max-width: 1024px)": {
        width: "100%",
        justifyContent: "center",
      },
    },
    subtitle: {
      display: "flex",
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: "4vh",
      color: colors.palette.secondary.main,
      fontWeight: "bold",
    },
    father: {
      display: "flex",
      width: "90%",
      height: "fit-content",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      flexDirection: "column",
      textAlign: "start",
    },
    projects: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "2rem",
      justifyContent: "flex-start",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      border: "5px solid " + colors.palette.common.main,
      width: "25rem",
      minHeight: "40rem",
      height: "fit-content",
      "@media (max-width: 1024px)": {
        width: "90%",
      },
    },
    projectsImage: {
      width: "10rem",
      height: "10rem",
      marginBottom: "2rem",
    },
    projectsLinks: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "90%",
      flexDirection: "column",
    },
    projectsIcon: {
      width: "3.5rem",
      height: "3.5rem",
      marginRight: "1vh",
      color: "#ffffff",
      zIndex: 2,
      "@media (max-width: 1024px)": {
        width: "2.5rem",
        height: "2.5rem",
      },
    },
    projectsText: {
      display: "flex",
      fontFamily: ["Poppins", "sans-serif"].join(","),
      zIndex: 2,
      textTransform: "none",
      fontSize: "2vh",
      fontWeight: "bold",
      color: "#ffffff",
      "@media (max-width: 1024px)": {
        fontSize: "1.5vh",
      },
    },
  });

  const classes = useStyles();
  const { t } = useTranslation("global");
  return (
    <div className={classes.root}>
      <div className={classes.father}>
        <Typography className={classes.subtitle}>
          {t("Portfolio.first")}
        </Typography>
        <div className={classes.wrap}>
          <div className={classes.projects}>
            <p className="NextLingo">NextLingo</p>
            <img
              src={NextLingo}
              alt="NextLingo"
              className={classes.projectsImage}
            />
            <div className={classes.projectsLinks}>
              <a
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
                href="https://nextlingo.vercel.app/"
              >
                <button className="projectsButton">
                  <Link className={classes.projectsIcon} />
                  <Typography className={classes.projectsText}>
                    {t("Portfolio.link")}
                  </Typography>
                </button>
              </a>
              <a
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AndresLLogares/nextlingofront"
              >
                <button className="projectsButton">
                  <Github className={classes.projectsIcon} />
                  <Typography className={classes.projectsText}>
                    {t("Portfolio.github")}
                  </Typography>
                </button>
              </a>
            </div>
          </div>
          <div className={classes.projects}>
            <p className="coolormedia">CoolorMedia</p>
            <img
              src={Coolormedia}
              alt="coolormedia"
              className={classes.projectsImage}
            />
            <div className={classes.projectsLinks}>
              <a
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
                href="https://coolormedia.netlify.app/"
              >
                <button className="projectsButton">
                  <Link className={classes.projectsIcon} />
                  <Typography className={classes.projectsText}>
                    {t("Portfolio.link")}
                  </Typography>
                </button>
              </a>
              <a
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AndresLLogares/coolormediafront"
              >
                <button className="projectsButton">
                  <Github className={classes.projectsIcon} />
                  <Typography className={classes.projectsText}>
                    {t("Portfolio.github")}
                  </Typography>
                </button>
              </a>
            </div>
          </div>
          <div className={classes.projects}>
            <p className="fairview">Fairview</p>
            <img
              src={Fairview}
              alt="Fairview"
              className={classes.projectsImage}
            />
            <div className={classes.projectsLinks}>
              <a
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
                href="https://fairviewgallery.netlify.app/"
              >
                <button className="projectsButton">
                  <Link className={classes.projectsIcon} />
                  <Typography className={classes.projectsText}>
                    {t("Portfolio.link")}
                  </Typography>
                </button>
              </a>
              <a
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AndresLLogares/fairviewFrontend"
              >
                <button className="projectsButton">
                  <Github className={classes.projectsIcon} />
                  <Typography className={classes.projectsText}>
                    {t("Portfolio.github")}
                  </Typography>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.father}>
        <Typography className={classes.subtitle}>
          {t("Portfolio.second")}
        </Typography>
        <div className={classes.wrap}>
          <div className={classes.projects}>
            <p className="Nile">NileDAO</p>
            <img src={Nile} alt="Nile" className={classes.projectsImage} />
            <div className={classes.projectsLinks}>
              <a
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
                href="https://www.niledao.io/"
              >
                <button className="projectsButton">
                  <Link className={classes.projectsIcon} />
                  <Typography className={classes.projectsText}>
                    {t("Portfolio.link")}
                  </Typography>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
