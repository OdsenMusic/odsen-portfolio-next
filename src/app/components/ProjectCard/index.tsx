import styles from "./styles.module.css";
import TechnologyCard from "../TechnologyCard";
import React from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
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
      <motion.div className={styles.fullContainer}>
        <a className={styles.link} href={href}>
          <div className={styles.mainContainer}>
            <h1 className={styles.projectTitle}>{name}</h1>

            <div className={styles.imgContainer}>
              <img className={styles.projectImg} src={img} alt="" />
            </div>
          </div>
        </a>

        <AnimatePresence>
          {!isRightContainerOpen && (
            <motion.div layout="position" className={styles.textContainer}>
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default ProjectCard;
