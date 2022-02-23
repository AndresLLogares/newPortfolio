import { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { DefaultTheme } from "@material-ui/styles";
import "./button.scss";
import { useGlobalState } from "../../hooks/useTheme";

const Experiences = (props: any) => {
  let colorTheme: any = useTheme();
  const [colors, setColors] = useState<any>(colorTheme);

  useEffect(() => {
    const changeColor = () => {
      setColors(colorTheme);
    };
    changeColor();
  }, [colorTheme]);

  const useStyles = makeStyles<DefaultTheme>({
    root: {
      display: "flex",
      width: "100%",
      height: "fit-content",
      alignItems: "center",
      justifyContent: "flex-start",
      flexDirection: "column",
      textAlign: "start",
      marginBottom: "5vh",
    },
    divFather: {
      display: "flex",
      width: "90%",
      height: "fit-content",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      flexDirection: "column",
      textAlign: "start",
    },
    company: {
      display: "flex",
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: "3vh",
      color: colors.palette.background.default,
      fontWeight: "bold",
      "@media (max-width: 1024px)": {
        fontSize: "2.5vh",
      },
    },
    separator: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      flexDirection: "column",
      width: "90%",
      marginLeft: "10vh",
      marginTop: "2vh",
      "@media (max-width: 1024px)": {
        marginLeft: "0vh",
      },
    },
    date: {
      display: "flex",
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: "2.5vh",
      color: colors.palette.primary.main,
      fontWeight: "bold",
      marginBottom: "1vh",
      "@media (max-width: 1024px)": {
        fontSize: "2vh",
      },
    },
    description: {
      display: "flex",
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: "2.5vh",
      marginBottom: "2vh",
      color: colors.palette.primary.main,
      fontWeight: "bold",
      "@media (max-width: 1024px)": {
        fontSize: "2.5vh",
      },
    },
  });
  const classes = useStyles();
  const [theme] = useGlobalState("theme");

  return (
    <div className={classes.root}>
      <div className={classes.divFather}>
        <a
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          href={props.link}
        >
          <button
            className={theme === "light" ? "buttonSocial" : "buttonSocialDark"}
            type="button"
          >
            <Typography className={classes.company}>{props.company}</Typography>
          </button>
        </a>
        <div className={classes.separator}>
          <Typography className={classes.date}>{props.date}</Typography>
          <Typography className={classes.date}>{props.position}</Typography>
          {props.details &&
            props.details.map((item: any, index: number) => (
              <Typography key={index} className={classes.description}>
                ⭔ {item}
              </Typography>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
