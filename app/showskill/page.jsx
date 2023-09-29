"use client";

import React from "react";
import { animate, motion } from "framer-motion";

const fadedinvar = {
  initial: {
    opacity: 0,
    y: 250,
    // scale: 0.2,
  },
  animate: {
    opacity: 1,
    y: 0,
    // scale: 1,
  },
};
const fadedinvar2 = {
  initial: {
    opacity: 0,
    y: 300,
    // scale: 0.2,
  },
  animate: {
    opacity: 1,
    y: 0,
    // scale: 1,
  },
};

export default function page() {
  return (
    <div className="lg:pt-[160px] pt-[160px] pb-14 lg:h-[90vh] h-[100vh] w-full bg-black relative text-white font-custom items-center">
      <div className="flex lg:flex-row flex-col gap-12 py-12 relative ">
        <motion.div
          variants={fadedinvar}
          initial="initial"
          transition={{
            type: "spring",
            damping: 5,
            stiffness: 20,
            restDelta: 0.001,
          }}
          whileInView="animate"
          className="mb-6 absolute lg:top-[-2rem] top-[-5rem] inset-0 left-[2rem] lg:my-0 my-6"
        >
          <h1 className="text-2xl mb-6">Branding and Identity Design</h1>
        </motion.div>
        <motion.div
          variants={fadedinvar2}
          initial="initial"
          transition={{
            type: "spring",
            damping: 5,
            stiffness: 20,
            restDelta: 0.001,
          }}
          whileInView="animate"
          className="absolute  inset-0 flex items-center lg:text-start text-center justify-center lg:my-0 my-6"
        >
          <h1 className="text-2xl">Illustrations and Infographics</h1>
        </motion.div>
        <motion.div
          variants={fadedinvar2}
          initial="initial"
          transition={{
            type: "spring",
            damping: 5,
            stiffness: 20,
            restDelta: 0.001,
          }}
          whileInView="animate"
          className="absolute lg:top-[-10rem] top-[6rem] right-[2rem] inset-0 flex items-center lg:justify-end justify-center lg:my-0 my-6"
        >
          <h1 className="text-2xl mt-10">Logo Design</h1>
        </motion.div>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-around py-12 text-center lg:mt-0 mt-6">
        <motion.div
          variants={fadedinvar2}
          initial="initial"
          transition={{
            type: "spring",
            damping: 5,
            stiffness: 20,
            restDelta: 0.001,
          }}
          whileInView="animate"
          className=""
        >
          <h1 className="text-2xl lg:my-0 my-6">Social Media Graphics</h1>
        </motion.div>
        <motion.div
          variants={fadedinvar2}
          initial="initial"
          transition={{
            type: "spring",
            damping: 5,
            stiffness: 20,
            restDelta: 0.001,
          }}
          whileInView="animate"
          className="items-center justify-center text-center"
        >
          <h1 className="text-2xl lg:my-0 my-6">
            Motion Graphics and Animation
          </h1>
        </motion.div>
      </div>
      <div className="flex lg:flex-row flex-col gap-12 lg:py-12 py-6 relative mt-6 lg:text-start text-center">
        <motion.div
          variants={fadedinvar2}
          initial="initial"
          transition={{
            type: "spring",
            damping: 5,
            stiffness: 20,
            restDelta: 0.001,
          }}
          whileInView="animate"
          className="mb-6 absolute top-[4rem] inset-0 left-[2rem] lg:my-0 my-6 "
        >
          <h1 className="text-2xl ">Packaging Design</h1>
        </motion.div>
        <motion.div
          variants={fadedinvar}
          initial="initial"
          transition={{
            type: "spring",
            damping: 5,
            stiffness: 20,
            restDelta: 0.001,
          }}
          whileInView="animate"
          className="absolute inset-0 flex items-center justify-center lg:my-0 my-6"
        >
          <h1 className="text-2xl">Typography and Layout Design</h1>
        </motion.div>
        <motion.div
          variants={fadedinvar2}
          initial="initial"
          transition={{
            type: "spring",
            damping: 5,
            stiffness: 20,
            restDelta: 0.001,
          }}
          whileInView="animate"
          className="absolute lg:top-[-5rem] top-[-9rem] right-[2rem] inset-0 flex items-center justify-end lg:my-0 my-6"
        >
          <h1 className="text-2xl">Video Production and Editing</h1>
        </motion.div>
      </div>
    </div>
  );
}
