"use client";
import * as React from "react";
import "./styles.css";
import lottie from "lottie-web";
import animationData from "@/public/hero_mobile_new_keyExp.json";

const LottieControlMobile = () => {
  const lottieRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    var animDuration = 100;
    const anim = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: "svg",
      loop: false,
      autoplay: false,
      initialSegment: [2, 150],

      animationData,
    });

    function animatebodymovin(duration: number) {
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames;
      const frame = (maxFrames / 1000) * (scrollPosition / (duration / 10));
      // const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

      anim.goToAndStop(frame - 1, true);
    }
    const onScroll = () => {
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

export default LottieControlMobile;
