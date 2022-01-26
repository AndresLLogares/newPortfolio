import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { DefaultTheme } from "@material-ui/styles";
import "./loading.scss";

const Loading = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <div className="cssload-thecube">
          <div className="cssload-cube cssload-c1"></div>
          <div className="cssload-cube cssload-c2"></div>
          <div className="cssload-cube cssload-c4"></div>
          <div className="cssload-cube cssload-c3"></div>
        </div>
      </Box>
    </Box>
  );
};
const useStyles = makeStyles<DefaultTheme>((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    flexDirection: "column",
    height: "fit-content",
    backgroundColor: "#FBFFE2",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export default Loading;
