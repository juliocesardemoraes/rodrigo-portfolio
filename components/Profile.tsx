import Link from "next/link";
import React from "react";
import ImageComponent from "./Image";
import styles from "@/styles/Home.module.scss";
import rodrigo from "../public/rodrigo2x.png";
import logoInstagram from "../public/logoInstagram.svg";
import logoLinkedin from "../public/logoLinkedin.svg";
import logoX from "../public/logoX.svg";
import commit from "../public/commit.svg";
import loop from "../public/loop.svg";
import arrow from "../public/arrow-left.svg";
import line from "../public/line.svg";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <motion.div
      initial={{
        x: "-100%",
        scale: 0.1,
        opacity: 0,
      }}
      animate={{
        x: ["-100%", "0%", "0%", "0%"],
        scale: [0.1, 0.1, 0.1, 1],
        opacity: [0, 1],
      }}
    >
      <main className={`${styles.main} ${styles.pos__relative}`}>
        <div>
          <ImageComponent
            src={rodrigo}
            alt="Image of the website owner"
            className={`${styles.profile__image}`}
            priority={true}
          ></ImageComponent>
        </div>
        <div className={`ml__3 ${styles.pos__relative}`}>
          <ImageComponent
            src={arrow}
            alt="Image of an arrow"
            className={`${styles.pos__absolute} ${styles.drawing} ${styles.arrow}`}
          ></ImageComponent>
          <ImageComponent
            src={loop}
            alt="Image of a loop"
            className={`${styles.pos__absolute} ${styles.drawing} ${styles.loop}`}
          ></ImageComponent>
          <ImageComponent
            src={line}
            alt="Image of a line"
            className={`${styles.pos__absolute} ${styles.drawing} ${styles.line}`}
          ></ImageComponent>
          <h1 className={`${styles.title}`}>
            Rodrigo<br></br>_Carvalho
          </h1>
          <p className={`${styles.description}`}>
            Apaixonado por tecnologia, com experiência em desenvolvimento e
            escalabilidade de sistemas e plataformas, colaborando com o
            crescimento e inovação em importantes empresas, como Farmácias APP,
            Riachuelo e Magalu.
          </p>
          <div className={`${styles.contact}`}>
            <Link
              href="https://www.linkedin.com/in/rodrigo-f-carvalho/"
              target="_blank"
            >
              <ImageComponent
                src={logoLinkedin}
                className={`${styles.icon}`}
                alt="logo from linkedin"
              ></ImageComponent>
            </Link>
            <Link
              href="https://www.instagram.com/rodrigocarvalholobo/"
              target="_blank"
            >
              <ImageComponent
                src={logoInstagram}
                className={`${styles.icon}`}
                alt="logo from instagram"
              ></ImageComponent>
            </Link>
            <Link href="https://twitter.com/" target="_blank">
              <ImageComponent
                src={logoX}
                className={`${styles.icon}`}
                alt="logo from X"
              ></ImageComponent>
            </Link>
          </div>
        </div>
        <hr
          className={`${styles.container__vertical__separator} ${styles.vertical__separator__left}`}
        ></hr>
        <div className={`${styles.container__vertical}`}>
          <span className={`${styles.container__vertical__text}`}>
            feito é melhor que perfeito
          </span>
          <hr className={`${styles.container__vertical__separator}`}></hr>
        </div>
      </main>
      <footer className={`${styles.information}`}>
        2023 © Todos os direitos reservados
        <ImageComponent
          src={commit}
          alt={"Image of an commit symbol"}
        ></ImageComponent>
        <div>
          Reinventado por
          <Link
            href="https://eduardosilveira.com/"
            target="_blank"
            className={`${styles.soft__link}`}
          >
            <span> eduardosilveira.com</span>
          </Link>
        </div>
      </footer>
    </motion.div>
  );
}
