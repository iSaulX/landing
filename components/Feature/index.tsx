"use client";
import type { CardProps } from "@heroui/react";
import { Card, CardBody, Progress } from "@heroui/react";
import type { ReactNode, Dispatch, SetStateAction } from "react";
import {  useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
export type FeatureProps = {
  title: string;
  description: string;
  logo?: ReactNode;
  time?: number;
  index: number;
  currentValue: number;
  setIndex: Dispatch<SetStateAction<number>>;
} & CardProps;

export default function Feature({
  title,
  description,
  logo,
  time = 8,
  index,
  currentValue,
  setIndex,
  ...props
}: FeatureProps) {
  // Generate a prorgress value that goes between 0 and 100 and it should takes time seconds to reach 100
  const [progress, setProgress] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(cardRef, {
    once: true, 
    margin: "-100px",
  });

  useEffect(() => {
    if (isVisible && currentValue === index){
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 0;
                }
                return prev + 1;
            })
        }, 100)
        if (progress >= 100) {
            setIndex(index + 1);
        }
        return () => {
            clearInterval(interval);
        }
    }
  }, [isVisible, currentValue, index, progress]);

  return (
    <Card
      className="w-full border-1 data-[selected=false]:dark:border-gray-700  data-[selected=false]:border-gray-200 data-[selected=true]:border-secondary data-[selected=true]:border-2 "
      data-selected={index === currentValue}
      isPressable
      ref={cardRef}
      {...props}
    >
      <CardBody>
        <h3 className="font-semibold font-mono text-xl">{title}</h3>
        <p className="text-neutral-400 text-sm">{description}</p>
        {index === currentValue && (
          <Progress value={progress} className="h-2 my-1" color="secondary" aria-label="Timeout progress" />
        )}
      </CardBody>
    </Card>
  );
}
