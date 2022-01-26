import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Logo from "./logo.svg";
import { DefaultTheme } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";

const Name = () => {
  let colorTheme: any = useTheme();
  colorTheme = colorTheme.palette.primary.main;
  const classes = useStyles({ colorTheme });
  const { t } = useTranslation("global");

  return (
    <div id="name" className={classes.rootName}>
      <div className={classes.divFather}>
        <div className={classes.divSort}>
          <img src={Logo} alt="logo" className={classes.logo} />
        </div>
        <div className={classes.divSort}>
          <Typography
            style={{ color: colorTheme }}
            variant="h1"
            className={classes.name}
          >
            Andrés
          </Typography>
          <Typography
            style={{ color: colorTheme }}
            variant="h1"
            className={classes.name}
          >
            Luis
          </Typography>
          <Typography
            style={{ color: colorTheme }}
            variant="h1"
            className={classes.name}
          >
            Logares
          </Typography>
        </div>
      </div>
      <div className={classes.divSubname}>
        <Typography style={{ color: colorTheme }} className={classes.subtitle}>
          {t("name.full-stack-developer")}
        </Typography>
      </div>
    </div>
  );
};

const useStyles = makeStyles<DefaultTheme>({
  rootName: {
    display: "flex",
    width: "100%",
    marginTop: "15vh",
    marginBottom: "7vh",
    flexDirection: "column",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 1024px)": {
      marginTop: "20vh",
    },
  },
  divFather: {
    display: "flex",
    width: "50%",
    flexDirection: "row",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 1024px)": {
      flexDirection: "column",
      width: "100%",
    },
  },
  divSort: {
    display: "flex",
    marginTop: "5%",
    marginBottom: "5%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 1024px)": {
      marginTop: "1rem",
      marginBottom: "5rem",
    },
  },
  logo: {
    display: "flex",
    width: "20vh",
    borderRadius: "10% 10% 10% 10%",
    "@media (max-width: 1024px)": {
      width: "15vh",
    },
  },
  name: {
    fontSize: "8vh",
    fontFamily: ["Oswald", "sans-serif"].join(","),
    textTransform: "uppercase",
    fontWeight: "bold",
    "@media (max-width: 1024px)": {
      fontSize: "7vh",
    },
  },
  divSubname: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "6vh",
    fontFamily: ["Ultra", "serif"].join(","),
    textTransform: "uppercase",
    fontWeight: 500,
    "@media (max-width: 1024px)": {
      fontSize: "4vh",
    },
  },
});

export default Name;
