import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
const Hero = () => (
  <section className="py-16 px-4 text-center bg-light">
    <BackgroundBeamsWithCollision>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center font-heading tracking-tight text-primary">
        What&apos;s cooler than Beams?{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-secondary via-accent to-light [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Exploding beams.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-secondary via-accent to-light py-4">
            <span className="">Exploding beams.</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  </section>
);

export default Hero;
