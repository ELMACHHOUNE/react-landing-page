"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { useState } from "react";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import { cn } from "../../lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#1B3C53",
  className,
  ...props
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  return (
    <div
      className={cn(
        "group/spotlight p-10 rounded-2xl relative border-2 border-[#D2C1B6] bg-[#1B3C53] shadow-2xl transition-shadow hover:shadow-[0_8px_32px_0_rgba(210,193,182,0.25)]",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-2xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [210, 193, 182], // #D2C1B6
              [249, 243, 239], // #F9F3EF
              [69, 104, 130], // #456882
            ]}
            dotSize={3}
            showGradient={true}
            gradientFrom="#456882"
            gradientTo="transparent"
          />
        )}
      </motion.div>
      {/* Example text color guidance for children: */}
      {/* <h3 className="text-[#F9F3EF] font-bold">Title</h3> */}
      {/* <p className="text-[#D2C1B6]">Body text</p> */}
      {children}
    </div>
  );
};
