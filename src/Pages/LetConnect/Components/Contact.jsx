import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className=" custom-shape3  bg-custom_dark1">
        <div className="flex flex-col lg:flex-row w-[90%] lg:w-[60%] mx-auto  py-12 lg:py-36 space-y-12 lg:space-y-0 lg:space-x-12 ">
          {/* Left Div */}
          <div className="space-y-10  lg:w-[40%]">
            <p className="text-5xl font-bold text-white">
              Give Your online
              <br /> presence it <br /> deserves.
            </p>
            <p className="mb-12 text-white font-light">
              &quot;Expert Full Stack Developer eager to tackle software
              challenges and
              <br />
              transform ideas into elegant, efficient solutions.&quot;
            </p>
          </div>
          {/* Right Div */}
          <div className="flex-1">
            <form className="flex flex-col  mx-auto space-y-12">
              <input
                placeholder="NAME*"
                className="py-5 px-5  rounded-xl"
              ></input>
              <input
                placeholder="EMAIL*"
                className="py-5 px-5  rounded-xl"
              ></input>
              <input
                placeholder="PHONE*"
                className="py-5 px-5  rounded-xl"
              ></input>

              <button className="uppercase font-bold tracking-[0.5rem] rounded-xl bg-custom_orange py-5 text-white hover:text-custom_orange hover:bg-white transition duration-300 ease-in-out">
                <Link to={"/letsconnect"}>LET&apos;S TALK</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
