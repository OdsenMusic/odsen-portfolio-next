"use client";
import {
  glotonProject,
  taskerProject,
  calculatorProject,
} from "@/app/utils/projectData";
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
  const [isRightContainerOpen, setIsRightContainerOpen] = useState(true);
  const [visibleProject, setVisibleProject] = useState(glotonProject);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 3 }}
      className={styles.viewport}
    >
      <AnimatePresence mode="popLayout">
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
            href={"https://gloton.netlify.app/"}
            isRightContainerOpen={isRightContainerOpen}
            setIsRightContainerOpen={setIsRightContainerOpen}
            react={true}
            javascript={true}
            html={true}
            mongodb={true}
            css={true}
            express={true}
            setVisibleProject={setVisibleProject}
            project={glotonProject}
          />
          <ProjectCard
            img={taskerImg.src}
            description={`Note and reminder taking app. Featured with backend, groups, color personalizing and trash bin`}
            name={`Tasker`}
            href={""}
            isRightContainerOpen={isRightContainerOpen}
            setIsRightContainerOpen={setIsRightContainerOpen}
            react={true}
            javascript={true}
            html={true}
            mongodb={false}
            css={true}
            express={true}
            setVisibleProject={setVisibleProject}
            project={taskerProject}
          />
          <ProjectCard
            img={calculatorImg.src}
            description={`My first react project. Basic calculator with an excellent design and history.`}
            name={`Calculator`}
            href="https://odsencalculator.netlify.app/"
            isRightContainerOpen={isRightContainerOpen}
            setIsRightContainerOpen={setIsRightContainerOpen}
            react={true}
            javascript={true}
            html={true}
            mongodb={false}
            css={true}
            express={false}
            setVisibleProject={setVisibleProject}
            project={calculatorProject}
          />
        </motion.div>

        {isRightContainerOpen && (
          <ExpandedProject
            project={visibleProject}
            setIsRightContainerOpen={setIsRightContainerOpen}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectsPage;
