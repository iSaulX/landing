"use client";
import { Progress, Card, CardBody } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";

export default function Features() {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); 

    return (
        <section className="w-full border-1  bg-foreground-100/50 flex items-center justify-center p-5 border-y-1 dark:border-gray-900 border-gray-200">
            <div className="flex flex-col items-center justify-center gap-2 w-full lg:w-4/6">
                <p className="dark:text-primary-700 text-primary font-semibold font-mono">
                    Why us?
                </p>
                <h1 className="text-5xl font-extrabold">Features</h1>
                <div className="flex flex-col lg:flex items-center justify-between gap-2">
                    
                </div>
            </div>
        </section>
    );
}
