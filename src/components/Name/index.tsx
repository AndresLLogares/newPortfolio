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
      marginTop: "15vh",
      marginBottom: "15vh",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      "@media (max-width: 1024px)": {
        marginTop: "25vh",
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
      animation:
        "$tilt-in-top-1 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
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
      animation:
        "$tilt-in-top-1 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
    },
    "@keyframes tilt-in-top-1": {
      "0%": {
        transform: "rotateY(30deg) translateY(-300px) skewY(-30deg)",
        opacity: 0,
      },
      "100%": {
        transform: "rotateY(0deg) translateY(0) skewY(0deg)",
        opacity: 1,
      },
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
            <Typography className="title">Andrés </Typography>
            <Typography className="title">Logares </Typography>
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
