/* 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 */

"use client";

import React, { useEffect, useRef } from "react";
import LottiePlayer from "@lottiefiles/react-lottie-player";

import "./styles.css";
import lottie from "lottie-web";
import Lottie from "lottie-react";

// import animationData from "@/public/expToKey_hero_comp.json";
import animationData from "@/public/skills_graphics-1.json";

import useWindowResize from "@/lib/useWindowResize";
import Hero from "../(sections)/hero";
// import { SkillsPageSec, SkillsPageSecMobile } from "@/app/skill/skillspagesc";

export default function SkillHome() {
  // const animationurl = "../../public/skills_graphics.json";

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });
  }, []);

  // const { width, height } = useWindowResize();

  return (
    <section className="bg-black text-white w-full">
      <div className=" bg-black w-full" ref={container}></div>
      {/* <div className="bg-black h-[200vh]"></div> */}
      {/* <div style={{ position: "fixed" }} ref={lottieRef}></div> */}
    </section>
  );
}

{
  /* {width > 600 ? <SkillsPageSec /> : <SkillsPageSecMobile />} */
}

function LOT() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} />;
}
