import styles from "./styles.module.css";
import { motion } from "framer-motion";
import React from "react";
import { ExpandedProjectProps } from "./types";
import crossIcon from "../../../../public/static/icons/crossIcon.svg";

export const ExpandedProject: React.FC<ExpandedProjectProps> = ({
  setIsRightContainerOpen,
  project,
}) => {
  const initialTransition = {
    ease: "easeOut",
    duration: 0.6,
    delay: 0.4,
  };

  const exitTransition = {
    ease: "easeOut",
    duration: 0.1,
    delay: 0,
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 200 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{
        opacity: 0,
        translateY: 200,
        transition: exitTransition,
      }}
      transition={initialTransition}
      className={styles.expandedContainer}
    >
      <div className={styles.topBar}></div>

      <button
        className={styles.closeButton}
        onClick={() => {
          setIsRightContainerOpen(false);
        }}
      >
        <img className={styles.crossIcon} src={crossIcon.src} alt="" />
      </button>
      <div className={styles.textContainer}>{project}</div>
      <aside className={styles.buttonContainer}>
        <a href="https://gloton.netlify.app">
          <button className={styles.bottomButton}>Website</button>
        </a>
        <a href="https://github.com/nds-fsd/glovo">
          <button className={styles.bottomButton}>Github</button>
        </a>
      </aside>
    </motion.div>
  );
};

export default ExpandedProject;
