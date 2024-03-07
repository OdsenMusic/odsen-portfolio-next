"use client";

import styles from "./styles.module.css";
import {
  motion,
  AnimatePresence,
  easeInOut,
  easeOut,
  LayoutGroup,
} from "framer-motion";
import ProjectCard from "../ProjectCard";
import React, { useState, FC } from "react";
import glotonImg from "../../../../public/static/images/glotonImg.gif";
import calculatorImg from "../../../../public/static/images/calculatorImg.jpg";
import taskerImg from "../../../../public/static/images/taskerImg.jpg";
import { ExpandedProject } from "../ExpandedProject";

export const ProjectsPage: FC = () => {
  const [isRightContainerOpen, setIsRightContainerOpen] = useState(false);

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 3 }}
      className={styles.viewport}
    >
      <LayoutGroup>
        <motion.div
          layout="position"
          transition={{
            duration: 0.5,
            ease: [0.65, 0.05, 0.36, 1],
          }}
          initial={{ opacity: 0, translateY: 200 }}
          animate={{ opacity: 1, translateY: 0 }}
          className={`${styles.mainContainer} ${
            isRightContainerOpen && styles.closed
          }`}
        >
          {" "}
          <ProjectCard
            img={glotonImg.src}
            description={`Biggest project so far. Based off of the Glovo website, its a fully
          functional website with login and able to make purchases.`}
            name={`Gloton`}
            stack={`          HTML, CSS, JavaScript, React, ExpressJS, MongoDB, JWT, Jest, Cypress
          `}
            href={"https://gloton.netlify.app/"}
            isRightContainerOpen={isRightContainerOpen}
            setIsRightContainerOpen={setIsRightContainerOpen}
            react={true}
            javascript={true}
            html={true}
            mongodb={true}
            css={true}
            express={true}
          />
          <ProjectCard
            img={taskerImg.src}
            description={`Note and reminder taking app. Featured with backend, groups, color personalizing and trash bin`}
            name={`Tasker`}
            stack={`          HTML, CSS, JavaScript, React, ExpressJS.
          `}
            href={""}
            isRightContainerOpen={isRightContainerOpen}
            setIsRightContainerOpen={setIsRightContainerOpen}
            react={true}
            javascript={true}
            html={true}
            mongodb={false}
            css={true}
            express={true}
          />
          <ProjectCard
            img={calculatorImg.src}
            description={`My first react project. Basic calculator with an excellent design and history.`}
            name={`Calculator`}
            stack={`HTML, CSS, JavaScript, React.
            `}
            href="https://odsencalculator.netlify.app/"
            isRightContainerOpen={isRightContainerOpen}
            setIsRightContainerOpen={setIsRightContainerOpen}
            react={true}
            javascript={true}
            html={true}
            mongodb={false}
            css={true}
            express={false}
          />
        </motion.div>
        <AnimatePresence mode="popLayout">
          {isRightContainerOpen && (
            <ExpandedProject
              setIsRightContainerOpen={setIsRightContainerOpen}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </motion.div>
  );
};

export default ProjectsPage;
