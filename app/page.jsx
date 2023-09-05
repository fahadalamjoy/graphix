"use client";

import { motion } from "framer-motion";
import Hero from "@/app/(sections)/hero";
import Intro, { SkillsSec } from "@/app/(sections)/intro";
import Works from "@/app/(sections)/works";
import FullTime from "@/app/(sections)/fullTime";
import Pricing from "@/app/(sections)/Pricing";
import Preloader from "@/app/(sections)/preloader";
import Footer from "@/app/(sections)/Footer";
import Image from "next/image";

import React, { useRef, useEffect } from "react";
import Contact from "./(sections)/Contact";
import Work from "./(sections)/Work";
import WorkPage from "./work/page";
import ContactPage from "./cont/page";
import FooterPage from "./foot/page";
import SkillsSection from "@/app/(sections)/skills-section";
import ExtraContact from "@/app/cont/extra-contact";
import SkillsPageSec from "./(sections)/skillsSec";

import animationData from "@/public/skills_graphics.json";
import imgsamp from "@/public/one.webp";
import Lottie from "lottie-react";
import SkillHome from "./skill/page";

export default function Home() {
  return (
    <div>
      {/* <Preloader /> */}
      <main className="scroll-smooth">
        <Hero />
        <Intro />
        <SkillHome />
        <WorkPage />
        <Pricing />
        <FullTime />
        <ExtraContact />
        {/* <ContactPage /> */}
        <div>
          <FooterPage />
        </div>
      </main>
    </div>
  );
}
