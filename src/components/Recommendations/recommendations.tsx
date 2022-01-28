import { makeStyles } from "@material-ui/core/styles";
import { DefaultTheme } from "@material-ui/styles";
import { Typography, Box } from "@material-ui/core";
import { colors } from "../../styles/colors";
import { QuoteAltLeft } from "@styled-icons/boxicons-solid/QuoteAltLeft";
import { QuoteAltRight } from "@styled-icons/boxicons-solid/QuoteAltRight";
import { useGlobalState } from "../../hooks/useTheme";

const RecommendationQuotes = (props: any) => {
  const classes = useStyles();
  const [theme] = useGlobalState("theme");

  return (
    <Box className={classes.rootRecommendation}>
      <div className={classes.divFather}>
        <Typography
          className={theme === "light" ? classes.name : classes.nameDark}
        >
          {props.name}
        </Typography>
        <div className={classes.separator}>
          <div className={classes.divImage}>
            <img
              src={props.image}
              alt="Carlos"
              className={
                theme === "light"
                  ? classes.imageRecommended
                  : classes.imageRecommendedDark
              }
            />
          </div>
          <div className={classes.divQuote}>
            <div className={classes.divLeft}>
              <QuoteAltLeft
                className={
                  theme === "light" ? classes.icons : classes.iconsDark
                }
              />
            </div>
            <Typography
              className={theme === "light" ? classes.quote : classes.quoteDark}
            >
              {props.recommendations}
            </Typography>
            <div className={classes.divRight}>
              <QuoteAltRight
                className={
                  theme === "light" ? classes.icons : classes.iconsDark
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

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
    color: colors.blue,
    fontWeight: "bold",
  },
  nameDark: {
    display: "flex",
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontSize: "4vh",
    color: colors.pink,
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
    border: `5px solid ${colors.blue}`,
  },
  imageRecommendedDark: {
    width: "10rem",
    height: "10rem",
    borderRadius: "100%",
    border: `5px solid ${colors.pink}`,
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
    fontSize: "2vh",
    color: colors.black,
    fontWeight: "bold",
  },
  quoteDark: {
    display: "flex",
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontSize: "2vh",
    color: colors.nav,
    fontWeight: "bold",
  },
  icons: {
    width: "2rem",
    height: "2rem",
    color: colors.blue,
  },
  iconsDark: {
    width: "2rem",
    height: "2rem",
    color: colors.pink,
  },
});

export default RecommendationQuotes;
