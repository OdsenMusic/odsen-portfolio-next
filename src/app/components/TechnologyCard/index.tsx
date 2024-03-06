import React from "react";
import styles from "./styles.module.css";
import htmlIcon from "../../../../public/static/icons/html.svg";
import javascriptIcon from "../../../../public/static/icons/javascript.svg";
import mongodbIcon from "../../../../public/static/icons/mongodb.svg";
import reactIcon from "../../../../public/static/icons/react.svg";

export const TechnologyCard: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <img className={styles.technologyIcon} src={htmlIcon.src} alt="" />
      <img className={styles.technologyIcon} src={javascriptIcon.src} alt="" />
      <img className={styles.technologyIcon} src={mongodbIcon.src} alt="" />
      <img className={styles.technologyIcon} src={reactIcon.src} alt="" />
    </div>
  );
};

export default TechnologyCard;
