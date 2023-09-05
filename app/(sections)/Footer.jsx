import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";

export default function Footer() {
  return (
    <section className="h-full">
      <div className="wave-container text-white">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-2xl mx-5 mt-5 mb-8 text-gray-300 font-semibold">
            Or You can contact us
          </h1>
          <div className="text-2xl md:text-3xl flex flex-col justify-start items-start gap-2">
            <div>
              <span className="inline-block mr-2">
                <MdLocationPin />
              </span>
              Birmingham, United Kingdom
            </div>
            <div>
              <span className="inline-block mr-2">
                <TfiEmail />
              </span>
              info@lightsglobalservices.com
            </div>
            <div>
              <span className="inline-block mr-2">
                <BsTelephone />
              </span>
              +44 7879 740842
            </div>
          </div>
        </div>
        {/* footer icons */}
        <div className="flex flex-col justify-end items-end mx-[2rem] md:mx-[10rem]">
          <h2 className="text-white text-xl font-semibold">FIND US ON</h2>
          <div className="flex flex-row gap-4 p-2">
            <a href="#">
              <div className="text-xl rounded-full bg-slate-800 cursor-pointer">
                <FaFacebookF />
              </div>
            </a>
            <a href="#">
              <div className="text-xl rounded-full bg-slate-800 cursor-pointer">
                <FiYoutube />
              </div>
            </a>
            <a href="#">
              <div className="text-xl rounded-full bg-slate-800  cursor-pointer">
                <FaInstagram />
              </div>
            </a>
            <a href="#">
              <div className="text-xl border rounded-full bg-slate-800 cursor-pointer">
                <TiSocialLinkedin />
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="bg-white h-20"></div> */}
    </section>
  );
}
