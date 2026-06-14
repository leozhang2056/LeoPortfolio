"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

const directionOffset = {
  up: { x: 0, y: 30 },
  down: { x: 0, y: -30 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
};

export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  className,
  direction = "up",
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const offset = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, ...offset },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  },
                },
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
