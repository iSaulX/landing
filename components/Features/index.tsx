"use client";
import { Divider } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import Feature from "../Feature";
import { motion } from "framer-motion";
import { GoHeartFill as Heart } from "react-icons/go";

function Icon(){
    return (
        <div className="flex items-center justify-center relative">
            <Heart className="absolute text-red-500 blur-sm text-xl"/>
            <Heart className="text-red-500 text-xl" />
        </div>
    )
}

const features = ["Fast", "Reliable", "Efficient"];
export default function Features() {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [diretion, setDirection] = useState<"left" | "right">("left");
    return (
        <section className="w-full border-1  bg-foreground-100/50 flex items-center justify-center p-5 border-y-1 dark:border-gray-900 border-gray-200">
            <div className="flex flex-col items-center justify-center gap-2 w-full lg:w-4/6">
                <p className="dark:text-primary-700 text-primary font-semibold font-mono">
                    Why us?
                </p>
                <h1 className="text-5xl font-extrabold">Features</h1>
                <Divider className="my-4" />
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 w-full">
                    <div className="flex flex-col lg:w-1/2 w-full gap-2">
                        {features.map((feature, index) => (
                            <Feature
                                key={index}
                                title={feature}
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                logo={<Icon />}
                                index={index}
                                currentValue={currentImageIndex}
                                onPress={() => {
                                    setCurrentImageIndex(index);
                                    setDirection(index > currentImageIndex ? "right" : "left");
                                }}
                            />
                        ))}
                    </div>
                    <motion.div
                        className="lg:w-1/2 w-full"
                        key={currentImageIndex}
                        initial={{
                            opacity: 0,
                            x: diretion === "left" ? 50 : -50,
                            filter: "blur(6px)",
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            filter: "blur(0px)",
                        }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {/* Replace this with an array of your current images usign currentIndexImage to access the image */}
                        <Image
                            src="/showcase.png"
                            alt="Feature name"
                            width={1080}
                            height={720}
                            className="w-full aspect-video rounded-xl h-full"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
