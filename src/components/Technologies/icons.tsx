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
import { Zoom } from "react-awesome-reveal";
import useWindowSize from "../utils/size";

const Icons = () => {
  let colorTheme: any = useTheme();
  const [colors, setColors] = useState<any>(colorTheme);
  const { width } = useWindowSize();

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
    Zoom: {
      display: "flex",
      width: "fit-content",
    },
  });

  const classes = useStyles();
  const [theme] = useGlobalState("theme");

  return (
    <div className={classes.root}>
      <Zoom
        direction="right"
        cascade={true}
        className={classes.Zoom}
        triggerOnce={true}
        childClassName={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <button>
          <LogoReact className={classes.icons} />
          <Typography className={classes.text}>React</Typography>
        </button>
      </Zoom>
      <Zoom
        direction="right"
        cascade={true}
        triggerOnce={true}
        className={classes.Zoom}
        delay={width > 1200 ? 200 : 0}
        childClassName={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <button>
          <Javascript className={classes.icons} />
          <Typography className={classes.text}>Javascript</Typography>
        </button>
      </Zoom>
      <Zoom
        direction="right"
        cascade={true}
        triggerOnce={true}
        className={classes.Zoom}
        delay={width > 1200 ? 300 : 0}
        childClassName={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <button>
          <Redux className={classes.icons} />
          <Typography className={classes.text}>Redux</Typography>
        </button>
      </Zoom>
      <Zoom
        direction="right"
        cascade={true}
        triggerOnce={true}
        className={classes.Zoom}
        delay={width > 1200 ? 400 : 0}
        childClassName={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <button>
          <Express className={classes.icons} />
          <Typography className={classes.text}>Express</Typography>
        </button>
      </Zoom>
      <Zoom
        direction="right"
        cascade={true}
        triggerOnce={true}
        delay={width > 1200 ? 500 : 0}
        className={classes.Zoom}
        childClassName={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <button>
          <Sequelize className={classes.icons} />
          <Typography className={classes.text}>Sequelize</Typography>
        </button>
      </Zoom>
      <Zoom
        direction="right"
        cascade={true}
        triggerOnce={true}
        className={classes.Zoom}
        delay={width > 1200 ? 600 : 0}
        childClassName={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <button
          className={
            theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
          }
        >
          <Apollographql className={classes.icons} />
          <Typography className={classes.text}>Apollo</Typography>
        </button>
      </Zoom>
      <Zoom
        direction="right"
        cascade={true}
        triggerOnce={true}
        className={classes.Zoom}
        delay={width > 1200 ? 700 : 0}
        childClassName={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <button>
          <Graphql className={classes.icons} />
          <Typography className={classes.text}>Graphql</Typography>
        </button>
      </Zoom>
      <Zoom
        direction="right"
        cascade={true}
        triggerOnce={true}
        className={classes.Zoom}
        delay={width > 1200 ? 800 : 0}
        childClassName={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <button
          className={
            theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
          }
        >
          <Html5 className={classes.icons} />
          <Typography className={classes.text}>Html</Typography>
        </button>
      </Zoom>
      <Zoom
        direction="right"
        cascade={true}
        triggerOnce={true}
        className={classes.Zoom}
        delay={width > 1200 ? 900 : 0}
        childClassName={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <button>
          <Css3 className={classes.icons} />
          <Typography className={classes.text}>CSS</Typography>
        </button>
      </Zoom>
      <Zoom
        direction="right"
        cascade={true}
        triggerOnce={true}
        className={classes.Zoom}
        delay={width > 1200 ? 1000 : 0}
        childClassName={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <button>
          <Mongodb className={classes.icons} />
          <Typography className={classes.text}>Mongo</Typography>
        </button>
      </Zoom>
      <Zoom
        direction="right"
        cascade={true}
        triggerOnce={true}
        className={classes.Zoom}
        delay={width > 1200 ? 1100 : 0}
        childClassName={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <button>
          <Nodejs className={classes.icons} />
          <Typography className={classes.text}>Node</Typography>
        </button>
      </Zoom>
      <Zoom
        direction="right"
        cascade={true}
        triggerOnce={true}
        className={classes.Zoom}
        delay={width > 1200 ? 1200 : 0}
        childClassName={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <button>
          <Scrumalliance className={classes.icons} />
          <Typography className={classes.text}>Scrum</Typography>
        </button>
      </Zoom>
      <Zoom
        direction="right"
        cascade={true}
        triggerOnce={true}
        className={classes.Zoom}
        delay={width > 1200 ? 1300 : 0}
        childClassName={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <button>
          <Nextdotjs className={classes.icons} />
          <Typography className={classes.text}>Next</Typography>
        </button>
      </Zoom>
      <Zoom
        direction="right"
        cascade={true}
        triggerOnce={true}
        className={classes.Zoom}
        delay={width > 1200 ? 1400 : 0}
        childClassName={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <button>
          <Typescript className={classes.icons} />
          <Typography className={classes.text}>Typescript</Typography>
        </button>
      </Zoom>
      <Zoom
        direction="right"
        cascade={true}
        triggerOnce={true}
        className={classes.Zoom}
        delay={width > 1200 ? 1500 : 0}
        childClassName={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <button>
          <Ethereum className={classes.icons} />
          <Typography className={classes.text}>Ethereum</Typography>
        </button>
      </Zoom>
      <Zoom
        direction="right"
        cascade={true}
        triggerOnce={true}
        className={classes.Zoom}
        delay={width > 1200 ? 1600 : 0}
        childClassName={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <button>
          <Gatsby className={classes.icons} />
          <Typography className={classes.text}>Gatsby</Typography>
        </button>
      </Zoom>
      <Zoom
        direction="right"
        cascade={true}
        triggerOnce={true}
        className={classes.Zoom}
        delay={width > 1200 ? 1700 : 0}
        childClassName={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <button>
          <Blockchaindotcom className={classes.icons} />
          <Typography className={classes.text}>Blockchain</Typography>
        </button>
      </Zoom>
      <Zoom
        direction="right"
        cascade={true}
        triggerOnce={true}
        className={classes.Zoom}
        delay={width > 1200 ? 1800 : 0}
        childClassName={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <button>
          <Materialui className={classes.icons} />
          <Typography className={classes.text}>MaterialUI</Typography>
        </button>
      </Zoom>
      <Zoom
        direction="right"
        cascade={true}
        triggerOnce={true}
        className={classes.Zoom}
        delay={width > 1200 ? 1900 : 0}
        childClassName={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <button>
          <HardHat className={classes.icons} />
          <Typography className={classes.text}>HardHat</Typography>
        </button>
      </Zoom>
      <Zoom
        direction="right"
        cascade={true}
        triggerOnce={true}
        className={classes.Zoom}
        delay={width > 1200 ? 2000 : 0}
        childClassName={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <button>
          <Solidity className={classes.icons} />
          <Typography className={classes.text}>Solidity</Typography>
        </button>
      </Zoom>
      <Zoom
        direction="right"
        cascade={true}
        triggerOnce={true}
        className={classes.Zoom}
        delay={width > 1200 ? 2100 : 0}
        childClassName={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <button>
          <LogoReact className={classes.icons} />
          <Typography className={classes.text}>React</Typography>
        </button>
      </Zoom>
      <Zoom
        direction="right"
        cascade={true}
        triggerOnce={true}
        className={classes.Zoom}
        delay={width > 1200 ? 2200 : 0}
        childClassName={
          theme === "light" ? "buttonTechnologies" : "buttonTechnologiesDark"
        }
      >
        <button>
          <LogoDocker className={classes.icons} />
          <Typography className={classes.text}>Docker</Typography>
        </button>
      </Zoom>
    </div>
  );
};

export default Icons;
