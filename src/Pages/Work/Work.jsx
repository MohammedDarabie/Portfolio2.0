import LandingWork from "./Components/Landing";
import LetsWorkTogetherWork from "./Components/LetsWorkTogetherWork";
import RecentWork from "./Components/RecentWorking";
import Footer from "../../Components/Footer";
import { useEffect } from "react";
const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <LandingWork />
      <RecentWork />
      <LetsWorkTogetherWork />
      <Footer />
    </div>
  );
};

export default Work;
