import React from "react";
import styles from "./styles.module.css";
import htmlIcon from "../../../../public/static/icons/html.svg";
import javascriptIcon from "../../../../public/static/icons/javascript.svg";
import mongodbIcon from "../../../../public/static/icons/mongodb.svg";
import reactIcon from "../../../../public/static/icons/react.svg";
import expressIcon from "../../../../public/static/icons/express.svg";
import cssIcon from "../../../../public/static/icons/css.svg";
import { TechnologyCardProps } from "./types";
import Image from "next/image";

export const TechnologyCard: React.FC<TechnologyCardProps> = ({
  react,
  javascript,
  mongodb,
  html,
  css,
  express,
}) => {
  return (
    <>
      <div className={styles.mainContainer}>
        {html && (
          <Image
            height={25}
            width={25}
            className={styles.technologyIcon}
            src={htmlIcon.src}
            alt=""
          />
        )}
        {css && (
          <Image
            height={25}
            width={25}
            className={styles.technologyIcon}
            src={cssIcon.src}
            alt=""
          />
        )}
        {javascript && (
          <Image
            height={25}
            width={25}
            className={styles.technologyIcon}
            src={javascriptIcon.src}
            alt=""
          />
        )}
        {mongodb && (
          <Image
            height={25}
            width={25}
            className={styles.technologyIcon}
            src={mongodbIcon.src}
            alt=""
          />
        )}
        {react && (
          <Image
            height={25}
            width={25}
            className={`${styles.technologyIcon} ${styles.reactIcon}`}
            src={reactIcon.src}
            alt=""
          />
        )}
        {express && (
          <Image
            height={25}
            width={25}
            className={`${styles.technologyIcon} ${styles.expressIcon}`}
            src={expressIcon.src}
            alt=""
          />
        )}
      </div>
    </>
  );
};

export default TechnologyCard;
