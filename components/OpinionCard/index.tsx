"use client"; 
import { Card, CardBody, User} from "@heroui/react";
import { type Variants, motion } from "framer-motion";
import { useMemo } from "react";
export type OpinionProps = {
    content: string; 
    author: string; 
    role: string;
}

const OpinionCardVariants: Variants = {
    hidden: {
        opacity: 0, 
    }, 
    animate: {
        opacity: 1,
    }
}

function getRandomDelay(): number {
    const min = 0.5; 
    const max = 1.5; 
    return Math.random() * (max - min) + min;
}
export default function OpinionCard({content, author, role}: OpinionProps){
    const randomDelay = useMemo(() => getRandomDelay(), []);
    return ( 
        <motion.div variants={OpinionCardVariants} initial="hidden" whileInView="animate" className="lg:w-[340px] w-[200px] "
        transition={{
            delay: randomDelay,
            duration: 0.4,
        }}
        viewport={{ once: true, amount: 0.2 }}>
        <Card className="border-1 dark:border-gray-800 border-gray-200 shadow-none h-full">
            <CardBody>
                <p className="font-semibold">{content}</p>
                <div className="w-full flex items-start justify-start my-2 mt-auto">
                <User 
                name={author}
                description={role}
                className="mt-2"
                />
                </div>
            </CardBody>
        </Card>
        </motion.div>
    )
}