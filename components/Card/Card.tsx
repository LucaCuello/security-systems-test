import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./card.module.css";

type CardProps = {
  children: ReactNode;
  type: "primary" | "secondary" | "tertiary";
};

export default function Card({ children, type }: CardProps) {
  const cardStyles = clsx(styles.card, {
    [styles.primary]: type === "primary",
    [styles.secondary]: type === "secondary",
    [styles.tertiary]: type === "tertiary",
  });
  return <section className={cardStyles}>{children}</section>;
}
