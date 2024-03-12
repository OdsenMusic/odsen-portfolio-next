import React from "react";
import styles from "./styles.module.css";
import appleMusicImage from "../../../../public/static/images/applemusic.png";
import rocketLeagueImage from "../../../../public/static/images/rocket league.jpg";
import monstercatLogo from "../../../../public/static/images/monstercat.svg";
import Image from "next/image";
import equalizerIcon from "../../../../public/static/icons/equalizer.svg";

const ExperienceCard = () => {
  return (
    <div className={styles.cardContainer}>
      <h3 className={styles.experienceTitle}>
        Music producer <p className={styles.time}>Jun. 2020 - Oct 2023</p>
        <Image
          className={styles.sideIcon}
          src={equalizerIcon.src}
          height={30}
          width={30}
          alt=""
        />
      </h3>
      <div className={styles.experienceTextContainer}>
        <a
          style={{ textDecoration: "none", cursor: "pointer" }}
          href="https://www.monstercat.com/"
        >
          <p className={styles.company}>Monstercat</p>
        </a>

        <p className={styles.description}>
          {`          As a music producer, Odsen, I've had the opportunity to work with the
          renowned company Monstercat. My music has been played on radio
          stations around the world, and my song "Horizon" has been featured in
          the video game "Rocket League", where my logo can also be used as a
          flag in the game.`}
          <ol className={styles.list}>
            <li className={styles.listItem}>
              {" "}
              <div className={styles.point} />
              {`              "In My Bones" achieved a remarkable milestone with 2.5 million
              plays and earned a spot on Apple Music's most prestigious playlist
              for its genre.`}
            </li>
            <li className={styles.listItem}>
              {" "}
              <div className={styles.point} />
              {`         My music has resonated with fans across the globe.`}
            </li>
            <li className={styles.listItem}>
              {" "}
              <div className={styles.point} />{" "}
              <div>
                {`      I have worked hand by hand with artists like`}
                <a
                  className={styles.linkto}
                  href="https://en.wikipedia.org/wiki/Christian_Burns"
                >
                  {" "}
                  Christian Burns{" "}
                </a>{" "}
                and{" "}
                <a
                  className={styles.linkto}
                  href="https://en.wikipedia.org/wiki/Richard_Bedford"
                >
                  Richard Bedford{" "}
                </a>
                .
              </div>
            </li>
            <li className={styles.listItem}>
              {" "}
              <div className={styles.point} />
              {`I have collaborated with the
              Australian company Zenhiser, focusing on sound design and field
              recordings.`}
            </li>

            <li className={styles.listItem}>
              {" "}
              <div className={styles.point} />
              {`       English served as the language of communication with companies,
              other producers and managers.`}
            </li>
          </ol>
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
