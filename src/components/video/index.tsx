import { makeStyles } from "@material-ui/core/styles";
import { DefaultTheme } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import useWindowSize from "../utils/size";

const VideoComponent = () => {
  const { width } = useWindowSize();

  const useStyles = makeStyles<DefaultTheme>({
    root: {
      display: "flex",
      width: `${width}px`,
      height: "fit-content",
      alignItems: "center",
      justifyContent: "center",
    },
    video: {
      objectFit: "cover",
      width: "99vw",
      height: "90vh",
      position: "absolute",
      top: "0vh",
      "@media (max-width: 1024px)": {
        height: "120vh",
        width: "100vw",
      },
    },
  });
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <video className={classes.video} autoPlay loop muted>
        <source
          className={classes.source}
          src={
            "https://res.cloudinary.com/andreslogares/video/upload/v1643298478/y2mate.com_-_Abstract_White_Background_4K_Motion_Graphics_Background_Loop_White_Video_Loop_Part_3_1080p_fht2df.mp4"
          }
          type="video/mp4"
        />
      </video>
    </Box>
  );
};

export default VideoComponent;
