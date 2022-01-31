import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { DefaultTheme } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";

const SubTitles = (props: any) => {
  let colorTheme: any = useTheme();
  colorTheme = colorTheme.palette.primary.main;
  const classes = useStyles({ colorTheme });

  return (
    <div className={classes.rootSubtitle}>
      <Typography style={{ color: colorTheme }} className={classes.subtitle}>
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
    margin: "0%",
    marginBottom: "5vh",
    zIndex: 1,
  },
  subtitle: {
    fontSize: "5vh",
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontWeight: "bold",
    margin: "0%",
    "@media (max-width: 1600px)": {
      fontSize: "4vh",
    },
  },
});

export default SubTitles;
