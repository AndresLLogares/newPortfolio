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
    width: "5vh",
    height: "5vh",
    color: colors.nav,
    "@media (max-width: 1024px)": {
      width: "4.5vh",
      height: "4.5vh",
    },
  },
  iconDark: {
    width: "5vh",
    height: "5vh",
    color: colors.black,
    "@media (max-width: 1024px)": {
      width: "4.5vh",
      height: "4.5vh",
    },
  },
  button: {
    borderRadius: "50%",
    width: "7vh",
    height: "7vh",
    backgroundColor: colors.blue,
    transition: "background-color 1s ease",
    "&:hover": {
      backgroundColor: colors.pink,
      "& $iconLight": {
        color: colors.black,
      },
    },
    "@media (max-width: 1024px)": {
      width: "6vh",
      height: "6vh",
    },
  },
  buttonBlack: {
    borderRadius: "50%",
    width: "7vh",
    height: "7vh",
    backgroundColor: colors.pink,
    transition: "background-color 1s ease",
    "@media (max-width: 1024px)": {
      width: "6vh",
      height: "6vh",
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
