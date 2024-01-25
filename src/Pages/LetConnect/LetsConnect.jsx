import { useEffect } from "react";
import Footer from "../../Components/Footer";
import Contact from "./Components/Contact";
import Info from "./Components/Info";
import LandingContact from "./Components/LandingContact";

const LetsConnect = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <LandingContact />
      <Contact />
      <Info />
      <Footer />
    </div>
  );
};

export default LetsConnect;
