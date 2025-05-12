import { cn } from "@heroui/react";

export type GlowingTextProps = {
    text: string;
    className?: string;
    classNames?: {
        text?: string;
        gradient?: string;
    };
};

export default function GlowingText({
    text,
    className,
    classNames,
}: GlowingTextProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center justify-center relative",
                className
            )}
        >
            <span
                className={cn(
                    "font-extrabold bg-gradient-to-r from-pink-400 to-yellow-400 via-violet-500 bg-clip-text text-transparent",
                    classNames?.text
                )}
            >
                {text}
            </span>
            <span
                className={cn(
                    "absolute  bg-gradient-to-r from-pink-400 to-yellow-400 via-violet-500 bg-clip-text text-transparent blur-xl",
                    classNames?.gradient
                )}
                aria-hidden
            >
                {text}
            </span>
        </div>
    );
}
