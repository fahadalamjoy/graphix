"use client";
import React from "react";
import { motion } from "framer-motion";

export const skills = [
  {
    name: "Macy May",
    id: 1,
  },
  {
    name: "Bob Banks",
    id: 2,
  },
  {
    name: "Kitty Kat",
    id: 3,
  },
  {
    name: "Macy May",
    id: 4,
  },
  {
    name: "Bob Banks",
    id: 5,
  },
  {
    name: "Kitty Kat",
    id: 6,
  },
  {
    name: "Macy May",
    id: 7,
  },
  {
    name: "Bob Banks",
    id: 8,
  },
  {
    name: "Kitty Kat",
    id: 3,
  },
];

export default function Skills() {
  return (
    <div>
      <ul className="flex flex-col md:grid lg:grid md:grid-cols-2 lg:grid-cols-3 mt-[50px]">
        {skills.map((item, i) => (
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
            <div className="p-3 bg-red-400">item</div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
