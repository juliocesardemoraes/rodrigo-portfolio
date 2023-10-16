import React from "react";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import ImageComponent from "./Image";
import loop from "../public/loop.svg";
import arrow from "../public/arrow-left.svg";
import LoadingSphere from "./LoadingSphere";
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
    >
      <LoadingSphere></LoadingSphere>
      <motion.div
        initial={{
          x: "-50%",
          rotateY: 90,
        }}
        animate={{
          x: ["-50%", "0%", "0%", "50%"],
          rotateY: [90, 0, 0, 90],
        }}
        transition={{ duration: timer / 1000 }}
      >
        <div className={`${styles.pos__relative}`}>
          <h1 className={`${styles.title}`}>
            Rodrigo<br></br>_Carvalho
          </h1>
          <ImageComponent
            src={loop}
            alt="Image of a loop"
            width={40}
            height={40}
            className={`${styles.pos__absolute} ${styles.drawing} ${styles.loop}`}
          ></ImageComponent>
          <ImageComponent
            src={arrow}
            alt="Image of an arrow"
            width={40}
            height={40}
            className={`${styles.pos__absolute} ${styles.drawing} ${styles.arrow}`}
          ></ImageComponent>
        </div>
      </motion.div>
    </motion.section>
  );
}
