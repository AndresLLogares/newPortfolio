import { Suspense, lazy } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/logo.svg";
import { DefaultTheme } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import Loading from "../Loading/index";
import { colors } from "../../styles/colors";
import { useGlobalState } from "../../hooks/useTheme";
const VideoComponent = lazy(() => import("../video/index"));

const Name = () => {
  let colorTheme: any = useTheme();
  colorTheme = colorTheme.palette.primary.main;
  const classes = useStyles({ colorTheme });
  const [theme] = useGlobalState("theme");
  const { t } = useTranslation("global");

  return (
    <div id="name" className={classes.rootName}>
      <Suspense fallback={<Loading />}>
        <VideoComponent />
        <div className={classes.divFather}>
          <div className={classes.divSort}>
            <img src={Logo} alt="logo" className={classes.logo} />
          </div>
          <div className={classes.divSort}>
            <Typography variant="h1" className={classes.name}>
              Andrés
            </Typography>
            <Typography variant="h1" className={classes.name}>
              Luis
            </Typography>
            <Typography variant="h1" className={classes.name}>
              Logares
            </Typography>
          </div>
        </div>
        <div className={classes.divSubname}>
          <Typography className={classes.subtitle}>
            {t("name.full-stack-developer")}
          </Typography>
        </div>
      </Suspense>
    </div>
  );
};

const useStyles = makeStyles<DefaultTheme>({
  rootName: {
    display: "flex",
    width: "100%",
    height: "80vh",
    marginTop: "10vh",
    marginBottom: "7vh",
    flexDirection: "column",
    /* height: "fit-content", */
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    "@media (max-width: 1024px)": {
      marginTop: "15vh",
      height: "100vh",
    },
  },
  divFather: {
    display: "flex",
    width: "50%",
    flexDirection: "row",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
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
    zIndex: 1,
    "@media (max-width: 1024px)": {
      marginTop: "1rem",
      marginBottom: "5rem",
    },
  },
  logo: {
    display: "flex",
    width: "20vh",
    borderRadius: "10% 10% 10% 10%",
    zIndex: 1,
    "@media (max-width: 1024px)": {
      width: "15vh",
    },
  },
  name: {
    fontSize: "8vh",
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    textTransform: "uppercase",
    fontWeight: "bold",
    color: colors.black,
    zIndex: 1,
    textShadow: `1px 1px ${colors.nav}, -1px 1px 0 ${colors.nav}, 1px -1px 0 ${colors.nav},
      -1px -1px 0 ${colors.nav}, 0px 1px 0 ${colors.nav}, 0px -1px 0 ${colors.nav}, -1px 0px 0 ${colors.nav},
      1px 0px 0 ${colors.nav}, 2px 2px 0 ${colors.nav}, -2px 2px 0 ${colors.nav}, 2px -2px 0 ${colors.nav},
      -2px -2px 0 ${colors.nav}, 0px 2px 0 ${colors.nav}, 0px -2px 0 ${colors.nav}, -2px 0px 0 ${colors.nav},
      2px 0px 0 ${colors.nav}, 1px 2px 0 ${colors.nav}, -1px 2px 0 ${colors.nav}, 1px -2px 0 ${colors.nav},
      -1px -2px 0 ${colors.nav}, 2px 1px 0 ${colors.nav}, -2px 1px 0 ${colors.nav}, 2px -1px 0 ${colors.nav},
      -2px -1px 0 ${colors.nav}`,
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
    zIndex: 1,
  },
  subtitle: {
    fontSize: "6vh",
    fontFamily: ["Ultra", "serif"].join(","),
    textTransform: "uppercase",
    fontWeight: 500,
    zIndex: 1,
    color: colors.black,
    textShadow: `1px 1px ${colors.nav}, -1px 1px 0 ${colors.nav}, 1px -1px 0 ${colors.nav},
    -1px -1px 0 ${colors.nav}, 0px 1px 0 ${colors.nav}, 0px -1px 0 ${colors.nav}, -1px 0px 0 ${colors.nav},
    1px 0px 0 ${colors.nav}, 2px 2px 0 ${colors.nav}, -2px 2px 0 ${colors.nav}, 2px -2px 0 ${colors.nav},
    -2px -2px 0 ${colors.nav}, 0px 2px 0 ${colors.nav}, 0px -2px 0 ${colors.nav}, -2px 0px 0 ${colors.nav},
    2px 0px 0 ${colors.nav}, 1px 2px 0 ${colors.nav}, -1px 2px 0 ${colors.nav}, 1px -2px 0 ${colors.nav},
    -1px -2px 0 ${colors.nav}, 2px 1px 0 ${colors.nav}, -2px 1px 0 ${colors.nav}, 2px -1px 0 ${colors.nav},
    -2px -1px 0 ${colors.nav}`,
    "@media (max-width: 1024px)": {
      fontSize: "4vh",
    },
  },
});

export default Name;
