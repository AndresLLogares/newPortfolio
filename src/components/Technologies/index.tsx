/* eslint-disable @typescript-eslint/no-use-before-define */
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Subtitle from "../Subtitles/index";
import { DefaultTheme } from "@material-ui/styles";
import Icons from "./icons";

const Technologies = () => {
  const classes = useStyles();
  const { t } = useTranslation("global");

  return (
    <div id="technologies" className={classes.root}>
      <Subtitle title={t("titles.Technologies")} />
      <Icons />
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
  },
});

export default Technologies;
