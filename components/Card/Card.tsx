"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import styles from "./card.module.css";

type CardProps = {
  children: ReactNode;
  type: "primary" | "secondary" | "tertiary";
  grow?: boolean;
  hasBlockquote?: boolean;
  delay?: number;
};

export default function Card({
  children,
  type,
  grow,
  hasBlockquote,
  delay = 0,
}: CardProps) {
  const cardStyles = clsx(styles.card, {
    [styles.primary]: type === "primary",
    [styles.secondary]: type === "secondary",
    [styles.tertiary]: type === "tertiary",
    [styles.grow]: grow,
    [styles.hasBlockquote]: hasBlockquote,
  });
  return (
    <motion.section
      className={cardStyles}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay, ease: "easeInOut" }}
    >
      {children}
    </motion.section>
  );
}
