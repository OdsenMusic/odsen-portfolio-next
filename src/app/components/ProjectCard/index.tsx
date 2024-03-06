import styles from "./styles.module.css";
import React from "react";
import { ProjectCardProps } from "../ProjectsPage/types";

const ProjectCard: React.FC<ProjectCardProps> = ({
  setCursorVariant,
  name,
  description,
  img,
  stack,
  href,
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
      <div className={styles.textContainer}>
        <p>
          {description}
          <br /> <br />
          <h3 className={styles.subtitle}>Technology Stack</h3> <br />
          {stack}{" "}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
