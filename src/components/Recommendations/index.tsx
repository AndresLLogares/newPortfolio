import { makeStyles } from "@material-ui/core/styles";
import Subtitle from "../Subtitles/index";
import { DefaultTheme } from "@material-ui/styles";
import Quotes from "./recommendations";
import Carlos from "../../assets/carlos.jpeg";
import { useTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";

const Recommendations = () => {
  const classes = useStyles();
  const { t } = useTranslation("global");

  return (
    <div id="Recommendations" className={classes.rootRecommendations}>
      <Slide direction="left" className={classes.slide}>
        <Subtitle title={t("Recommendations.first")} />
        <Quotes
          name={"Carlos Benetti"}
          recommendations={t("Recommendations.second")}
          image={Carlos}
        />
      </Slide>
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
  slide: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
  },
});

export default Recommendations;
