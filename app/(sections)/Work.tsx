import React from "react";
import Image from "next/image";
import { workList } from "./workList";

import { motion } from "framer-motion";

const Work = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="m-10">
        <h1 className="text-center  text-5xl mt-2">
          Have a look at some of our work!
        </h1>
        <ul className="flex flex-col md:grid lg:grid md:grid-cols-2 lg:grid-cols-3 mt-[50px]">
          {workList.map((item, i) => (
            <motion.li
              key={item.id}
              className=""
              initial={{ scale: 0.9, opacity: 0, translateX: -50 }}
              animate={{ scale: 1, opacity: 1, translateX: 0 }}
              // transition={{ duration: 0.3 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              exit={{
                opacity: 0,
                transition: { delay: 0.5 },
              }}
              layout
            >
              <div className="p-2 m-8 border-black rounded-[2rem] bg-white-700 hover:drop-shadow-2xl hover:cursor-pointer hover:scale-105 duration-200">
                <Image
                  className="rounded-[2rem]"
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

export default Work;
