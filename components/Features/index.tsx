"use client";
import { Divider } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import Feature from "../Feature";
export default function Features() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  return (
    <section className="w-full border-1  bg-foreground-100/50 flex items-center justify-center p-5 border-y-1 dark:border-gray-900 border-gray-200">
      <div className="flex flex-col items-center justify-center gap-2 w-full lg:w-4/6">
        <p className="dark:text-primary-700 text-primary font-semibold font-mono">
          Why us?
        </p>
        <h1 className="text-5xl font-extrabold">Features</h1>
        <Divider className="my-4"/>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 w-full">
          <div className="flex flex-col lg:w-1/2 w-full gap-2">
            <Feature
              title="Fast"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Animi, dolorem laborum magnam ad praesentium modi totam
                    ducimus dolores doloribus dicta veritatis error eveniet."
            />
            <Feature
              title="Reliable"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Animi, dolorem laborum magnam ad"
            />
            <Feature
              title="Efficient"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Animi, dolorem laborum magnam ad ."
            />
          </div>
          <Image
            src="/showcase.png"
            alt="Feature name"
            width={1080}
            height={720}
            className="lg:w-1/2 w-full aspect-video rounded-xl h-full"
          />
        </div>
      </div>
    </section>
  );
}
