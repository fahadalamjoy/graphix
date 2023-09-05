import { motion } from "framer-motion";

const skills = [
  {
    name: "Branding",
    id: 1,
  },
  {
    name: "Identy Design",
    id: 2,
  },
  {
    name: "Illustrations",
    id: 3,
  },
  {
    name: "Infographics",
    id: 4,
  },
  {
    name: "Logo Design",
    id: 5,
  },
  {
    name: "Motion Graphics",
    id: 6,
  },
  {
    name: "Animation",
    id: 7,
  },
  {
    name: "Packaging Design",
    id: 8,
  },
  {
    name: "Typography",
    id: 9,
  },
  {
    name: "Video Production",
    id: 10,
  },
  {
    name: "Editing",
    id: 11,
  },
  {
    name: "Social Media Graphics",
    id: 12,
  },
  {
    name: "Packaging Design",
    id: 13,
  },
];

const skillsList = [
  "Branding",

  "Identy Design",

  "Illustrations",

  "Infographics",

  "Logo Design",

  "Motion Graphics",

  "Animation",

  "Packaging Design",

  "Typography",

  "Video Production",

  "Editing",

  "Social Media Graphics",

  "Packaging Design",
];

const fadedinvar = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function SkillsSection() {
  return (
    <div>
      <div className="overflow-hidden flex flex-col bg-black h-[100vh] text-white ">
        <div className="flex justify-center items-center scale-50 md:scale-95">
          <span className=" text-4xl animate-pulse pb-16">Logo Design</span>
          <span className=" text-3xl animate-pulse">Editing</span>
          <span className=" text-4xl animate-pulse translate-y-40">
            Branding
          </span>
          <span className=" text-4xl animate-pulse mr-20">
            Video Production
          </span>
          <span className="text-4xl animate-pulse pt-96">Illustrations</span>
          <br />
          <span className="text-4xl animate-pulse mt-10">typography</span>
          <span className="text-3xl animate-pulse">Editing</span>
          <br />
          <span className="text-4xl animate-bounce p-24 ">Motion Graphics</span>
          <br />
          <br />
          <br />
          <span className="">Animation</span> <br />
          <span className="">Typography</span>
          <span className="">Packaging Design</span>
        </div>
        <div className="flex justify-center items-center scale-50 md:scale-95">
          Motion Design
          <span className=" text-3xl animate-pulse translate-y-10">
            Designing
          </span>
          <span className=" text-4xl animate-pulse">Branding</span>
          <span className=" text-4xl animate-bounce mr-20">Designs</span>
          <span className="text-4xl animate-bounce pt-96">Animation</span>
          <br />
          <span className="text-4xl animate-pulse mt-10">Video Production</span>
          <span className="text-4xl animate-pulse">Editing</span>
          <br />
          <span className="text-4xl animate-pulse scale-50 ">
            Identity Design
          </span>
          <br />
          <br />
          <br />
          <span className="">Animation</span> <br />
          <span className="">Typography</span>
          <span className="">Packaging Design</span>
        </div>
      </div>
    </div>
  );
}

/*
 <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsList.map((item, i) => (
          <motion.li
            className="bg-white border-black  rounded-xl px-5 py-3 "
            key={i}
            variants={fadedinvar}
            initial="initial"
            whileInView="animate"
          >
            <div className="p-3 bg-red-400">hfg{item}</div>
          </motion.li>
        ))}

        {skillsList.map((item, i) => (
          <li
            className="bg-white border-black  rounded-xl px-5 py-3 "
            key={i}
            variants={fadedinvar}
            initial="initial"
            whileInView="animate"
          >
            <div className="p-3 bg-red-400">sdfsfsdf</div>
          </li>
          // console.log(item);
        ))}
      </ul>
*/
