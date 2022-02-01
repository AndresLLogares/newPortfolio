import { DefaultTheme } from "@material-ui/styles";
import { HexagonFill } from "@styled-icons/bootstrap/HexagonFill";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useGlobalState } from "../../hooks/useTheme";
import { colors } from "../../styles/colors";

const First = () => {
  const classes = useStyles();
  const [theme] = useGlobalState("theme");

  return (
    <Box className={classes.root}>
      <HexagonFill
        className={theme === "light" ? classes.icon : classes.iconDark}
      />
    </Box>
  );
};

const useStyles = makeStyles<DefaultTheme>((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    width: "100%",
    height: "100%",
    "@media (max-width: 1600px)": {
      display: "none",
    },
  },
  icon: {
    position: "absolute",
    top: "1000px",
    right: "10%",
    zIndex: 0,
    transform: "rotate(15deg)",
    width: "30rem",
    height: "30rem",
    color: colors.blue,
    opacity: 0.3,
  },
  iconDark: {
    position: "absolute",
    top: "1000px",
    right: "10%",
    zIndex: 0,
    transform: "rotate(15deg)",
    width: "30rem",
    height: "30rem",
    color: colors.pink,
    opacity: 0.3,
  },
}));
export default First;
