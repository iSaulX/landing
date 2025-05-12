import { cn } from "@heroui/react";
import type { CSSProperties, ComponentPropsWithoutRef } from "react";

export type ParticlesProps = {
  className?: string;
  quantity?: number;
} & ComponentPropsWithoutRef<"div">;

function randomOpacity(): number {
  return Math.floor(Math.random() * 100) + 1;
}

function randomPosition(): [number, number] {
  const x: number = Math.floor(Math.random() * 99) + 1;
  const y: number = Math.floor(Math.random() * 99) + 1;
  return [x, y];
}

function randomSize(maxSize: number = 3): number {
  return Math.floor(Math.random() * maxSize) + 1;
}

const Particle = () => {
  const [x, y] = randomPosition();
  const size = randomSize();
  const opacity = randomOpacity();

  return (
    <div
      style={
        {
          "--x": `${x}%`,
          "--y": `${y}%`,
          "--size": `${size}px`,
          "--opacity": `${opacity}%`,
        } as CSSProperties
      }
      className="absolute rounded-full bg-white w-[var(--size)] h-[var(--size)] opacity-[var(--opacity)] top-[var(--y)] left-[var(--x)] animate-pulse duration-1000 ease-in-out"
      aria-hidden
    />
  );
};

export default function Particles({ quantity = 10, className, ...props  }: ParticlesProps) {
  return (
  <div className={cn("w-full h-full min-h-4", className)} {...props}>
    <div className="w-full h-full relative">
        {Array.from({ length: quantity }).map((_, index: number) => (
            <Particle key={index} />
        ))}
    </div>
  </div>
  );
}
