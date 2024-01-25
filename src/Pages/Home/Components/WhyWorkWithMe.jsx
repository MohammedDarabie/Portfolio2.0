import webdesign from "../../../assets/WorkWithMe/web-design.svg";
import databases from "../../../assets/WorkWithMe/database.svg";
import UI from "../../../assets/WorkWithMe/uiux-design.svg";
const WhyWorkWithMe = () => {
  return (
    <div className="bg-custom_dark1 ">
      <section className="custom-shape text-white text-center">
        <div className="container my-12 md:my-8 lg;my-48 lg:my-36">
          {/* Text Area */}
          <div className="space-y-8">
            <h1 className="sectionH1">Why Work With Me</h1>
            <p className="sectionP">Web Development - UX/UI - Databases</p>
            <p className="font-thin leading-8">
              Choose me as your web developer to transform your vision into a
              reality.
              <br /> With a strong foundation in web technologies and a passion
              for crafting exceptional online experiences, <br /> I&apos;m
              committed to delivering results that exceed your expectations.
            </p>
          </div>
          {/* Three Circles */}
          <div>
            <ul className="flex flex-col md:flex-row justify-evenly items-center my-12 font-thin space-y-10 lg:space-y-0">
              <li className="flex flex-col justify-center items-center space-y-5 border-4 border-custom_orange p-12 rounded-full">
                <img className="w-16 mx-auto" src={webdesign} />
                <p>WEB DESIGN</p>
              </li>
              <li className="flex flex-col justify-center items-center space-y-5 border-4 border-custom_orange p-12 px-[3.7rem] rounded-full">
                <img className="w-16 mx-auto" src={databases} />
                <p>DATABASE</p>
              </li>
              <li className="flex flex-col justify-center items-center space-y-5 border-4 border-custom_orange p-12 px-[4.5rem] rounded-full">
                <img className="w-16 mx-auto" src={UI} />
                <p>UI / UX</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyWorkWithMe;
