import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useGlobalState } from "../../hooks/useTheme";
import { Sun } from "@styled-icons/fa-solid/Sun";
import { MoonStarsFill } from "@styled-icons/bootstrap/MoonStarsFill";
import { Button } from "@material-ui/core";
import { DefaultTheme } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";

const ButtonSwap = () => {
  let colorTheme: any = useTheme();
  const [colors, setColors] = useState<any>(colorTheme);
  const [theme, setTheme] = useGlobalState("theme");

  useEffect(() => {
    const changeColor = () => {
      setColors(colorTheme);
    };
    changeColor();
  }, [colorTheme]);

  const toggleButton = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  const useStyles = makeStyles<DefaultTheme>({
    root: {
      display: "flex",
      position: "fixed",
      right: "5%",
      top: "15%",
      zIndex: 3,
    },
    icons: {
      width: "5vh",
      height: "5vh",
      color: colors.palette.background.default,
      "@media (max-width: 1024px)": {
        width: "4.5vh",
        height: "4.5vh",
      },
    },
    button: {
      borderRadius: "100%",
      width: "7vh",
      height: "7vh",
      backgroundColor: colors.palette.secondary.main,
      transition: "background-color 1s ease",
      "&:hover": {
        backgroundColor: colors.palette.common.main,
        "& $icons": {
          color: colors.palette.primary.main,
        },
      },
      "@media (max-width: 1024px)": {
        width: "4rem",
        height: "4rem",
      },
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {theme === "light" ? (
        <Button className={classes.button} onClick={() => toggleButton()}>
          <MoonStarsFill className={classes.icons} />
        </Button>
      ) : (
        <Button className={classes.button} onClick={() => toggleButton()}>
          <Sun className={classes.icons} />
        </Button>
      )}
    </div>
  );
};

export default ButtonSwap;
