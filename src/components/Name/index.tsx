import { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import { Suspense, lazy } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/logo.svg";
import { DefaultTheme } from "@material-ui/styles";
import Loading from "../Loading/index";
import { colors as colorsAux } from "../../styles/colors";
const VideoComponent = lazy(() => import("../video/index"));

const Name = () => {
  let colorTheme: any = useTheme();
  const [colors, setColors] = useState<any>(colorTheme);

  useEffect(() => {
    const changeColor = () => {
      setColors(colorTheme);
    };
    changeColor();
  }, [colorTheme]);

  const { t } = useTranslation("global");

  const useStyles = makeStyles<DefaultTheme>({
    rootName: {
      display: "flex",
      width: "100%",
      height: "80vh",
      marginTop: "10vh",
      marginBottom: "7vh",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
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
      width: "20vh",
      borderRadius: "10% 10% 10% 10%",
      "@media (max-width: 1024px)": {
        width: "15vh",
      },
    },
    name: {
      fontSize: "8vh",
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      textTransform: "uppercase",
      fontWeight: "bold",
      color: "##231b1b",
      textShadow: `1px 1px ${colorsAux.nav}, -1px 1px 0 ${colorsAux.nav}, 1px -1px 0 ${colorsAux.nav},
      -1px -1px 0 ${colorsAux.nav}, 0px 1px 0 ${colorsAux.nav}, 0px -1px 0 ${colorsAux.nav}, -1px 0px 0 ${colorsAux.nav},
      1px 0px 0 ${colorsAux.nav}, 2px 2px 0 ${colorsAux.nav}, -2px 2px 0 ${colorsAux.nav}, 2px -2px 0 ${colorsAux.nav},
      -2px -2px 0 ${colorsAux.nav}, 0px 2px 0 ${colorsAux.nav}, 0px -2px 0 ${colorsAux.nav}, -2px 0px 0 ${colorsAux.nav},
      2px 0px 0 ${colorsAux.nav}, 1px 2px 0 ${colorsAux.nav}, -1px 2px 0 ${colorsAux.nav}, 1px -2px 0 ${colorsAux.nav},
      -1px -2px 0 ${colorsAux.nav}, 2px 1px 0 ${colorsAux.nav}, -2px 1px 0 ${colorsAux.nav}, 2px -1px 0 ${colorsAux.nav},
      -2px -1px 0 ${colorsAux.nav}`,
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
      zIndex: 2,
    },
    subtitle: {
      fontSize: "6vh",
      fontFamily: ["Ultra", "serif"].join(","),
      textTransform: "uppercase",
      fontWeight: 500,
      color: "##231b1b",
      textShadow: `1px 1px ${colorsAux.nav}, -1px 1px 0 ${colorsAux.nav}, 1px -1px 0 ${colorsAux.nav},
      -1px -1px 0 ${colorsAux.nav}, 0px 1px 0 ${colorsAux.nav}, 0px -1px 0 ${colorsAux.nav}, -1px 0px 0 ${colorsAux.nav},
      1px 0px 0 ${colorsAux.nav}, 2px 2px 0 ${colorsAux.nav}, -2px 2px 0 ${colorsAux.nav}, 2px -2px 0 ${colorsAux.nav},
      -2px -2px 0 ${colorsAux.nav}, 0px 2px 0 ${colorsAux.nav}, 0px -2px 0 ${colorsAux.nav}, -2px 0px 0 ${colorsAux.nav},
      2px 0px 0 ${colorsAux.nav}, 1px 2px 0 ${colorsAux.nav}, -1px 2px 0 ${colorsAux.nav}, 1px -2px 0 ${colorsAux.nav},
      -1px -2px 0 ${colorsAux.nav}, 2px 1px 0 ${colorsAux.nav}, -2px 1px 0 ${colorsAux.nav}, 2px -1px 0 ${colorsAux.nav},
      -2px -1px 0 ${colorsAux.nav}`,
      "@media (max-width: 1024px)": {
        fontSize: "4vh",
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

export default Name;
