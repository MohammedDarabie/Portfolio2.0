import menu from "../../../assets/Landing/menu.svg";
import close from "../../../assets/Landing/close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const LandingContact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bgLanding">
      {/* Full Nav */}
      <div className="">
        {/* W-90%  */}
        <div className="LandingHeader">
          {/* Logo */}
          <div>
            <h1 className="Logo">Darabie</h1>
          </div>
          {/* Menu Tab */}
          <div>
            <img
              src={menu}
              className="w-[2rem] mx-auto"
              onClick={() => setIsMenuOpen(true)}
            />
          </div>
        </div>
      </div>
      {/* Landing Section */}
      <section className="LandingSection">
        <div className="text-center space-y-8 md:space-y-3 text-white font-semibold">
          <h3 className=" text-4xl hidden lg:block lg:text-6xl font-extrabold text-custom_orange">
            Let&apos;s Talk
          </h3>
          <h3 className=" text-4xl block lg:hidden lg:text-6xl font-extrabold text-custom_orange">
            Let&apos;s <br /> Talk
          </h3>
          <p className="text-xl tracking-[0.6rem] font-semibold">JUST DROP ME A LINE</p>
        </div>
      </section>
      {isMenuOpen && (
        <div className="h-[100%] absolute w-full bg-custom_dark2 top-0">
          <div className="flex justify-end h-[7vh] lg:h-[5vh] pr-6 pt-3">
            <img src={close} onClick={() => setIsMenuOpen(false)} />
          </div>
          <ul className="h-full w-full flex flex-col space-y-12 text-custom_orange text-2xl md:text-5xl justify-center items-center">
            <li
              onClick={() => setIsMenuOpen(false)}
              className="lg:hover:border-b-2 hover:border-custom_orange hover:pb-5 "
            >
              <Link to={"/"}>HOME</Link>
            </li>
            <li
              onClick={() => setIsMenuOpen(false)}
              className="lg:hover:border-b-2 hover:border-custom_orange hover:pb-5"
            >
              <Link to={"/work"}>WORK</Link>
            </li>
            <li
              onClick={() => setIsMenuOpen(false)}
              className="lg:hover:border-b-2 hover:border-custom_orange hover:pb-5"
            >
              <Link to={"/letsconnect"}>LET&apos;S TALK</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default LandingContact;
