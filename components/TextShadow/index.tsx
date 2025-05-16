import { cn } from "@heroui/react";

export type TextShadowProps = {
    title: string; 
    className?: string; 
    classNames?: {
        title?: string; 
        background?: string; 
    }
}
export default function TextShadow({title, className}: TextShadowProps){
    return ( 
        <div className={cn("relative w-full", className)}>
            <h2 className="absolute -top-4 left-0" aria-hidden></h2>
            <h2 className={cn("font-extrabold text-2xl")}>{title}</h2>
        </div>
    )
}