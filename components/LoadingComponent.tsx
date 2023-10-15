import React from "react";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";

export default function LoadingComponent() {
  return (
    <motion.div
      animate={{
        x: ["-100%", "0%", "100%"],
        scale: [0.5, 2, 0.5],
      }}
      transition={{ duration: 1 }}
    >
      <section className={`${styles.loading__container}`}>
        <h1 className={`${styles.title}`}>
          Rodrigo<br></br>_Carvalho
        </h1>
      </section>
    </motion.div>
  );
}
