"use client"; 
import NavBar from "@/components/NavBar";
import Particles from "@/components/Particles";
import Features from "@/components/Features";
import Opinions from "@/components/Opinions";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 min-h-screen w-full bg-background text-foreground">
      <NavBar />
      <main className="flex flex-col items-center overflow-x-hidden justify-center gap-2 flex-1 w-full ">
        <Intro />
        <Particles
          className="absolute top-0 left-0 w-full h-full max-h-[100vh]"
          quantity={100}
        />
        <Features />
        <Opinions />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
