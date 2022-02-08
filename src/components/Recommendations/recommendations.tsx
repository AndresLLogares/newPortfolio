import { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { DefaultTheme } from "@material-ui/styles";
import { Typography, Box } from "@material-ui/core";
import { QuoteAltLeft } from "@styled-icons/boxicons-solid/QuoteAltLeft";
import { QuoteAltRight } from "@styled-icons/boxicons-solid/QuoteAltRight";

const RecommendationQuotes = (props: any) => {
  let colorTheme: any = useTheme();
  const [colors, setColors] = useState<any>(colorTheme);

  useEffect(() => {
    const changeColor = () => {
      setColors(colorTheme);
    };
    changeColor();
  }, [colorTheme]);

  const useStyles = makeStyles<DefaultTheme>({
    rootRecommendation: {
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
    name: {
      display: "flex",
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: "4vh",
      color: colors.palette.secondary.main,
      fontWeight: "bold",
    },
    separator: {
      display: "flex",
      width: "100%",
      height: "fit-content",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      textAlign: "start",
      marginTop: "5vh",
      "@media (max-width: 1024px)": {
        flexDirection: "column",
      },
    },
    divImage: {
      display: "flex",
      width: "20%",
      height: "fit-content",
      alignItems: "center",
      justifyContent: "center",
    },
    imageRecommended: {
      width: "10rem",
      height: "10rem",
      borderRadius: "100%",
      border: `5px solid`,
      borderColor: colors.palette.secondary.main,
    },
    divQuote: {
      display: "flex",
      width: "80%",
      height: "fit-content",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    divLeft: {
      display: "flex",
      width: "100",
      height: "fit-content",
      alignSelf: "flex-start",
      justifyContent: "flex-start",
    },
    divRight: {
      display: "flex",
      width: "100",
      height: "fit-content",
      alignSelf: "flex-end",
      justifyContent: "flex-start",
    },
    quote: {
      display: "flex",
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: "2.5vh",
      color: colors.palette.primary.main,
      fontWeight: "bold",
    },
    icons: {
      width: "2rem",
      height: "2rem",
      color: colors.palette.secondary.main,
    },
  });

  const classes = useStyles();

  return (
    <Box className={classes.rootRecommendation}>
      <div className={classes.divFather}>
        <Typography className={classes.name}>{props.name}</Typography>
        <div className={classes.separator}>
          <div className={classes.divImage}>
            <img
              src={props.image}
              alt="Carlos"
              className={classes.imageRecommended}
            />
          </div>
          <div className={classes.divQuote}>
            <div className={classes.divLeft}>
              <QuoteAltLeft className={classes.icons} />
            </div>
            <Typography className={classes.quote}>
              {props.recommendations}
            </Typography>
            <div className={classes.divRight}>
              <QuoteAltRight className={classes.icons} />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default RecommendationQuotes;
