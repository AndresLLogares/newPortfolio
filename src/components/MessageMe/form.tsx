import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { DefaultTheme } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import { send } from "emailjs-com";
import { FormControl, TextField, Typography } from "@material-ui/core";
import "../Experience/button.scss";
import { useGlobalState } from "../../hooks/useTheme";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [information, setInformation] = useState<any>({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [data, setData] = useState({
    user_id: "",
    service_id: "",
    template_id: "",
  });

  const [theme] = useGlobalState("theme");

  const { t } = useTranslation("global");

  let colorTheme: any = useTheme();

  const [colors, setColors] = useState<any>(colorTheme);

  useEffect(() => {
    const changeColor = () => {
      setColors(colorTheme);
    };
    const fetchData = async () => {
      const result = {
        user_id: process.env.REACT_APP_USER_ID as string,
        service_id: process.env.REACT_APP_SERVICE_ID as string,
        template_id: process.env.REACT_APP_TEMPLATE_ID as string,
      };
      setData(result);
    };
    fetchData();
    changeColor();
  }, [colorTheme]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInformation({
      ...information,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await send(data.service_id, data.template_id, information, data.user_id)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Your message has been sent!");
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    setInformation({
      user_name: "",
      user_email: "",
      message: "",
      user_phone: "",
      user_subject: "",
    });
  };

  const useStyles = makeStyles<DefaultTheme>({
    rootForm: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      paddingTop: "2rem",
      height: "fit-content",
      flexDirection: "column",
    },
    form: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      height: "fit-content",
    },
    firstForm: {
      display: "flex",
      flexDirection: "row",
      width: "60%",
      alignItems: "center",
      justifyContent: "space-around",
      height: "fit-content",
      marginBottom: "2rem",
      "@media (max-width: 1024px)": {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0",
      },
    },
    eachInput: {
      display: "flex",
      width: "100%",
      margin: "1rem",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      height: "fit-content",
      "@media (max-width: 1024px)": {
        margin: "0",
        alignSelf: "center",
        marginBottom: "1rem",
        marginTop: "1rem",
      },
    },
    input: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      height: "fit-content",
      backgroundColor: colors.palette.background.default,
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: "3vh",
      borderRadius: "5px",
      width: "20rem",
      "@media (max-width: 1024px)": {
        width: "100%",
        marginLeft: "10%",
      },
      "& div": {
        display: "flex",
        width: "20rem",
        color: colors.palette.primary.main,
        fontSize: "2vh",
        fontFamily: ["Poppins", "sans-serif"].join(","),
        "@media (max-width: 1024px)": {
          width: "90%",
        },
        "& .MuiFilledInput-root": {
          backgroundColor: colors.palette.background.default,
        },
        "& label ": {
          fontSize: "2vh",
          color: colors.palette.primary.main,
          fontFamily: ["Poppins", "sans-serif"].join(","),
          fontWeight: "bold",
          borderColor: colors.palette.common.main,
        },
        "& label.Mui-focused": {
          fontSize: "3vh",
          width: "100%",
          top: "-1rem",
          color: colors.palette.primary.main,
          fontWeight: "bold",
        },
        "$ label.Mui-filled": {
          top: "-1rem",
        },
      },
    },
    textarea: {
      display: "flex",
      width: "25rem",
      height: "10rem",
      backgroundColor: colors.palette.background.default,
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: "3vh",
      borderRadius: "5px",
      color: colors.palette.primary.main,
      alignItems: "flex-start",
      justifyContent: "flex-start",
      "@media (max-width: 1024px)": {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "10%",
      },
      "& div": {
        width: "25rem",
        height: "10rem",
        color: colors.palette.primary.main,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        fontSize: "2vh",
        fontFamily: ["Poppins", "sans-serif"].join(","),
        "@media (max-width: 1024px)": {
          width: "90%",
        },
        "& .MuiFilledInput-root": {
          backgroundColor: colors.palette.background.default,
        },
        "& label ": {
          fontSize: "2vh",
          color: colors.palette.primary.main,
          fontFamily: ["Poppins", "sans-serif"].join(","),
          fontWeight: "bold",
          borderColor: colors.palette.common.main,
        },
        "& label.Mui-focused": {
          top: "-1rem",
          fontSize: "3vh",
          color: colors.palette.primary.main,
          fontWeight: "bold",
        },
        "$ MuiFilledLabel-root": {
          top: "-1rem",
        },
      },
    },
    cssOutlinedInput: {
      "&$cssFocused $notchedOutline": {
        borderRadius: "5px",
        borderWidth: "5px",
        borderColor: `${colors.palette.secondary.main} !important`,
      },
    },
    cssFocused: {},
    notchedOutline: {
      borderRadius: "5px",
      borderWidth: "5px",
      borderColor: `${colors.palette.secondary.main} !important`,
    },
    divButton: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "2rem",
      marginBottom: "2rem",
    },
    text: {
      display: "flex",
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: "3vh",
      color: colors.palette.background.default,
      fontWeight: "bold",
      "@media (max-width: 1024px)": {
        fontSize: "2.5vh",
      },
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.rootForm}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.firstForm}>
          <div className={classes.eachInput}>
            <FormControl variant="outlined" className={classes.input}>
              <TextField
                label={t("label.name")}
                variant="outlined"
                type="text"
                autoComplete="off"
                id="name"
                onChange={handleChange}
                name="user_name"
                value={information.user_name}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
                placeholder="John Doe"
                required
              />
            </FormControl>
          </div>
          <div className={classes.eachInput}>
            <FormControl variant="outlined" className={classes.input}>
              <TextField
                type="email"
                id="email"
                label={t("label.email")}
                autoComplete="off"
                value={information.user_email}
                variant="outlined"
                onChange={handleChange}
                name="user_email"
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
                placeholder="name@email.com"
                required
              />
            </FormControl>
          </div>
        </div>
        <div className={classes.eachInput}>
          <FormControl variant="outlined" className={classes.textarea}>
            <TextField
              id="message"
              name="message"
              label={t("label.message")}
              autoComplete="off"
              variant="outlined"
              value={information.message}
              onChange={handleChange}
              placeholder={t("label.placeholder")}
              required
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
              multiline
              maxRows={5}
            />
          </FormControl>
        </div>
        <div className={classes.divButton}>
          <button
            className={theme === "light" ? "buttonForm" : "buttonFormDark"}
            type="submit"
          >
            <Typography className={classes.text}>{t("label.send")}</Typography>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
