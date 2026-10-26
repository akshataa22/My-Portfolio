"use client";

import * as m from "motion/react-m";
import type { Variants } from "motion/react";
import type { ReactNode } from "react";

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export function RevealOnScroll({ children, className }: RevealProps) {
  return (
    <m.div
      className={className}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </m.div>
  );
}

export function StaggerList({ children, className }: RevealProps) {
  return (
    <m.ul
      className={className}
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </m.ul>
  );
}

export function StaggerItem({ children, className }: RevealProps) {
  return (
    <m.li className={className} variants={itemVariants}>
      {children}
    </m.li>
  );
}
