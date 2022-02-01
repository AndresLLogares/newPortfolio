import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Subtitle from "../Subtitles/index";
import { DefaultTheme } from "@material-ui/styles";
import Image from "../../assets/about.webp";
import { useTheme } from "@material-ui/core/styles";
import Octagon from "../Octagons/first";

const AboutMe = () => {
  let colorTheme: any = useTheme();
  colorTheme = colorTheme.palette.primary.main;
  const classes = useStyles({ colorTheme });
  const { t } = useTranslation("global");

  return (
    <div id="aboutme" className={classes.rootAboutMe}>
      {/*     <Octagon /> */}
      <Subtitle title={t("titles.about-me")} />
      <div className={classes.divFather}>
        <div className={classes.divChildren}>
          <img src={Image} alt="about" className={classes.image} />
        </div>{" "}
        <div className={classes.divSub}>
          <Typography
            style={{ color: colorTheme }}
            className={classes.subtitle}
          >
            {t("About.first")}
          </Typography>
          <Typography
            style={{ color: colorTheme }}
            className={classes.subtitle}
          >
            {t("About.second")}
          </Typography>
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles<DefaultTheme>(() => ({
  rootAboutMe: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "95%",
    flexDirection: "column",
    marginBottom: "7vh",
  },
  divFather: {
    display: "flex",
    width: "100%",
    height: "fit-content",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "start",
    zIndex: 1,
    "@media (max-width: 1600px)": {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
  },
  divChildren: {
    display: "flex",
    width: "40%",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "start",
    "@media (max-width: 1600px)": {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      width: "95%",
    },
  },
  divSub: {
    display: "flex",
    width: "60%",
    height: "fit-content",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    textAlign: "start",
    "@media (max-width: 1600px)": {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      width: "95%",
      marginTop: "5vh",
    },
  },
  image: {
    width: "500px",
    borderRadius: "10px 10px 10px 10px",
    "@media (max-width: 1024px)": {
      width: "80%",
    },
  },
  subtitle: {
    fontSize: "2.5vh",
    fontWeight: "bold",
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
}));

export default AboutMe;
