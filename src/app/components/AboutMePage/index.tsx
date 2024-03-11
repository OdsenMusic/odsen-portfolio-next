"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import Image from "next/image";
import joelBackground from "../../../../public/static/images/joelBackgroud.png";
import githubIcon from "../../../../public/static/icons/githubIcon.svg";
import linkedinIcon from "../../../../public/static/icons/linkedinIcon.svg";
import spotifyIcon from "../../../../public/static/icons/spotifyIcon.svg";
import mailIcon from "../../../../public/static/icons/mailIcon.svg";
import cvIcon from "../../../../public/static/icons/cvIcon.svg";

const AboutMePage = () => {
  return (
    <div className={styles.viewport}>
      <motion.div
        initial={{ opacity: 0, translateY: 200 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className={styles.mainContainer}
      >
        <header className={styles.aboutHeader}>
          <aside className={styles.buttonContainer}>
            <motion.a
              whileTap={{ scale: 1 }}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href=""
            >
              <button className={styles.bottomButton}>
                <Image
                  src={githubIcon.src}
                  className={styles.buttonIcon}
                  height={40}
                  width={40}
                  alt=""
                />
              </button>
            </motion.a>
            <motion.a
              whileTap={{ scale: 1 }}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href=""
            >
              <button className={styles.bottomButton}>
                <Image
                  src={linkedinIcon.src}
                  className={styles.buttonIcon}
                  height={40}
                  width={40}
                  alt=""
                />
              </button>
            </motion.a>
            <motion.a
              whileTap={{ scale: 1 }}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href=""
            >
              <button className={styles.bottomButton}>
                <Image
                  src={spotifyIcon.src}
                  className={styles.buttonIcon}
                  height={40}
                  width={40}
                  alt=""
                />
              </button>
            </motion.a>

            <motion.a
              whileTap={{ scale: 1 }}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href=""
            >
              <button className={styles.bottomButton}>
                <Image
                  src={mailIcon.src}
                  className={styles.buttonIcon}
                  height={40}
                  width={40}
                  alt=""
                />
              </button>
            </motion.a>

            <motion.a
              whileTap={{ scale: 1 }}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href=""
            >
              <button className={styles.bottomButton}>
                <Image
                  src={cvIcon.src}
                  className={styles.buttonIcon}
                  height={40}
                  width={40}
                  alt=""
                />
              </button>
            </motion.a>
          </aside>
          <h1 className={styles.joelName}>Joel Oliver Millán</h1>
          <Image
            height={700}
            width={1000}
            src={joelBackground.src}
            alt="Joel Oliver in the background"
            className={styles.joelBackgroundImg}
          />
        </header>

        <div className={styles.textContainer}>
          <p>
            Hola! Soy Joel. Es un placer conocerte. Soy un apasionado
            desarrollador Full Stack Junior. Tambien soy músico!
          </p>
          <h2>Experiencia</h2>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMePage;
