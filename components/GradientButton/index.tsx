import { Button, cn } from "@heroui/react";
import { motion } from "framer-motion";

export type GradientButtonProps = {
    text: string;
    className?: string;
    classNames?: {
        button?: string;
        blur?: string; 
    };
    blurDelay?: number, 
};
export default function GradientButton({
    text,
    className,
    classNames,
    blurDelay = 1, 
}: GradientButtonProps) {
    return (
        <div
            className={cn(
                "p-0.5 bg-gradient-to-r from-pink-400 via-yellow-400 to-violet-500 rounded-xl relative ",
                className
            )}
        >
            <motion.div
            initial={{
                filter: "blur(0px)",
            }}
            animate={{
                filter: "blur(20px)", 
            }}

            transition={{
                duration: 0.4, 
                delay: blurDelay, 
            }}
            className={cn("absolute top-0 bottom-0 w-full h-full bg-gradient-to-r from-pink-400 via-yellow-400 to-violet-500 rounded-xl", classNames?.blur)}/>
            <Button
                variant="flat"
                className={cn("bg-background rounded-[10px] w-full", classNames?.button)}
            >
                {text}
            </Button>
        </div>
    );
}
