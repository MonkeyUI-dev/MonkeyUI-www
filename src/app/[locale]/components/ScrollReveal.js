"use client";

import { motion } from "motion/react";

/**
 * ScrollReveal
 * Scroll-triggered animation wrapper using Framer Motion.
 * Powered by `motion` — fade + slide + blur on enter viewport.
 *
 * Props:
 *  - tag: HTML element tag (default "div")
 *  - className: extra classes
 *  - delay: stagger delay in seconds (default 0)
 *  - once: only animate once (default true)
 *  - variant: "up" | "left" | "right" | "scale" (default "up")
 *  - children
 */

const variants = {
  up: {
    hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  left: {
    hidden: { opacity: 0, x: -32, filter: "blur(6px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  right: {
    hidden: { opacity: 0, x: 32, filter: "blur(6px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92, filter: "blur(6px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
};

const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  details: motion.details,
};

export default function ScrollReveal({
  tag = "div",
  className = "",
  delay = 0,
  once = true,
  variant = "up",
  children,
  ...rest
}) {
  const MotionTag = motionTags[tag] || motion.div;

  return (
    <MotionTag
      className={className || undefined}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px 0px -40px 0px", amount: 0.15 }}
      variants={variants[variant] || variants.up}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
