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
        Music producer <p className={styles.time}>Jun. 2020 - actualidad</p>
        <Image
          className={styles.sideIcon}
          src={equalizerIcon.src}
          height={30}
          width={30}
          alt=""
        />
      </h3>
      <div className={styles.experienceTextContainer}>
        <p className={styles.company}>Monstercat</p>

        <p className={styles.description}>
          Como artista Odsen, conseguí poder trabajar con la reputada empresa
          Monstercat. Mi mùsica ha estado en las radios de todo el mundo y mi
          canción Horizon ha formado parte del videojuego "Rocket League" y es
          posible usar mi logo como bandera en el videojuego.
          <ol className={styles.list}>
            <li className={styles.listItem}>
              {" "}
              <div className={styles.point} />
              In My Bones reached 2.5 million plays and it was featured on
              Apple's most notable playlist in the genre.
            </li>
            <li className={styles.listItem}>
              {" "}
              <div className={styles.point} />
              My music has been heard from fans all around the globe.
            </li>
            <li className={styles.listItem}>
              {" "}
              <div className={styles.point} />{" "}
              <div>
                I have worked personally with artists like{" "}
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
            <li></li>
          </ol>
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
