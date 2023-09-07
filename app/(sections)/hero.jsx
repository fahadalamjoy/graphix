"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import graphixLogo from "@/public/graphix_logo.svg";
import { createRef, useEffect, useRef } from "react";

import animJson from "@/public/animation_llz20fgy.json";
import anim from "@/public/lott.json";

import lottie from "lottie-web";

import Lottie, { useLottie, useLottieInteractivity } from "lottie-react";
import LottieControl from "./heroanim";

// import useMediaQuery from "@/lib/useMediaQuery";
import useWindowResize from "@/lib/useWindowResize";

import LottieControlMobile from "./heroanim_Mobile";

export default function Hero() {
  // const matches = useMediaQuery("(min-width: 600px)");

  /*  */
  const { width, height } = useWindowResize();
  // console.log(width, height);

  return (
    <div>
      <section
        id="hero"
        className="pointer-events-none p-5 bg-white  z-[-10px]"
      >
        {/* {matches ? <HeroDesktop /> : <HeroMobile />} */}
        {width > 600 ? <HeroDesktop /> : <HeroMobile />}
        {/* <LottieControl /> */}
      </section>
    </div>
  );
}

export function HeroDesktop() {
  return (
    <section id="hero" className="p-5 bg-white h-[1450vh]">
      <LottieControl />
    </section>
  );
}
export function HeroMobile() {
  return (
    <>
      <section id="hero" className="p-5 bg-white h-[1000vh]">
        <LottieControlMobile />
      </section>
    </>
  );
}
