import { makeStyles } from "@material-ui/core/styles";
import Subtitle from "../Subtitles/index";
import { DefaultTheme } from "@material-ui/styles";
import Quotes from "./recommendations";
import Carlos from "../../assets/carlos.jpeg";
import { useTranslation } from "react-i18next";
import { useGlobalState } from "../../hooks/useTheme";
import { urlsSVG } from "../../styles/urls";

const Recommendations = () => {
  const classes = useStyles();
  const { t } = useTranslation("global");
  const [theme] = useGlobalState("theme");

  return (
    <div
      id="Recommendations"
      className={
        theme === "light"
          ? classes.rootRecommendations
          : classes.rootRecommendationsDark
      }
    >
      <Subtitle title={t("Recommendations.first")} />
      <Quotes
        name={"Carlos Benetti"}
        recommendations={t("Recommendations.second")}
        image={Carlos}
      />
    </div>
  );
};

const useStyles = makeStyles<DefaultTheme>({
  rootRecommendations: {
    display: "flex",
    width: "100%",
    minHeight: "60vh",
    height: "fit-content",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "5vh",
    zIndex: 1,
  },
  rootRecommendationsDark: {
    display: "flex",
    width: "100%",
    minHeight: "60vh",
    height: "fit-content",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "5vh",
    zIndex: 1,
  },
});

export default Recommendations;
