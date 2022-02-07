import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { makeStyles } from "@material-ui/core/styles";
import { DefaultTheme } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const Footer = () => {
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
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.palette.background.default,
      borderTop: "5px solid",
      borderTopColor: colors.palette.secondary.main,
      zIndex: 2,
      marginTop: "5vh",
      transition: "background-color 1s ease",
    },
    slide: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
      flexDirection: "column",
    },
    footer: {
      display: "flex",
      width: "100%",
      height: "fit-content",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "5vh",
      marginBottom: "5vh",
    },
    image: {
      width: "4rem",
      height: "1rem",
    },
    text: {
      fontSize: "2vh",
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontWeight: "bold",
      color: colors.palette.primary.main,
      "@media (max-width: 1024px)": {
        fontSize: "1.5vh",
      },
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slide direction="left" triggerOnce={true} className={classes.slide}>
        <div className={classes.footer}>
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >
            <Typography className={classes.text}>
              © 2022 Andres Luis Logares. All rights reserved
            </Typography>
          </a>
        </div>
      </Slide>
    </div>
  );
};

export default Footer;
