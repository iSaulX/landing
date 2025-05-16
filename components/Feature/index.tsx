import type { CardProps } from "@heroui/react";
import { Card, CardBody, Progress } from "@heroui/react";
import type  { ReactNode, Dispatch, SetStateAction } from "react";
import { useCallback, useEffect, useState } from "react";
export type FeatureProps = {
    title: string; 
    description: string; 
    logo?: ReactNode; 
    time?: number; 
}

export default function Feature({ title, description, logo, time = 8 }: FeatureProps){
    const [progress, setProgress] = useState<number>(0);

    const incrementProgress = useCallback(() => {
        setProgress((prev) => (prev < 100 ? prev + 1 : prev));
    }, []);
    const resetProgress = useCallback(() => {
        setProgress(0);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            incrementProgress();
        }, );
        return () => clearInterval(interval);
    }, [incrementProgress, time]);
    return ( 
        <Card className="w-full border-1 dark:border-gray-700 border-gray-200" isPressable>
        <CardBody>
          <h3 className="font-semibold font-mono text-xl">{title}</h3>
          <p className="text-neutral-400 text-sm">
            {description}
          </p>
          <Progress value={progress} className="h-2 my-1"
          classNames={{
            indicator: "bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 ",
          }}
          />
        </CardBody>
      </Card>
    )
}