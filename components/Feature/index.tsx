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
  index: number;
  currentValue: number;
} & CardProps;

export default function Feature({
  title,
  description,
  logo,
  index,
  currentValue,
  ...props
}: FeatureProps) {
  // Generate a prorgress value that goes between 0 and 100 and it should takes time seconds to reach 100
  return (
    <Card
      className="w-full border-1 data-[selected=false]:dark:border-gray-700  data-[selected=false]:border-gray-200 data-[selected=true]:border-secondary data-[selected=true]:border-2 "
      data-selected={index === currentValue}
      isPressable
      {...props}
    >
      <CardBody>
        <div className="flex flex-row items-center justify-start gap-2">
          {logo}
          <h1 className="font-extrabold text-2xl">{title}</h1>
        </div>
        <p className="text-neutral-400 text-sm">{description}</p>
      </CardBody>
    </Card>
  );
}
