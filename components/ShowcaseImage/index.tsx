import Image from "next/image";
import { cn } from "@heroui/react";
import type { ImageProps } from "next/image";
import { motion, type Variants } from "framer-motion";
export type ShowcaseImageProps = {
  delay?: number;
  className?: string;
  classNames?: {
    image?: string;
    blur?: string;
  };
} & ImageProps;

export default function ShowcaseImage({
  delay = 1.5,
  className,
  classNames,
  ...props
}: ShowcaseImageProps) {
  const variants: Variants = {
    initial: {
      opacity: 0,
      filter: "blur(5px)",
      y: 20,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
    },
  };

  const blurVariants: Variants = {
    initial: {
      filter: "blur(0px)",
    },
    animate: {
      filter: "blur(32px)",
    },
  };

  return (
    <motion.div
      className={cn("w-full relative", className)}
      variants={variants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 0.4,
        delay: delay,
      }}
    >
      <motion.div
        variants={blurVariants}
        initial="initial"
        animate="animate"
        transition={{
            duration: 1,
            delay: delay + 0.4,
        }}
        className={cn(
          "absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-to-t from-amber-700 to-yellow-500 -z-10  ",
          classNames?.blur
        )}
      />
      <Image
        {...props}
        className={cn(
          "aspect-video w-full object-cover rounded-xl",
          classNames?.image
        )}
      />
    </motion.div>
  );
}
