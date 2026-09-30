"use client";

import { motion, type HTMLMotionProps } from "motion/react";

const ease = [0.2, 0.7, 0.2, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  /** Stagger step, 1-based: each step adds 120ms of delay. */
  step?: number;
};

export function Reveal({ step = 1, transition, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.8, ease, delay: (step - 1) * 0.12, ...transition }}
      {...props}
    />
  );
}
