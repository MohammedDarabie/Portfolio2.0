import cultivay from "../../../assets/RecentWork/cultivay.png";
import ebook from "../../../assets/RecentWork/ebook.svg";
import itec from "../../../assets/RecentWork/itec.jpg";
import movielist from "../../../assets/RecentWork/movielist.svg";
import tkamul from "../../../assets/RecentWork/tkamul.png";
import topline from "../../../assets/RecentWork/topline.jpg";
const RecentWorkWorking = () => {
  return (
    <>
      <div className="custom-shape2-working -mt-20 text-white text-center">
        <div className=" py-12 lg:py-28 pb-9">
          <h1 className="sectionH1">Recent Work</h1>
          <p className="sectionP">A SELECTION OF RECENT WORK</p>
        </div>
      </div>
      <div className="bg-white   mx-auto  grid grid-cols-1 lg:grid-cols-2   ">
        {/* First Div */}
        <div className=" flex justify-center items-center  p-5">
          <a
            href="https://cultivay.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={cultivay}></img>
          </a>
        </div>
        {/* Second Div */}
        <div className=" flex justify-center items-center  p-5">
          <a
            href="https://e-book-demo.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ebook}></img>
          </a>
        </div>
        {/* Third Div */}
        <div className=" flex justify-center items-center  p-5">
          <a href="https://sa-itec.com/" target="_blank" rel="noreferrer">
            <img src={itec}></img>
          </a>
        </div>
        {/* Fourth Div */}
        <div className=" flex justify-center items-center  p-5">
          <a
            href="https://topline-sa.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={topline}></img>
          </a>
        </div>
        {/* Fourth Div */}
        <div className=" flex justify-center items-center  p-5">
          <a href="https://darabie.com/" target="_blank" rel="noreferrer">
            <img src={tkamul}></img>
          </a>
        </div>
        {/* Fourth Div */}
        <div className=" flex justify-center items-center  p-5 ">
          <a
            href="https://classy-genie-dc6900.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={movielist}></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default RecentWorkWorking;
