import * as React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Spain from "../../assets/spain.webp";
import English from "../../assets/english.webp";
import { DefaultTheme } from "@material-ui/styles";

const ButtonLanguages = () => {
  const classes = useStyles();

  const { i18n } = useTranslation("global");

  const [selected, setSelected] = useState(English);

  const changeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("es");
      setSelected(Spain);
    } else {
      i18n.changeLanguage("en");
      setSelected(English);
    }
  };

  return (
    <button
      type="button"
      className={classes.buttonTranslate}
      onClick={() => changeLanguage()}
    >
      <img src={selected} alt="spanish" className={classes.imageTranslate} />
    </button>
  );
};

const useStyles = makeStyles<DefaultTheme>({
  buttonTranslate: {
    width: "9rem",
    height: "4rem",
    borderRadius: "10px 10px 10px 10px",
    backgroundColor: "transparent",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    "&:hover": {
      cursor: "pointer",
    },
    "@media (max-width: 1200px)": {
      margin: 0,
      height: "4.5rem",
      marginTop: "1rem",
      marginBottom: "1rem",
      width: "13rem",
    },
  },
  imageTranslate: {
    borderRadius: "10px 10px 10px 10px",
    width: "100%",
    height: "100%",
  },
});

export default ButtonLanguages;
