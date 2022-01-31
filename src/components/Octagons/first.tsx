import { DefaultTheme } from "@material-ui/styles";
import { OctagonHalf } from "@styled-icons/bootstrap/OctagonHalf";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useGlobalState } from "../../hooks/useTheme";
import { colors } from "../../styles/colors";

const First = () => {
  const classes = useStyles();
  const [theme] = useGlobalState("theme");

  return (
    <Box className={classes.root}>
      <OctagonHalf
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
    "@media (max-width: 1024px)": {
      display: "none",
    },
  },
  icon: {
    position: "absolute",
    top: "-180px",
    right: "10%",
    zIndex: 0,
    transform: "rotate(15deg)",
    width: "30rem",
    height: "30rem",
    color: colors.blue,
  },
  iconDark: {
    position: "absolute",
    top: "-180px",
    right: "10%",
    zIndex: 0,
    transform: "rotate(15deg)",
    width: "30rem",
    height: "30rem",
    color: colors.pink,
  },
}));
export default First;
