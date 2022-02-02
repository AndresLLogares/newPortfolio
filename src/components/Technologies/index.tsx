/* eslint-disable @typescript-eslint/no-use-before-define */
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Subtitle from "../Subtitles/index";
import { DefaultTheme } from "@material-ui/styles";
import { useGlobalState } from "../../hooks/useTheme";
import Icons from "./icons";
import { urlsSVG } from "../../styles/urls";

const Technologies = () => {
  const classes = useStyles();
  const { t } = useTranslation("global");
  const [theme] = useGlobalState("theme");

  return (
    <div
      id="technologies"
      className={theme === "light" ? classes.root : classes.rootDark}
    >
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
    marginBottom: "5vh",
    transition: "background-image 0.5s ease",
    backgroundImage: `${urlsSVG.light}`,
    zIndex: 1,
  },
  rootDark: {
    display: "flex",
    width: "100%",
    height: "fit-content",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5vh",
    zIndex: 1,
    transition: "background-image 0.5s ease",
    backgroundImage: `${urlsSVG.dark}`,
  },
});

export default Technologies;
