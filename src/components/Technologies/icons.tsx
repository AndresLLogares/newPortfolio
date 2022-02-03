import { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
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
      width: "6rem",
      height: "6rem",
      color: colors.palette.secondary.main,
      "@media (max-width: 1024px)": {
        width: "4.5rem",
        height: "4.5rem",
      },
    },
    mas: {
      position: "absolute",
      textAlign: "center",
      width: "101%",
      marginTop: "2rem",
      overflow: "hidden",
      "@media (max-width: 1024px)": {
        fontSize: "2.5vh",
      },
    },
  });

  const classes = useStyles();
  const [theme] = useGlobalState("theme");

  return (
    <div className={classes.root}>
      <div
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
      >
        <span className={classes.mas}>
          <LogoReact className={classes.icons} />
        </span>
        <button type="button" name="Hover">
          React
        </button>
      </div>
      <div
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
      >
        <span className={classes.mas}>
          <Javascript className={classes.icons} />
        </span>
        <button type="button" name="Hover">
          Javascript
        </button>
      </div>
      <div
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
      >
        <span className={classes.mas}>
          <Express className={classes.icons} />
        </span>
        <button type="button" name="Hover">
          Express
        </button>
      </div>
      <div
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
      >
        <span className={classes.mas}>
          <Sequelize className={classes.icons} />
        </span>
        <button type="button" name="Hover">
          Sequelize
        </button>
      </div>
      <div
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
      >
        <span className={classes.mas}>
          <Redux className={classes.icons} />
        </span>
        <button type="button" name="Hover">
          Redux
        </button>
      </div>
      <div
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
      >
        <span className={classes.mas}>
          <Html5 className={classes.icons} />
        </span>
        <button type="button" name="Hover">
          HTML
        </button>
      </div>
      <div
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
      >
        <span className={classes.mas}>
          <Css3 className={classes.icons} />
        </span>
        <button type="button" name="Hover">
          CSS
        </button>
      </div>
      <div
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
      >
        <span className={classes.mas}>
          <Graphql className={classes.icons} />
        </span>
        <button type="button" name="Hover">
          GraphQl
        </button>
      </div>
      <div
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
      >
        <span className={classes.mas}>
          <Apollographql className={classes.icons} />
        </span>
        <button type="button" name="Hover">
          Apollo
        </button>
      </div>
      <div
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
      >
        <span className={classes.mas}>
          <Mongodb className={classes.icons} />
        </span>
        <button type="button" name="Hover">
          MongoDB
        </button>
      </div>
      <div
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
      >
        <span className={classes.mas}>
          <Nodejs className={classes.icons} />
        </span>
        <button type="button" name="Hover">
          Node
        </button>
      </div>
      <div
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
      >
        <span className={classes.mas}>
          <Scrumalliance className={classes.icons} />
        </span>
        <button type="button" name="Hover">
          Scrum
        </button>
      </div>
      <div
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
      >
        <span className={classes.mas}>
          <Nextdotjs className={classes.icons} />
        </span>
        <button type="button" name="Hover">
          Next.js
        </button>
      </div>
      <div
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
      >
        <span className={classes.mas}>
          <Typescript className={classes.icons} />
        </span>
        <button type="button" name="Hover">
          Typescript
        </button>
      </div>
      <div
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
      >
        <span className={classes.mas}>
          <Ethereum className={classes.icons} />
        </span>
        <button type="button" name="Hover">
          Ethereum
        </button>
      </div>
      <div
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
      >
        <span className={classes.mas}>
          <Gatsby className={classes.icons} />
        </span>
        <button type="button" name="Hover">
          Gatsby
        </button>
      </div>
      <div
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
      >
        <span className={classes.mas}>
          <Blockchaindotcom className={classes.icons} />
        </span>
        <button type="button" name="Hover">
          Blockchain
        </button>
      </div>
      <div
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
      >
        <span className={classes.mas}>
          <Materialui className={classes.icons} />
        </span>
        <button type="button" name="Hover">
          Material UI
        </button>
      </div>
      <div
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
      >
        <span className={classes.mas}>
          <HardHat className={classes.icons} />
        </span>
        <button type="button" name="Hover">
          HardHat
        </button>
      </div>
      <div
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
      >
        <span className={classes.mas}>
          <Solidity className={classes.icons} />
        </span>
        <button type="button" name="Hover">
          Solidity
        </button>
      </div>
      <div
        className={
          theme === "light" ? "buttonContainer" : "buttonContainerDark"
        }
      >
        <span className={classes.mas}>
          <LogoDocker className={classes.icons} />
        </span>
        <button type="button" name="Hover">
          Docker
        </button>
      </div>
    </div>
  );
};

export default Icons;
