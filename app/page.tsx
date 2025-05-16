"use client";
import NavBar from "@/components/NavBar";
import { motion, type Variants } from "framer-motion";
import Particles from "@/components/Particles";
import GradientButton from "@/components/GradientButton";
import BlurredText from "@/components/BlurredText";
import Features from "@/components/Features";
import ShowcaseImage from "@/components/ShowcaseImage";
import Opinions from "@/components/Opinions";
const textVariants: Variants = {
  initial: {
    opacity: 0,
    filter: "blur(15px)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      delay: 1.2,
    },
  },
};
export default function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 min-h-screen w-full bg-background text-foreground">
      <NavBar />
      <main className="flex flex-col items-center justify-center gap-2 flex-1 w-full ">
        <section className="flex rounded-b-full my-12 flex-col items-center justify-center gap-2 p-3 w-full lg:w-4/6 relative">
          <BlurredText
            text="Grow your ideas like never before"
            className="text-center mt-24 lg:mt-24 lg:text-7xl text-4xl font-extrabold w-full items-center justify-center "
            delay={0.2}
          />
          <motion.p
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="text-center text-lg dark:text-neutral-300 text-neutral-600 font-semibold"
          >
            Whether you are a developer, designer, or entrepreneur, we have the
            tools to help you succeed.
          </motion.p>
          <GradientButton text="Get Started Now" className="my-4 z-20" />
          <ShowcaseImage
            src="/showcase.png"
            alt="Showcase Image"
            width={1080}
            height={720}
            className="aspect-video w mt-10 object-cover contain z-20 rounded-xl"
          />

        </section>
        <Particles
          className="absolute top-0 left-0 w-full h-full max-h-[100vh]"
          quantity={100}
        />
        <Features />
        <Opinions />
      </main>
    </div>
  );
}
