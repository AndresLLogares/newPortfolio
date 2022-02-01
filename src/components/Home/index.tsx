import Name from "../Name/index";
import AboutMe from "../Aboutme/index";
import Technologies from "../Technologies/index";
import ContactMe from "../Contactme/index";
import Recommendations from "../Recommendations/index";
import OctagonSecond from "../Octagons/second";
import OctagonFirst from "../Octagons/first";
import OctagonThird from "../Octagons/third";

const Home = () => (
  <>
    <OctagonFirst />
    <OctagonSecond />
    <OctagonThird />
    <Name />
    <AboutMe />
    <Technologies />
    <Recommendations />
    <ContactMe />
  </>
);

export default Home;
