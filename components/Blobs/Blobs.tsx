"use client";
import { motion } from "framer-motion";
import styles from "./blobs.module.css";

export default function Blobs() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
        className={`${styles.blob} ${styles.primaryBlob}`}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className={`${styles.blob} ${styles.secondaryBlob}`}
      ></motion.div>
    </>
  );
}
