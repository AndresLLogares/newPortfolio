import { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { LogoReact } from "@styled-icons/ionicons-solid/LogoReact";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Redux } from "@styled-icons/simple-icons/Redux";
import { Express } from "@styled-icons/simple-icons/Express";
import { Sequelize } from "@styled-icons/simple-icons/Sequelize";
import { Apollographql } from "@styled-icons/simple-icons/Apollographql";
import { Graphql } from "@styled-icons/simple-icons/Graphql";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { Scrumalliance } from "@styled-icons/simple-icons/Scrumalliance";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { Ethereum } from "@styled-icons/fa-brands/Ethereum";
import { Gatsby } from "@styled-icons/remix-fill/Gatsby";
import { Blockchaindotcom } from "@styled-icons/simple-icons/Blockchaindotcom";
import { Materialui } from "@styled-icons/simple-icons/Materialui";
import { HardHat } from "@styled-icons/fa-solid/HardHat";
import { Solidity } from "@styled-icons/simple-icons/Solidity";
import { useGlobalState } from "../../hooks/useTheme";
import { DefaultTheme } from "@material-ui/styles";
import { LogoDocker } from "@styled-icons/ionicons-solid/LogoDocker";
import "./icon.scss";

const Icons = () => {
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
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      width: "95%",
      "@media (max-width: 1024px)": {
        width: "100%",
        justifyContent: "center",
      },
    },
    icons: {
      width: "4rem",
      height: "4rem",
      color: colors.palette.secondary.main,
      "@media (max-width: 1024px)": {
        width: "3rem",
        height: "3rem",
      },
    },
    text: {
      display: "flex",
      fontFamily: ["Poppins", "sans-serif"].join(","),
      zIndex: 2,
      textTransform: "none",
      fontSize: "2.5vh",
      fontWeight: "bold",
      color: colors.palette.secondary.main,
      "@media (max-width: 1024px)": {
        fontSize: "2vh",
      },
    },
  });

  const classes = useStyles();
  const [theme] = useGlobalState("theme");

  return (
    <div className={classes.root}>
      <button
        className={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <LogoReact className={classes.icons} />
        <Typography className={classes.text}>React</Typography>
      </button>
      <button
        className={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <Javascript className={classes.icons} />
        <Typography className={classes.text}>Javascript</Typography>
      </button>
      <button
        className={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <Redux className={classes.icons} />
        <Typography className={classes.text}>Redux</Typography>
      </button>
      <button
        className={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <Express className={classes.icons} />
        <Typography className={classes.text}>Express</Typography>
      </button>
      <button
        className={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <Sequelize className={classes.icons} />
        <Typography className={classes.text}>Sequelize</Typography>
      </button>
      <button
        className={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <Apollographql className={classes.icons} />
        <Typography className={classes.text}>Apollo</Typography>
      </button>
      <button
        className={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <Graphql className={classes.icons} />
        <Typography className={classes.text}>Graphql</Typography>
      </button>
      <button
        className={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <Html5 className={classes.icons} />
        <Typography className={classes.text}>Html</Typography>
      </button>
      <button
        className={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <Css3 className={classes.icons} />
        <Typography className={classes.text}>CSS</Typography>
      </button>
      <button
        className={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <Mongodb className={classes.icons} />
        <Typography className={classes.text}>Mongo</Typography>
      </button>
      <button
        className={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <Nodejs className={classes.icons} />
        <Typography className={classes.text}>Node</Typography>
      </button>
      <button
        className={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <Scrumalliance className={classes.icons} />
        <Typography className={classes.text}>Scrum</Typography>
      </button>
      <button
        className={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <Nextdotjs className={classes.icons} />
        <Typography className={classes.text}>Next</Typography>
      </button>
      <button
        className={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <Typescript className={classes.icons} />
        <Typography className={classes.text}>Typescript</Typography>
      </button>
      <button
        className={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <Ethereum className={classes.icons} />
        <Typography className={classes.text}>Ethereum</Typography>
      </button>
      <button
        className={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <Gatsby className={classes.icons} />
        <Typography className={classes.text}>Gatsby</Typography>
      </button>
      <button
        className={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <Blockchaindotcom className={classes.icons} />
        <Typography className={classes.text}>Blockchain</Typography>
      </button>
      <button
        className={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <Materialui className={classes.icons} />
        <Typography className={classes.text}>MaterialUI</Typography>
      </button>
      <button
        className={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <HardHat className={classes.icons} />
        <Typography className={classes.text}>HardHat</Typography>
      </button>
      <button
        className={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <Solidity className={classes.icons} />
        <Typography className={classes.text}>Solidity</Typography>
      </button>
      <button
        className={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <LogoReact className={classes.icons} />
        <Typography className={classes.text}>React</Typography>
      </button>
      <button
        className={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <LogoDocker className={classes.icons} />
        <Typography className={classes.text}>Docker</Typography>
      </button>
    </div>
  );
};

export default Icons;
