"use client";

import React from "react";
import Image from "next/image";
import { workList } from "./workList";

import { animate, motion } from "framer-motion";

const fadedinvar = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const WorkPage = () => {
  return (
    <div className="overflow-hidden bg-white z-10 relative">
      <div className="m-10">
        <h1 className="text-center font-custom text-5xl mt-2">
          Have a look at some of our work!
        </h1>
        <ul className="flex flex-col md:grid lg:grid md:grid-cols-2 lg:grid-cols-3 mt-[50px] ">
          {workList.map((item, i) => (
            <motion.li
              key={item.id}
              className=""
              variants={fadedinvar}
              initial="initial"
              transition={{
                type: "spring",
                damping: 4,
                stiffness: 20,
                restDelta: 0.001,
              }}
              whileInView="animate"
            >
              <div className="p-2 m-8 border-black rounded-[2rem] bg-white-700 hover:drop-shadow-2xl hover:cursor-pointer hover:scale-105 duration-200">
                <Image
                  className="rounded-[1.4rem]"
                  src={item.image}
                  alt="works"
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkPage;
