"use client";
import { Divider, Card, CardBody } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import Feature from "../Feature";
import { motion } from "framer-motion";
import { GoHeartFill as Heart } from "react-icons/go";
import { FaReact as React, FaClock as Clock, FaMoon as Moon } from "react-icons/fa";
function Icon(){
    return (
        <div className="flex items-center justify-center relative">
            <Heart className="absolute text-red-500 blur-sm text-xl"/>
            <Heart className="text-red-500 text-xl" />
        </div>
    )
}

function Tool(){
    
}


const features = ["Fast", "Reliable", "Efficient"];
export default function Features() {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [diretion, setDirection] = useState<"left" | "right">("left");
    return (
        <>
        <section className="w-full border-1  bg-foreground-100/50 flex items-center justify-center p-5 border-y-1 dark:border-gray-900 border-gray-200">
            <div className="flex flex-col items-center justify-center gap-2 w-full lg:w-4/6">
                <p className="dark:text-primary-700 text-primary font-semibold font-mono" id="features">
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
        <section className="w-full flex items-center justify-center px-3 py-12">
            <div className="flex flex-col items-start justify-start gap-2 w-full lg:w-4/6">
            <p className="font-semibold text-secondary font-mono text-small">Why are you gonna love us?</p>
            <h2 className="font-extrabold text-4xl">We're not another {" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    tool
                </span>.
            </h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 w-full">
                <Card>
                    <CardBody className="relative">
                        <div className="absolute top-2 right-2">
                        <div className="relative flex items-center justify-center">
                            <React className="text-primary absolute blur-lg text-4xl"/>
                            <React className="text-primary text-4xl"/>
                        </div>
                        </div>
                        <h2 className="font-semibold text-xl">Tool</h2>
                        <p className="text-neutral-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nesciunt voluptatibus cupiditate sunt, quis asperiores quo dolorum minus consequatur? Eaque nostrum beatae rerum ullam repellendus similique facilis consequatur. Nemo, alias!</p>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="relative">
                    <div className="absolute top-2 right-2">
                        <div className="relative flex items-center justify-center">
                            <Clock className="text-secondary absolute blur-lg text-4xl"/>
                            <Clock className="text-secondary text-4xl"/>
                        </div>
                        </div>
                        <h2 className="font-semibold text-xl">Tool</h2>
                        <p className="text-neutral-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nesciunt voluptatibus cupiditate sunt, quis asperiores quo dolorum minus consequatur? Eaque nostrum beatae rerum ullam repellendus similique facilis consequatur. Nemo, alias!</p>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody className="relative">
                        <div className="absolute top-2 right-2">
                        <div className="relative flex items-center justify-center">
                            <Moon className="text-yellow-400 absolute blur-lg text-4xl"/>
                            <Moon className="text-yellow-400 text-4xl"/>
                            </div>

                        </div>
                        <h2 className="font-semibold text-xl">Tool</h2>
                        <p className="text-neutral-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nesciunt voluptatibus cupiditate sunt, quis asperiores quo dolorum minus consequatur? Eaque nostrum beatae rerum ullam repellendus similique facilis consequatur. Nemo, alias!</p>
                    </CardBody>
                </Card>
            </div>
            </div>
        </section>
        </>
    );
}
