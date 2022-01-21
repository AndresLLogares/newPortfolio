import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useGlobalState } from "../../hooks/useTheme";
import { Sun } from "@styled-icons/fa-solid/Sun";
import { MoonStarsFill } from "@styled-icons/bootstrap/MoonStarsFill";
import { Button } from "@material-ui/core";
import { colors } from "../../styles/colors";
import { DefaultTheme } from "@material-ui/styles";

const ButtonSwap = () => {
  const classes = useStyles();
  const [theme, setTheme] = useGlobalState("theme");

  const toggleButton = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <div className={classes.root}>
      {theme === "light" ? (
        <Button className={classes.button} onClick={() => toggleButton()}>
          <MoonStarsFill className={classes.iconLight} />
        </Button>
      ) : (
        <Button className={classes.buttonBlack} onClick={() => toggleButton()}>
          <Sun className={classes.iconDark} />
        </Button>
      )}
    </div>
  );
};

const useStyles = makeStyles<DefaultTheme>({
  root: {
    display: "flex",
    position: "fixed",
    right: "5%",
    top: "15%",
    zIndex: 5,
  },
  iconLight: {
    width: "4rem",
    height: "4rem",
    color: colors.nav,
    "@media (max-width: 1024px)": {
      width: "2.5rem",
      height: "2.5rem",
    },
  },
  iconDark: {
    width: "4rem",
    height: "4rem",
    color: colors.black,
    "@media (max-width: 1024px)": {
      width: "2.5rem",
      height: "2.5rem",
    },
  },
  button: {
    borderRadius: "50%",
    width: "4rem",
    height: "4rem",
    backgroundColor: colors.blue,
    "&:hover": {
      backgroundColor: colors.pink,
      "& $iconLight": {
        color: colors.black,
      },
    },
    "@media (max-width: 1024px)": {
      width: "3.5rem",
      height: "3.5rem",
    },
  },
  buttonBlack: {
    borderRadius: "50%",
    width: "4rem",
    height: "4rem",
    backgroundColor: colors.pink,
    "@media (max-width: 1024px)": {
      width: "3.5rem",
      height: "3.5rem",
    },
    "&:hover": {
      backgroundColor: colors.nav,
      "& $iconDark": {
        color: colors.blue,
      },
    },
  },
});
export default ButtonSwap;
