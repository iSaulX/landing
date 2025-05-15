import { cn } from "@heroui/react";
import { motion, type Variants } from "framer-motion";
export type BlurredTextProps = {
    text: string; 
    className?: string; 
    blur?: number; 
    delay?: number; 
}

export default function BlurredText({ text, className, blur = 10, delay = 0.15 }: BlurredTextProps){
    const words: string[] = text.split(" "); 
    const variants: Variants = {
        initial: {
            opacity: 0, 
            y: 10, 
            filter: `blur(${blur}px)`,
        }, 
        animate: {
            opacity: 1, 
            y: 0, 
            filter: `blur(0px)`,
        }
    }
    return ( 
        <div className={cn("flex flex-wrap gap-2 ", className)}>
            {words.map((word: string, index: number) => (
                <motion.span
                key={index}
                variants={variants}
                initial="initial"
                animate="animate"
                transition={{
                    duration: 0.3, 
                    delay: index * delay,
                }}
                >
                    {word}
                </motion.span>
            ))}
        </div>
    )
}