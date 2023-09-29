import LottieControl from "./heroanim";
import useWindowResize from "@/lib/useWindowResize";
import LottieControlMobile from "./heroanim_Mobile";

export default function Hero() {
  const { width, height } = useWindowResize();

  return (
    <div>
      <section
        id="hero"
        className="pointer-events-none p-5 bg-white  z-[-10px]"
      >
        {width > 600 ? <HeroDesktop /> : <HeroMobile />}
      </section>
    </div>
  );
}

export function HeroDesktop() {
  return (
    <section id="hero" className="p-5 bg-white h-[1450vh] 2xl:h-[960vh]">
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
