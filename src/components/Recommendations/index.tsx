import { makeStyles } from "@material-ui/core/styles";
import Subtitle from "../Subtitles/index";
import { DefaultTheme } from "@material-ui/styles";
import Quotes from "./recommendations";
import Carlos from "../../assets/carlos.jpeg";

const Recommendations = () => {
  const classes = useStyles();

  return (
    <div id="Recommendations" className={classes.rootRecommendations}>
      <Subtitle title="Recommendations" />
      <Quotes
        name={"Carlos Benetti"}
        recommendations={
          "Andrés is amazing at his job! He knows his way around people, does whatever it takes to help colleagues. His expertise as developer is considerable and it helped our team to come up with more efficient solutions and develop different projects. Andrés would become an appreciated member of any team."
        }
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
