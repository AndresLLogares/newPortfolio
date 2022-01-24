import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { CloseCircle } from "@styled-icons/evaicons-solid/CloseCircle";
import { Menu } from "@styled-icons/icomoon/Menu";
import { useTranslation } from "react-i18next";
import { colors } from "../../styles/colors";
import ButtonTranslate from "../Buttontranslate/index";
import { useGlobalState } from "../../hooks/useTheme";
import Logo from "../Name/logo.svg";
import useWindowSize from "./size";
import { DefaultTheme } from "@material-ui/styles";
import "./dropdown.scss";

const Navbar = () => {
  const classes = useStyles();

  const [theme] = useGlobalState("theme");

  const { t } = useTranslation("global");

  const [dropOpen, setDropOpen] = useState(false);

  const [fixDrop, setFixDrop] = useState(false);

  const { width } = useWindowSize();

  const handleDrop = () => {
    setDropOpen(!dropOpen);
    setFixDrop(!fixDrop);
  };

  useEffect(() => {
    if (width < 1024) {
      setDropOpen(false);
      setFixDrop(false);
    }
  }, [width]);

  return (
    <div>
      <AppBar
        position="fixed"
        className={theme === "light" ? classes.navbarLight : classes.navbarDark}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.divLogo}>
            <a rel="noreferrer" style={{ textDecoration: "none" }} href="#name">
              <img src={Logo} alt="logo" className={classes.logo} />
            </a>
          </div>
          <div className={classes.divButtons}>
            {width > 1200 ? (
              <>
                <div className={classes.links}>
                  <ButtonTranslate />
                </div>
                <a
                  className={classes.links}
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                  href="#aboutme"
                >
                  <Button
                    className={
                      theme === "light"
                        ? classes.buttonLight
                        : classes.buttonDark
                    }
                  >
                    {t("titles.about-me")}
                  </Button>
                </a>
                <a
                  className={classes.links}
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                  href="#technologies"
                >
                  <Button
                    className={
                      theme === "light"
                        ? classes.buttonLight
                        : classes.buttonDark
                    }
                  >
                    {t("titles.Technologies")}
                  </Button>
                </a>
                <a
                  className={classes.links}
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  href="https://drive.google.com/file/d/1t3lkUL7CWuUuNC3u5f2-ltlXHujwpGWh/view?usp=sharing"
                >
                  <Button
                    className={
                      theme === "light"
                        ? classes.buttonLight
                        : classes.buttonDark
                    }
                  >
                    CV
                  </Button>
                </a>
                <a
                  className={classes.links}
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                  href="#contactme"
                >
                  <Button
                    className={
                      theme === "light"
                        ? classes.buttonLight
                        : classes.buttonDark
                    }
                  >
                    {t("titles.Contact")}
                  </Button>
                </a>
              </>
            ) : (
              <>
                {!dropOpen ? (
                  <Button
                    onClick={() => handleDrop()}
                    className={
                      theme === "light"
                        ? classes.buttonMenu
                        : classes.buttonMenuDark
                    }
                  >
                    <Menu className={classes.icons} />{" "}
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleDrop()}
                    className={
                      theme === "light"
                        ? classes.buttonMenu
                        : classes.buttonMenuDark
                    }
                  >
                    <CloseCircle className={classes.icons} />
                  </Button>
                )}
              </>
            )}
          </div>
          {width < 1200 && theme === "light" && fixDrop ? (
            <div className={dropOpen ? "visible" : "none"}>
              <>
                <div className={classes.links}>
                  <ButtonTranslate />
                </div>{" "}
                <a
                  className={classes.links}
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                  href="#aboutme"
                >
                  <Button
                    className={
                      theme === "light"
                        ? classes.buttonLight
                        : classes.buttonDark
                    }
                  >
                    {t("titles.about-me")}
                  </Button>
                </a>
                <a
                  className={classes.links}
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                  href="#technologies"
                >
                  <Button
                    className={
                      theme === "light"
                        ? classes.buttonLight
                        : classes.buttonDark
                    }
                  >
                    {t("titles.Technologies")}
                  </Button>
                </a>
                <a
                  className={classes.links}
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  href="https://drive.google.com/file/d/1t3lkUL7CWuUuNC3u5f2-ltlXHujwpGWh/view?usp=sharing"
                >
                  <Button
                    className={
                      theme === "light"
                        ? classes.buttonLight
                        : classes.buttonDark
                    }
                  >
                    CV
                  </Button>
                </a>
                <a
                  className={classes.links}
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                  href="#contactme"
                >
                  <Button
                    className={
                      theme === "light"
                        ? classes.buttonLight
                        : classes.buttonDark
                    }
                  >
                    {t("titles.Contact")}
                  </Button>
                </a>
              </>
            </div>
          ) : null}
          {width < 1200 && theme !== "light" && fixDrop ? (
            <div className={dropOpen ? "visibleDark" : "noneDark"}>
              <>
                <div className={classes.links}>
                  <ButtonTranslate />
                </div>{" "}
                <a
                  className={classes.links}
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                  href="#aboutme"
                >
                  <Button
                    className={
                      theme === "light"
                        ? classes.buttonLight
                        : classes.buttonDark
                    }
                  >
                    {t("titles.about-me")}
                  </Button>
                </a>
                <a
                  className={classes.links}
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                  href="#technologies"
                >
                  <Button
                    className={
                      theme === "light"
                        ? classes.buttonLight
                        : classes.buttonDark
                    }
                  >
                    {t("titles.Technologies")}
                  </Button>
                </a>
                <a
                  className={classes.links}
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  href="https://drive.google.com/file/d/1t3lkUL7CWuUuNC3u5f2-ltlXHujwpGWh/view?usp=sharing"
                >
                  <Button
                    className={
                      theme === "light"
                        ? classes.buttonLight
                        : classes.buttonDark
                    }
                  >
                    CV
                  </Button>
                </a>
                <a
                  className={classes.links}
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                  href="#contactme"
                >
                  <Button
                    className={
                      theme === "light"
                        ? classes.buttonLight
                        : classes.buttonDark
                    }
                  >
                    {t("titles.Contact")}
                  </Button>
                </a>
              </>
            </div>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
};
const useStyles = makeStyles<DefaultTheme>({
  navbarLight: {
    display: "flex",
    backgroundColor: colors.nav,
    height: "12vh",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "none",
    borderBottom: `5px solid ${colors.black}`,
  },
  navbarDark: {
    display: "flex",
    backgroundColor: colors.grey,
    height: "12vh",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "none",
    borderBottom: `5px solid ${colors.nav}`,
  },
  toolbar: {
    display: "flex",
    width: "90%",
    alignItems: "center",
    justifyContent: "flex-start",
    "@media (max-width: 1024px)": {
      justifyContent: "center",
    },
  },
  divLogo: {
    display: "flex",
    width: "20%",
    alignItems: "center",
    justifyContent: "flex-start",
    "&:hover": {
      cursor: "pointer",
    },
  },
  logo: {
    display: "flex",
    width: "80px",
    borderRadius: "10px 10px 10px 10px",
    "@media (max-width: 1024px)": {
      width: "60px",
    },
  },
  divButtons: {
    display: "flex",
    width: "80%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  links: {
    textDecoration: "none",
    marginRight: "2rem",
    marginLeft: "0rem",
  },
  buttonLight: {
    width: "9rem",
    height: "4rem",
    borderRadius: "10px 10px 10px 10px",
    backgroundColor: colors.black,
    color: colors.white,
    fontFamily: ["Poppins", "sans-serif"].join(","),
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "1.8vh",
    border: `transparent`,
    "&:hover": {
      backgroundColor: colors.blue,
      color: colors.white,
    },
    "@media (max-width: 1200px)": {
      margin: 0,
      marginTop: "1rem",
      marginBottom: "1rem",
      width: "13rem",
    },
  },
  buttonDark: {
    width: "9rem",
    height: "4rem",
    borderRadius: "10px 10px 10px 10px",
    backgroundColor: colors.nav,
    color: colors.black,
    fontFamily: ["Poppins", "sans-serif"].join(","),
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "1.8vh",
    border: `transparent`,
    "&:hover": {
      backgroundColor: colors.pink,
      color: colors.nav,
    },
    "@media (max-width: 1200px)": {
      margin: 0,
      marginTop: "1rem",
      marginBottom: "1rem",
      width: "13rem",
    },
  },
  buttonMenu: {
    width: "6rem",
    height: "3rem",
    borderRadius: "10px 10px 10px 10px",
    backgroundColor: colors.black,
    color: colors.white,
    fontFamily: ["Poppins", "sans-serif"].join(","),
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "1.8vh",
    border: `transparent`,
    "&:hover": {
      backgroundColor: colors.blue,
      color: colors.white,
    },
  },
  buttonMenuDark: {
    width: "6rem",
    height: "3rem",
    borderRadius: "10px 10px 10px 10px",
    backgroundColor: colors.nav,
    color: colors.black,
    fontFamily: ["Poppins", "sans-serif"].join(","),
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "1.8vh",
    border: `transparent`,
    "&:hover": {
      backgroundColor: colors.pink,
      color: colors.white,
    },
  },
  icons: {
    width: "2rem",
    height: "2rem",
  },
});

export default Navbar;