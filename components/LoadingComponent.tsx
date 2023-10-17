import React from "react";
import styles from "@/styles/Home.module.scss";
import { motion } from "framer-motion";
import { timer } from "@/utils/utils";

export default function LoadingComponent() {
  return (
    <motion.section
      className={`${styles.loading__container}`}
      initial={{
        x: "-100%",
      }}
      animate={{
        x: ["-100%", "0%", "0%", "0%", "0%", "0%", "100%"],
      }}
      transition={{ duration: timer / 1000 }}
    ></motion.section>
  );
}
