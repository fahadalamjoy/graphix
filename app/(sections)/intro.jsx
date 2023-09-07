import { motion } from "framer-motion";
import Home from "../lot/page";

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

export function SkillsSec() {
  return (
    <div>
      {/* <div className="bg-red-300 h-[200vh] m-10 text-red-200">sdsafas</div> */}
    </div>
  );
}

export default function Intro() {
  return (
    <section id="intro" className="bg-black h-[900px]">
      <Home />
      <SkillsSec />
    </section>
  );
}
