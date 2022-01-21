import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { DefaultTheme } from "@material-ui/styles";
import { useGlobalState } from "../../hooks/useTheme";
import { colors } from "../../styles/colors";
const SubTitles = (props: any) => {
  const classes = useStyles();
  const [theme] = useGlobalState("theme");

  return (
    <div className={classes.rootSubtitle}>
      <Typography
        className={theme === "light" ? classes.subtitle : classes.subtitleDark}
      >
        {props.title}
      </Typography>
    </div>
  );
};

const useStyles = makeStyles<DefaultTheme>({
  rootSubtitle: {
    display: "flex",
    width: "95%",
    height: "fit-content",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  subtitle: {
    fontSize: "5vh",
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontWeight: "bold",
    color: colors.black,
  },
  subtitleDark: {
    fontSize: "5vh",
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontWeight: "bold",
    color: colors.nav,
  },
});

export default SubTitles;
