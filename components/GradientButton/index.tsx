import { Button, cn } from "@heroui/react";
export type GradientButtonProps = {
    text: string;
    className?: string;
    classNames?: {
        button?: string;
    };
};
export default function GradientButton({
    text,
    className,
    classNames,
}: GradientButtonProps) {
    return (
        <div
            className={cn(
                "p-0.5 bg-gradient-to-r from-pink-400 via-yellow-400 to-violet-500 rounded-xl",
                className
            )}
        >
            <Button
                variant="flat"
                className={cn("bg-background rounded-[10px]", classNames?.button)}
            >
                {text}
            </Button>
        </div>
    );
}
