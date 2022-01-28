import { makeStyles } from "@material-ui/core/styles";
import Subtitle from "../Subtitles/index";
import { DefaultTheme } from "@material-ui/styles";
import Quotes from "./recommendations";
import Carlos from "../../assets/carlos.jpeg";
import { useTranslation } from "react-i18next";

const Recommendations = () => {
  const classes = useStyles();
  const { t } = useTranslation("global");

  return (
    <div id="Recommendations" className={classes.rootRecommendations}>
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
    height: "fit-content",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5vh",
  },
});

export default Recommendations;
