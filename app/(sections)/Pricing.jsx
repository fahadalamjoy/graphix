import React from "react";
import { FaPlay } from "react-icons/fa";
import { doubleIcon } from "@/public/double_icon.svg";
import { tripleIcon } from "@/public/triple_icon.svg";
import { playIcon } from "@/public/play_icon.svg";
import Image from "next/image";

import one from "@/public/one.webp";
import two from "@/public/two.webp";
import three from "@/public/three.webp";
import pol from "@/public/Polygon2.svg";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const fadedinvar = {
  initial: {
    opacity: 0.5,
    y: 100,
    scale: 0.2,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const Pricing = () => {
  return (
    <>
      <section className=" bg-white mb-6 p-10 ">
        {/* <div> */}
        <motion.div
          key={1}
          className=""
          variants={fadedinvar}
          initial="initial"
          transition={{
            type: "spring",
            damping: 7,
            stiffness: 20,
            restDelta: 0.001,
          }}
          whileInView="animate"
        >
          <h1 className="font-extrabold text-4xl mt-2 md:text-5xl text-center">
            Find the perfect plan that's right for you!
          </h1>
          {/* Pricing section */}
          <div className="flex w-full flex-col sc:flex-row justify-around items-center gap-10 sc:gap-0 text-white my-16">
            {/*  */}
            {/* rounded pricing */}
            <div className="scale-110 my-10 sc:mb-0 sc:scale-100 relative w-[20rem] h-[20rem] bg-black rounded-full flex justify-center items-center text-center p-5 shadow-xl">
              <div className="flex flex-col justify-center items-center">
                <span className="text-3xl m-2">
                  <Image alt="" src={one} className="scale-75" />
                </span>
                <span className="font-semibold text-[20px]">Basic</span>
                <span className="font-extrabold text-2xl mt-2">
                  £89.99 <span className="font-extralight text-sm">/mo</span>
                </span>
                <span className="font-bold">
                  <span className="font-bold text-xl">9 Contents </span>
                  <span className="font-extralight text-sm">/mo</span>
                </span>
                <span className="font-medium">£ 20 for SEO service</span>
                <span className="font-medium">
                  £ 10 for social media posting
                </span>
                <a href="#">
                  <button className="bg-white border rounded-[0.7rem] w-[10rem] h-10 mt-2 text-center text-black text-sm font-bold hover:bg-slate-100 duration-200">
                    BUY NOW
                  </button>
                  {/* <Button variant={"destructive"}>Button</Button> */}
                </a>
              </div>
            </div>
            {/* tri */}
            <div className="scale-125 sc:scale-100 ">
              <div className="relative top-0 left-0 p-10">
                <div className="relative top-0 left-0 scale-125 sec:scale-100 pt-5 sec:pt-0">
                  <Image alt="" src={pol} />
                </div>
                <div className="absolute top-[20%] sc:top-[26%] left-[50%] ml-[-23%] sm:ml-[-12%] sc:ml-[-15%] sec:ml-[-17%] scale-75">
                  <div className="flex flex-col justify-center items-center">
                    <Image
                      alt=""
                      src={two}
                      className="scale-90 sec:scale-100"
                    />
                    <span className="mt-2 sec:mt-8 sc:mt-5 font-semibold text-2xl sc:text-4xl">
                      Standard
                    </span>
                    <span className="font-extrabold inline-block  mt-4">
                      <h1 className="text-xl">
                      £139.99{" "}<span className="font-extralight text-sm sec:text-xl">
                        /mo
                      </span>

                      </h1>
                      
                    </span>
                    <span className="font-bold">
                      <span className="font-bold text-2xl">15 Contents </span>
                      <span className="font-extralight text-sm">/mo</span>
                    </span>
                    <span className="font-medium">£ 20 for SEO service</span>
                    <span className="font-medium">
                      £ 10 for social media posting
                    </span>
                    <a href="#">
                      <button className="scale-95 sc:scale-150 sec:scale-110 bg-white border rounded-[0.7rem] w-[10rem] h-10  mt-2 sec:mt-8 sc:mt-6 text-center text-black text-sm font-bold hover:bg-slate-100 duration-200">
                        BUY NOW
                      </button>
                    </a>
                    spa
                  </div>
                </div>
              </div>
            </div>
            {/* square */}
            <div className="scale-110 my-10 sc:mb-0 sc:scale-100 relative w-[20rem] h-[20rem] bg-black flex justify-center items-center text-center p-5 shadow-xl">
              <div className="flex flex-col justify-center items-center">
                <span className="text-3xl m-2">
                  <Image alt="" src={three} className="scale-75" />
                </span>
                <span className="font-bold text-[20px] text-5xl">Pro</span>
                <span className="font-extrabold text-2xl mt-2">
                  £169.99 <span className="font-extralight text-sm">/mo</span>
                </span>
                <span className="font-bold">
                  <span className="font-bold text-xl">20 Contents </span>
                  <span className="font-extralight text-sm">/mo</span>
                </span>
                <span className="font-medium">£20 for SEO service</span>
                <span className="font-medium">
                  £ 10 for social media posting
                </span>
                <a href="#">
                  <button className="bg-white rounded-[0.7rem] w-[10rem] h-10 mt-2 text-center text-black text-sm font-bold hover:bg-slate-100 duration-200">
                    BUY NOW
                  </button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Pricing;
