import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./card.module.css";

type CardProps = {
  children: ReactNode;
  type: "primary" | "secondary" | "tertiary";
  grow?: boolean;
  hasBlockquote?: boolean;
};

export default function Card({
  children,
  type,
  grow,
  hasBlockquote,
}: CardProps) {
  const cardStyles = clsx(styles.card, {
    [styles.primary]: type === "primary",
    [styles.secondary]: type === "secondary",
    [styles.tertiary]: type === "tertiary",
    [styles.grow]: grow,
    [styles.hasBlockquote]: hasBlockquote,
  });
  return <section className={cardStyles}>{children}</section>;
}
