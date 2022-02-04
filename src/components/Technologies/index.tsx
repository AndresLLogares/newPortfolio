/* eslint-disable @typescript-eslint/no-use-before-define */
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Subtitle from "../Subtitles/index";
import { DefaultTheme } from "@material-ui/styles";
import Icons from "./icons";
import { Slide } from "react-awesome-reveal";

const Technologies = () => {
  const classes = useStyles();
  const { t } = useTranslation("global");

  return (
    <div id="technologies" className={classes.root}>
      <Slide direction="right" className={classes.slide}>
        <Subtitle title={t("titles.Technologies")} />
        <Icons />
      </Slide>
    </div>
  );
};
const useStyles = makeStyles<DefaultTheme>({
  root: {
    display: "flex",
    width: "100%",
    height: "fit-content",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5vh",
    transition: "background-image 0.5s ease",
    zIndex: 1,
  },
  slide: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
  },
});

export default Technologies;
