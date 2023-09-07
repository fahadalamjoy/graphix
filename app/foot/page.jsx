import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import facebook from "@/public/facebook.png";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";

export default function FooterPage() {
  return (
    <section className="">
      <div className="bg-black text-white py-12">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-2xl mx-5 mt-5 mb-8 text-gray-200 font-normal">
            Or you can contact us
          </h1>
          <div className="text-white text-2xl">
            <span className="inline">
              <MdLocationPin className="inline translate-y-[-10]" /> Birmingham,United Kingdom
            </span>
          </div>
          <div className="text-white text-2xl">
            <span className="inline">
              <TfiEmail className="inline" /> info@graphix.com
            </span>
          </div>
          <div className="text-white text-2xl">
            <span className="inline">
              <BsTelephone className="inline" /> +44 7879740842
            </span>
          </div>
        </div>
        {/* footer icons */}
        <div className="mt-10">
          <h1 className="text-white text-center text-xl">FIND US ON</h1>
          <div className="flex flex-row gap-4 p-2 justify-center">
            <a href="#" className="hover:cursor-pointer">
              <div className="text-xl rounded-full  ">
                <FaFacebookF />
              </div>
            </a>
            <a href="#">
              <div className="text-xl rounded-full  cursor-pointer">
                <FiYoutube />
              </div>
            </a>
            <a href="#">
              <div className="text-xl rounded-full   cursor-pointer">
                <FaInstagram />
              </div>
            </a>
            <a href="#">
              <div className="text-xl border rounded-full  cursor-pointer">
                <TiSocialLinkedin />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="bg-white h-20 ml-20">
        <div className="oveflex flex-col justify-end items-end mb-[196px] pr-16 ">
          <h2 className="text-black text-xl font-semibold">FIND US ON</h2>
          <div className="mb-100 flex flex-row gap-4 p-2">
            <a href="#" className="hover:cursor-pointer">
              <div className="text-xl rounded-full bg-white ">
                <FaFacebookF />
              </div>
            </a>
            <a href="#">
              <div className="text-xl rounded-full bg-white cursor-pointer">
                <FiYoutube />
              </div>
            </a>
            <a href="#">
              <div className="text-xl rounded-full bg-white  cursor-pointer">
                <FaInstagram />
              </div>
            </a>
            <a href="#">
              <div className="text-xl border rounded-full bg-white cursor-pointer">
                <TiSocialLinkedin />
              </div>
            </a>
          </div>
        </div>
      </div> */}
    </section>
  );
}
