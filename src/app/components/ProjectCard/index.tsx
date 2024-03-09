import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import TechnologyCard from "../TechnologyCard";
import rightArrowIcon from "../../../../public/static/icons/rightArrow.svg";
import { ProjectCardProps } from "../ProjectsPage/types";
import { TechnologyCardProps } from "../TechnologyCard/types";

type CombinedProps = ProjectCardProps & TechnologyCardProps;

const ProjectCard: React.FC<CombinedProps> = ({
  name,
  description,
  img,
  isRightContainerOpen,
  setIsRightContainerOpen,
  react,
  javascript,
  html,
  mongodb,
  css,
  express,
  setVisibleProject,
  project,
}) => (
  <>
    {!isRightContainerOpen ? (
      <motion.div
        className={`${styles.fullContainer} ${
          isRightContainerOpen && styles.closed
        }`}
      >
        {!isRightContainerOpen && (
          <button
            onClick={() => {
              setIsRightContainerOpen(true);
              setVisibleProject(project);
            }}
            className={styles.openMore}
          >
            <img
              src={rightArrowIcon.src}
              alt="Open more"
              className={styles.arrowIcon}
            />
          </button>
        )}
        <div
          onClick={() => {
            setIsRightContainerOpen(true);
            setVisibleProject(project);
          }}
          className={styles.link}
        >
          <h1 className={styles.projectTitle}>{name}</h1>
          <div
            className={`${styles.mainContainer} ${
              isRightContainerOpen && styles.closed
            }`}
          >
            <div className={styles.imgContainer}>
              <Image
                height={500}
                width={500}
                src={img}
                alt={`${name} project thumbnail`}
                className={styles.projectImg}
              />
            </div>
          </div>
        </div>
        {!isRightContainerOpen && (
          <div className={styles.textContainer}>
            <p>{description}</p>
            <div className={styles.bottomContainer}>
              <TechnologyCard
                react={react}
                javascript={javascript}
                html={html}
                mongodb={mongodb}
                express={express}
                css={css}
              />
            </div>
          </div>
        )}
      </motion.div>
    ) : (
      <motion.div
        className={`${styles.fullContainer} ${
          isRightContainerOpen && styles.closed
        }`}
      >
        <div
          onClick={() => {
            setIsRightContainerOpen(true);
            setVisibleProject(project);
          }}
          className={styles.link}
        >
          <h1 className={styles.projectTitle}>{name}</h1>
          <div
            className={`${styles.mainContainer} ${
              isRightContainerOpen && styles.closed
            }`}
          >
            <div className={`${styles.imgContainer} ${styles.closed}`}>
              <Image
                height={500}
                width={500}
                src={img}
                alt={`${name} project thumbnail`}
                className={`${styles.projectImg} ${styles.closed}`}
              />
            </div>
          </div>
        </div>
      </motion.div>
    )}
  </>
);

export default ProjectCard;
