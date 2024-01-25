/* eslint-disable no-undef */
import instagram from "../assets/Footer/instagram.svg";
import linkedin from "../assets/Footer/linkedin.svg";
import twitter from "../assets/Footer/twitter.svg";
import whatsapp from "../assets/Footer/whatsapp.svg";
const Footer = () => {
  return (
    <div className="bg-custom_dark1 text-white">
      <div className="h-fit py-12 space-y-5">
        {/* Logo */}
        <div className="text-center">
          {/* <Link to={"/"} className="sectionH1"> */}
          <h1 className="sectionH1">Darabie</h1>
          {/* </Link> */}
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center space-x-10 lg:space-x-5">
          <a
            href="https://twitter.com/Mohammed_ihsan_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="My Twitter" className="w-12 lg:w-16" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-darabie-13603a232/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="My LinkedIn" className="w-12 lg:w-16" />
          </a>

          <a
            href="https://wa.me/+966552220151"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="My Twitter" className="w-12 lg:w-16" />
          </a>
          <a
            href="https://www.instagram.com/darabie3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="My Twitter" className="w-12 lg:w-16" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
