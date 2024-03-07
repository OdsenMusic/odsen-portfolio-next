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
  href,
  isRightContainerOpen,
  setIsRightContainerOpen,
  react,
  javascript,
  html,
  mongodb,
  css,
  express,
}) => (
  <motion.div className={styles.fullContainer}>
    {!isRightContainerOpen && (
      <button
        onClick={() => setIsRightContainerOpen(true)}
        className={styles.openMore}
      >
        <img
          src={rightArrowIcon.src}
          alt="Open more"
          className={styles.arrowIcon}
        />
      </button>
    )}
    <a href={href} className={styles.link}>
      <h1 className={styles.projectTitle}>{name}</h1>
      <div className={styles.mainContainer}>
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
    </a>
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
);

export default ProjectCard;
