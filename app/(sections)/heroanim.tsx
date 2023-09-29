"use client";
import * as React from "react";
import "./styles.css";
import lottie from "lottie-web";
import animationData from "@/public/desktop_hero_new_keyExp.json";

const LottieControl = () => {
  const lottieRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    var animDuration = 100;
    const anim = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: "svg",
      loop: false,
      autoplay: false,
      initialSegment: [2, 125],

      animationData,
    });

    function animatebodymovin(duration: number) {
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames;
      // console.log("ooof", anim.totalFrames);
      const frame = (maxFrames / 1000) * (scrollPosition / (duration / 10)); //change this sarthak
      // const frame = (maxFrames / 100) * (scrollPosition / (duration / 100)); //DEFAULT this sarthak

      anim.addEventListener("enterFrame", function (animation) {
        if (animation.currentTime > anim.totalFrames - 1) {
          // console.log("Last FRAME");
          anim.pause();
        }
      });

      anim.goToAndStop(frame - 1, true);
    }
    const onScroll = () => {
      // console.log("Scrolling");
      animatebodymovin(animDuration);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div style={{ position: "fixed" }} ref={lottieRef}></div>;
};

export default LottieControl;
