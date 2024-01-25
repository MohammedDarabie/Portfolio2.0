import twitter from "../../../assets/Footer/twitter.svg";
import linkedIn from "../../../assets/Footer/linkedin.svg";
import whatsapp from "../../../assets/Footer/whatsapp.svg";
import instagram from "../../../assets/Footer/instagram.svg";
const Info = () => {
  return (
    <div>
      <div className="w-[70%]  mx-auto space-y-12 lg:space-y-0 py-12 lg:py-48 flex flex-col lg:flex-row justify-center gap-x-0 lg:gap-x-36">
        {/*------------------------------------- Let's Talk -------------------------------------*/}
        <div>
          <h1 className="sectionH1">Let&apos;s Talk</h1>
          <p className="font-light mt-8 lg:mt-12">CONTACT DETAILS</p>
          <ul className="mt-6">
            <li>
              Phone :
              <a
                href="https://wa.me/+966552220151"
                target="_blank"
                rel="noopener noreferrer"
              >
                +966 - 552220151
              </a>
            </li>
            <li>
              Info :
              <a
                href="https://wa.me/+966552220151"
                target="_blank"
                rel="noopener noreferrer"
              >
                mohammeddarabie@gmail.com
              </a>
            </li>
            <li>
              Phone :{" "}
              <a
                href="https://www.darabie.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                darabie.com
              </a>
            </li>
          </ul>
        </div>
        {/*------------------------------------- Connect -------------------------------------*/}
        <div>
          <h1 className="sectionH1">Connect</h1>
          <p className="font-light mt-8 lg:mt-12">SOCIAL PRESENCE</p>
          <ul className="mt-6 flex justify-start items-center space-x-2">
            <li className="bg-black rounded-xl w-fit h-fit">
              <a
                href="https://twitter.com/Mohammed_ihsan_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="My Twitter" className="w-6 lg:w-12" />
              </a>
            </li>
            <li className="bg-black rounded-xl w-fit">
              <a
                href="https://www.linkedin.com/in/mohammed-darabie-13603a232/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedIn} alt="My LinkedIn" className="w-6 lg:w-12" />
              </a>
            </li>
            <li className="bg-black rounded-xl w-fit">
              <a
                href="https://wa.me/+966552220151"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={whatsapp} alt="My Whatsapp" className="w-6 lg:w-12" />
              </a>
            </li>
            <li className="bg-black rounded-xl w-fit">
              <a
                href="https://www.instagram.com/darabie3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagram}
                  alt="My instagram"
                  className="w-6 lg:w-12"
                />
              </a>
            </li>
          </ul>
        </div>
        {/*------------------------------------- Find Me -------------------------------------*/}
        <div>
          <h1 className="sectionH1">Find Me.</h1>
          <p className="font-light  mt-8 lg:mt-12">ADDRESS</p>
          <ul className="mt-6">
            <li>Aws ibn Saidah Street , Faisalyia</li>

            <li>Dammam, Saudia Arabia</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
