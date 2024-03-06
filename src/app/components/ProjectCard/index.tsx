import styles from "./styles.module.css";
import TechnologyCard from "../TechnologyCard";
import React from "react";
import { ProjectCardProps } from "../ProjectsPage/types";

const ProjectCard: React.FC<ProjectCardProps> = ({
  setCursorVariant,
  name,
  description,
  img,
  stack,
  href,
  isRightContainerOpen,
  setIsRightContainerOpen,
}) => {
  return (
    <div className={styles.fullContainer}>
      <a
        onMouseEnter={() => setCursorVariant("hover")}
        onMouseLeave={() => setCursorVariant("default")}
        className={styles.link}
        href={href}
      >
        <div className={styles.mainContainer}>
          <h1 className={styles.projectTitle}>{name}</h1>

          <div className={styles.imgContainer}>
            <img className={styles.projectImg} src={img} alt="" />
          </div>
        </div>
      </a>
      {!isRightContainerOpen && (
        <>
          <div className={styles.textContainer}>
            <p>
              {description}
              <br /> <br />
            </p>
            <TechnologyCard />
          </div>

          <button
            onClick={() => {
              setIsRightContainerOpen(true);
            }}
            className={styles.openMore}
          >
            +
          </button>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
