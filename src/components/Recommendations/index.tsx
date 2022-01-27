import { makeStyles } from "@material-ui/core/styles";
import Subtitle from "../Subtitles/index";
import { DefaultTheme } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";

const Recommendations = () => {
  const classes = useStyles();

  return (
    <div id="Recommendations" className={classes.rootRecomendations}>
      <Subtitle title="Recommendations" />
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
