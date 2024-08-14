import React from 'react'
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import Hero from './Hero';
import Para from './Para';

const HeroWrapper = () => {
  return (
    <div className="relative flex h-[calc(100%-3.5rem)] w-screen items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
    <div className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-whites">
     <Hero></Hero>
     <Para></Para>
    </div>
    <AnimatedGridPattern
      numSquares={100}
      maxOpacity={0.1}
      duration={3}
      repeatDelay={1}
      className={`${cn(
        "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
      )}`}
    />
  </div>
  )
}

export default HeroWrapper