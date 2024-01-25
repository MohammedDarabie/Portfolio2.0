import { Link } from "react-router-dom";
import "./work.css";
const LetsWorkTogetherWork = () => {
  return (
    <div>
      <div className="text-center space-y-5 bg-black text-white py-24">
        <h1 className="sectionH1">Let&apos;s Work Together</h1>
        <p className=" text-sm border-b-4 border-custom_orange  w-fit mx-auto pb-4 mb-12">
          TELL ME MORE ABOUT YOUR PROJECT
        </p>
        <p className="text-sm mb-12">
          &quot;Expert Full Stack Developer eager to tackle software challenges
          and
          <br />
          transform ideas into elegant, efficient solutions.&quot;
        </p>
        <button className=" w-[90%] md:w-[40%]  lg:w-[20%]  mx-auto uppercase font-bold tracking-[0.5rem] rounded-xl bg-custom_orange py-5 text-white hover:text-custom_orange hover:bg-white transition duration-300 ease-in-out">
          <Link to={"/letsconnect"}>LET&apos;S TALK</Link>
        </button>
      </div>
    </div>
  );
};

export default LetsWorkTogetherWork;
