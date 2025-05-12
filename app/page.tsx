"use client"; 
import { Button } from "@heroui/react";
import NavBar from "@/components/NavBar";
import GlowingText from "@/components/GradientText";
import { motion, type Variants } from "framer-motion";
import Particles from "@/components/Particles";
import GradientButton from "@/components/GradientButton";

const textVariants: Variants = {
  initial: {
    opacity: 0, 
    y: 30, 
    filter: "blur(15px)",
  }, 
  animate: {
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: {
      duration: 0.5, 
      delay: 0.3
    }
  }, 
}
export default function App(){
  return ( 
    <div className="flex flex-col items-center justify-center gap-2 min-h-screen w-full bg-background text-foreground">
    <NavBar />
    <main className="flex flex-col items-center justify-center gap-2 flex-1 ">
      <section className="flex flex-col items-center justify-center gap-2 p-3 w-full h-full lg:w-3/5 relative">
      <motion.h1
      variants={textVariants}
      initial="initial"
      animate="animate"
      className="font-extrabold lg:text-7xl text-5xl text-center">Grow your <GlowingText text="ideas"/> like never before.</motion.h1>
      <motion.p variants={textVariants} initial="initial"  animate="animate" className="text-center text-lg dark:text-neutral-300 text-neutral-600">
        Whether you are a developer, designer, or entrepreneur, we have the tools to help you succeed.
      </motion.p>
      <GradientButton text="Get Started Now"/>

      </section>
      <Particles className="absolute top-0 left-0 w-full h-full" quantity={200}/>

    </main>
    </div>
  )
}