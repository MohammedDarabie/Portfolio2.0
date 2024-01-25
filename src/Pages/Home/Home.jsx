import Landing from "./Components/Landing";
import AboutMe from "./Components/AboutMe";
import WhyWorkWithMe from "./Components/WhyWorkWithMe";
import RecentWork from "./Components/RecentWork";
import LetWorkTogether from "./Components/LetWorkTogether";
import Footer from "../../Components/Footer";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Landing />
      <AboutMe />
      <WhyWorkWithMe />
      <RecentWork />
      <LetWorkTogether />
      <Footer />
    </div>
  );
};

export default Home;
