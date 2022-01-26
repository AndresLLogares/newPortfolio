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
import { colors } from "../../styles/colors";
import { useGlobalState } from "../../hooks/useTheme";
import { DefaultTheme } from "@material-ui/styles";
import "./icon.scss";

const Icons = () => {
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
          <LogoReact
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
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
          <Javascript
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
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
          <Express
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
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
          <Sequelize
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
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
          <Redux
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
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
          <Html5
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
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
          <Css3
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
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
          <Graphql
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
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
          <Apollographql
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
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
          <Mongodb
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
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
          <Nodejs
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
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
          <Scrumalliance
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
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
          <Nextdotjs
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
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
          <Typescript
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
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
          <Ethereum
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
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
          <Gatsby
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
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
          <Blockchaindotcom
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
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
          <Materialui
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
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
          <HardHat
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
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
          <Solidity
            className={theme === "light" ? classes.icons : classes.iconsDark}
          />
        </span>
        <button type="button" name="Hover">
          Solidity
        </button>
      </div>
    </div>
  );
};

const useStyles = makeStyles<DefaultTheme>({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "95%",
    marginTop: "2%",
    marginBottom: "5%",
    "@media (max-width: 1024px)": {
      width: "100%",
      justifyContent: "center",
    },
  },
  icons: {
    width: "6vh",
    height: "6vh",
    color: colors.blue,
  },
  iconsDark: {
    width: "6vh",
    height: "6vh",
    color: colors.pink,
  },
  mas: {
    position: "absolute",
    color: colors.black,
    textAlign: "center",
    width: "101%",
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontWeight: "bold",
    fontSize: "3vh",
    marginTop: "0.6rem",
    overflow: "hidden",
  },
});

export default Icons;
