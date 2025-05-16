"use client";
import { ProPlan, FreePlan, EnterprisePlan } from "../Plans";
import GlowingText from "../GradientText";
import { motion } from "framer-motion";

export default function Pricing() {
    return (
        <section className="w-full flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-2 w-full lg:w-4/6 py-12 px-3">
                <p className="text-small text-neutral-400">Pricing.</p>
                <h2 className="font-extrabold text-5xl w-full text-center">
                    Simple, easy and transparent <GlowingText text="pricing" />.{" "}
                </h2>
                <p className="font-semibold text-neutral-400 text-center">
                    We offer plans for every need, choose which one fits you better.
                </p>
                <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row items-end my-8 justify-center w-full">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                            x: -20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            x: 0,
                        }}
                        transition={{
                            delay: 0.8,
                            duration: 0.4, 
                        }}
                        viewport={{ once: true }}
                        className="lg:w-1/3  w-full"
                    >
                        <FreePlan />
                    </motion.div>
                    <motion.div
                        className="lg:w-1/3  w-full"
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.8,
                            duration: 0.4, 
                        }}
                        viewport={{ once: true }}
                    >
                        <ProPlan />
                    </motion.div>
                    <motion.div
                        className="lg:w-1/3  w-full"
                        initial={{
                            opacity: 0,
                            y: 20,
                            x: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            x: 0,
                        }}
                        transition={{
                            delay: 0.8,
                            duration: 0.4, 

                        }}
                        viewport={{ once: true }}
                    >
                        <EnterprisePlan />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
