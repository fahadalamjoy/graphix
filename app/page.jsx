"use client";

import Hero from "@/app/(sections)/hero";
import Intro, { SkillsSec } from "@/app/(sections)/intro";
import FullTime from "@/app/(sections)/fullTime";
import Pricing from "@/app/(sections)/Pricing";
import Preloader from "@/app/(sections)/preloader";

import React, { useRef, useEffect } from "react";
import WorkPage from "./work/page";
import FooterPage from "./foot/page";
import ExtraContact from "@/app/cont/extra-contact";

import ShowSkill from "./showskill/page";

export default function Home() {
  return (
    <div>
      {/* <Preloader /> */}
      <main className="scroll-smooth">
        <Hero />
        <Intro />
        <ShowSkill />
        <WorkPage />
        <Pricing />
        <FullTime />
        <ExtraContact />
        <div>
          <FooterPage />
        </div>
      </main>
    </div>
  );
}
