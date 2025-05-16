"use client"; 
import { cn } from "@heroui/react";
export type BackgroundTextProps = {
    text: string; 
    className?: string; 
}
export default function BackgroundText({ text, className}: BackgroundTextProps){
    return ( 
        <div className={cn("absolute", className)}>

        </div>
    )
}