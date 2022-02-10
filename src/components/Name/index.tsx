import { useTheme } from "@material-ui/core/styles";
import { Suspense, lazy } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/logo.svg";
import { DefaultTheme } from "@material-ui/styles";
import Loading from "../Loading/index";
import "./name.scss";
const VideoComponent = lazy(() => import("../video/index"));

const Name = () => {
  let colorTheme: any = useTheme();

  const { t } = useTranslation("global");

  const useStyles = makeStyles<DefaultTheme>({
    rootName: {
      display: "flex",
      width: "100%",
      height: "80vh",
      marginTop: "10vh",
      marginBottom: "15vh",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      "@media (max-width: 1024px)": {
        marginTop: "15vh",
        height: "100vh",
        marginBottom: "12vh",
      },
    },
    divFather: {
      display: "flex",
      width: "50%",
      flexDirection: "column",
      height: "fit-content",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2,
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
      width: "15vh",
      "@media (max-width: 1024px)": {
        width: "15vh",
      },
    },
    divSubname: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      zIndex: 2,
    },
  });

  const classes = useStyles({ colorTheme });

  return (
    <div id="name" className={classes.rootName}>
      <Suspense fallback={<Loading />}>
        <VideoComponent />
        <div className={classes.divFather}>
          <div className={classes.divSort}>
            <img src={Logo} alt="logo" className={classes.logo} />
          </div>
          <div className={classes.divSort}>
            <Typography variant="h1" className="title">
              Andrés Logares
            </Typography>
          </div>
        </div>
        <div className={classes.divSubname}>
          <Typography className="title">
            {t("name.full-stack-developer")}
          </Typography>
        </div>
      </Suspense>
    </div>
  );
};

export default Name;
