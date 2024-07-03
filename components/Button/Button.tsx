import { ReactNode } from "react";
import styles from "./button.module.css";

type buttonProps = {
  children: ReactNode;
};

export default function Button({ children }: buttonProps) {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
}
