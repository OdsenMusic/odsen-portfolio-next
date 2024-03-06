import styles from "./styles.module.css";
import TechnologyCard from "../TechnologyCard";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCardProps } from "../ProjectsPage/types";
import { TechnologyCardProps } from "../TechnologyCard/types";

type CombinedProps = ProjectCardProps & TechnologyCardProps;

const ProjectCard: React.FC<CombinedProps> = ({
  name,
  description,
  img,
  stack,
  href,
  isRightContainerOpen,
  setIsRightContainerOpen,
  react,
  javascript,
  html,
  mongodb,
  css,
  express,
}) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {!isRightContainerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.fullContainer}
          >
            <a className={styles.link} href={href}>
              <div className={styles.mainContainer}>
                <h1 className={styles.projectTitle}>{name}</h1>

                <div className={styles.imgContainer}>
                  <img className={styles.projectImg} src={img} alt="" />
                </div>
              </div>
            </a>

            <>
              <div className={styles.textContainer}>
                <p>
                  {description}
                  <br /> <br />
                </p>
                <div className={styles.bottomContainer}>
                  <TechnologyCard
                    react={react}
                    javascript={javascript}
                    html={html}
                    mongodb={mongodb}
                    express={express}
                    css={css}
                  />
                  <button
                    onClick={() => {
                      setIsRightContainerOpen(true);
                    }}
                    className={styles.openMore}
                  >
                    +
                  </button>
                </div>
              </div>
            </>
          </motion.div>
        )}{" "}
      </AnimatePresence>

      {isRightContainerOpen && (
        <h1 className={styles.projectTitleSmall}>
          {name} <button className={styles.openMore}> + </button>
        </h1>
      )}
    </>
  );
};

export default ProjectCard;
