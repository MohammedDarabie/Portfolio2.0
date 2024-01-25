import { Link } from "react-router-dom";

const LetWorkTogether = () => {
  return (
    <div className="bg-custom_beig">
      <div className="text-center w-[90%] lg:w-[60%] mx-auto  py-24">
        <h1 className="sectionH1 mb-5">Let&apos;s Work Together</h1>
        <p className="border-b-4 border-custom_orange  w-fit mx-auto pb-4 mb-12">
          TELL ME MORE ABOUT YOUR PROJECT
        </p>
        <p className="mb-12">
          &quot;Expert Full Stack Developer eager to tackle software challenges
          and
          <br />
          transform ideas into elegant, efficient solutions.&quot;
        </p>
        <form className="flex flex-col lg:w-[70%] mx-auto space-y-12">
          <input placeholder="NAME*" className="py-5 px-5  rounded-xl"></input>
          <input placeholder="EMAIL*" className="py-5 px-5  rounded-xl"></input>
          <input placeholder="PHONE*" className="py-5 px-5  rounded-xl"></input>

          <button className="uppercase font-bold tracking-[0.5rem] rounded-xl bg-custom_orange py-5 text-white hover:text-custom_orange hover:bg-white transition duration-300 ease-in-out">
            <Link to={"/letsconnect"}>LET&apos;S TALK</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LetWorkTogether;
