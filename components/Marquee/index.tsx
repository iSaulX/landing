import type { ReactNode, ComponentPropsWithoutRef } from "react"; 
import { cn } from "@heroui/react";
import { motion } from "framer-motion"; 

export type MarqueeProps = {
    children: ReactNode; 
    className?: string; 
    duration?: number; 
    repeat?: number; 
    direction?: "left" | "right";
} & ComponentPropsWithoutRef<"div">;

export default function Marquee({
    children, 
    className, 
    duration = 40, 
    repeat = 4, 
    direction = "left",
    ...props
}: MarqueeProps){
    return ( 
        <div className={cn("overflow-hidden flex flex-row items-center justify-center w-full  gap-2", className)} {...props}>
            {Array.from({ length: repeat }).map((_, index) => (
                <motion.div key={index} 
                animate={{
                    x: direction === "left" ? ["100%", "-100%"] : ["-100%", "100%"],
                }}
                transition={{
                    duration: duration,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex flex-row gap-2"
                >
                    {children}
                </motion.div>
            ))}
        </div>
    )
}