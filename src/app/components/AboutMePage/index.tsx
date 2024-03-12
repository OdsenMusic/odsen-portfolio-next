"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import Image from "next/image";
import joelBackground from "../../../../public/static/images/joelBackgroud.png";
import githubIcon from "../../../../public/static/icons/githubIcon.svg";
import linkedinIcon from "../../../../public/static/icons/linkedinIcon.svg";
import spotifyIcon from "../../../../public/static/icons/spotifyIcon.svg";
import mailIcon from "../../../../public/static/icons/mailIcon.svg";
import cvIcon from "../../../../public/static/icons/cvIcon.svg";
import ExperienceCard from "./ExperienceCard";
import appleMusicImage from "../../../../public/static/images/applemusic.png";
import rocketLeagueImage from "../../../../public/static/images/rocket league.jpg";
import monstercatLogo from "../../../../public/static/images/monstercat.svg";
import englishFlag from "../../../../public/static/icons/uk.svg";
import spanishFlag from "../../../../public/static/icons/spain.svg";
import italianFlag from "../../../../public/static/icons/italy.svg";
import catalonianFlag from "../../../../public/static/icons/catalonia.svg";
import vanIcon from "../../../../public/static/icons/van.svg";
import printerIcon from "../../../../public/static/icons/printer.svg";
import hamIcon from "../../../../public/static/icons/meat.svg";
import briefcaseIcon from "../../../../public/static/icons/briefcase.svg";
import bookIcon from "../../../../public/static/icons/book.svg";
import globeIcon from "../../../../public/static/icons/globe.svg";
import codeIcon from "../../../../public/static/icons/code.svg";
import TechnologyCard from "../TechnologyCard";
import htmlIcon from "../../../../public/static/icons/html.svg";
import javascriptIcon from "../../../../public/static/icons/javascript.svg";
import mongodbIcon from "../../../../public/static/icons/mongodb.svg";
import reactIcon from "../../../../public/static/icons/react.svg";
import expressIcon from "../../../../public/static/icons/express.svg";
import cssIcon from "../../../../public/static/icons/css.svg";
import gitIcon from "../../../../public/static/icons/git.svg";
import typescriptIcon from "../../../../public/static/icons/typescript.svg";
import nextIcon from "../../../../public/static/icons/next-js.svg";
import pythonIcon from "../../../../public/static/icons/python.svg";

const AboutMePage = () => {
  return (
    <div className={styles.viewport}>
      <aside className={styles.buttonContainer}>
        <motion.a
          whileTap={{ scale: 1 }}
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          href=""
        >
          <button className={styles.bottomButton}>
            <Image
              src={githubIcon.src}
              className={styles.buttonIcon}
              height={40}
              width={40}
              alt=""
            />
          </button>
        </motion.a>
        <motion.a
          whileTap={{ scale: 1 }}
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          href=""
        >
          <button className={styles.bottomButton}>
            <Image
              src={linkedinIcon.src}
              className={styles.buttonIcon}
              height={40}
              width={40}
              alt=""
            />
          </button>
        </motion.a>
        <motion.a
          whileTap={{ scale: 1 }}
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          href=""
        >
          <button className={styles.bottomButton}>
            <Image
              src={spotifyIcon.src}
              className={styles.buttonIcon}
              height={40}
              width={40}
              alt=""
            />
          </button>
        </motion.a>

        <motion.a
          whileTap={{ scale: 1 }}
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          href=""
        >
          <button className={styles.bottomButton}>
            <Image
              src={mailIcon.src}
              className={styles.buttonIcon}
              height={40}
              width={40}
              alt=""
            />
          </button>
        </motion.a>

        <motion.a
          whileTap={{ scale: 1 }}
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          href=""
        >
          <button className={styles.bottomButton}>
            <Image
              src={cvIcon.src}
              className={styles.buttonIcon}
              height={40}
              width={40}
              alt=""
            />
          </button>
        </motion.a>
      </aside>
      <motion.div
        initial={{ opacity: 0, translateY: 200 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className={styles.mainContainer}
      >
        <header className={styles.aboutHeader}>
          <h1 className={styles.joelName}>Joel Oliver Millán</h1>
          <Image
            height={200}
            width={700}
            src={joelBackground.src}
            alt="Joel Oliver in the background"
            className={styles.joelBackgroundImg}
          />
        </header>

        <div className={styles.textContainer}>
          <div className={styles.introContainer}>
            <p className={styles.introText}>
              {`             Hello! I'm Joel. It's a pleasure to meet you. I'm a passionate
              27-year-old Junior Full Stack Developer and a professional music
              producer.`}
            </p>
          </div>
          <h2 className={styles.mainTitle}>
            <Image src={briefcaseIcon.src} height={25} width={25} alt="" /> Work
            Experience{" "}
          </h2>
          <div className={styles.experienceContainer}>
            <ExperienceCard />{" "}
            <div className={styles.imageContainer}>
              {" "}
              <Image
                height={250}
                width={400}
                src={appleMusicImage.src}
                alt="Odsen "
                className={styles.appleMusicImage}
              />
              <Image
                height={250}
                width={400}
                src={rocketLeagueImage.src}
                alt="Odsen "
                className={styles.appleMusicImage}
              />
            </div>
          </div>
          <div className={styles.otherJobs}>
            <div className={styles.cardContainerNormal}>
              <h3 className={styles.experienceTitle}>
                Delivery driver{" "}
                <Image
                  className={styles.sideIcon}
                  src={vanIcon.src}
                  height={30}
                  width={30}
                  alt=""
                />
                <p className={styles.time}>May 2022 - Oct 2023</p>
              </h3>
              <div className={styles.experienceTextContainer}>
                <p className={styles.company}>Amazon</p>
                <p className={styles.description}>
                  {`                  This challenging job helped me save enough to finance my
                  master's in web programming.`}
                </p>
              </div>
            </div>
            <div className={styles.cardContainerNormal}>
              <h3 className={styles.experienceTitle}>
                Administrative{" "}
                <Image
                  className={styles.sideIcon}
                  src={printerIcon.src}
                  height={30}
                  width={30}
                  alt=""
                />
                <p className={styles.time}>Oct 2019 - Sep 2020</p>
              </h3>
              <div className={styles.experienceTextContainer}>
                <p className={styles.company}>Roler</p>
                <p className={styles.description}>
                  {`                  In this role, my responsibilities included managing incoming
                  trucks, preparing delivery notes, and ensuring all
                  documentation was accurate.`}
                </p>
              </div>
            </div>
            <div className={styles.cardContainerNormal}>
              <h3 className={styles.experienceTitle}>
                Food Handler{" "}
                <Image
                  className={styles.sideIcon}
                  src={hamIcon.src}
                  height={40}
                  width={40}
                  alt=""
                />
                <p className={styles.time}>Sep 2018 - Oct 2019</p>
              </h3>
              <div className={styles.experienceTextContainer}>
                <p className={styles.company}>Ibericus</p>
                <p className={styles.description}>
                  {`               My first job involved the primary task of slicing ham and
                  packaging it for sale.`}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.textContainer}>
          <h2 className={styles.mainTitle}>
            {" "}
            <Image src={bookIcon.src} height={25} width={25} alt="" />
            Education
          </h2>
          <div className={styles.otherJobs}>
            <div className={styles.cardContainerNormal}>
              <h3 className={styles.experienceTitle}>
                Master in Full Stack Development
                <p className={styles.time}>Oct 2023 - Mar 2024</p>
              </h3>
              <div className={styles.experienceTextContainer}>
                <p className={styles.company}>Nuclio Digital School</p>
                <p className={styles.description}>
                  {`             This is the most enjoyable educational center I have ever
                  attended. Thanks to my esteemed professors, I now possess
                  extensive knowledge about the development world.`}
                </p>
              </div>
            </div>
            <div className={styles.cardContainerNormal}>
              <h3 className={styles.experienceTitle}>
                Degree in Food Science and Technology
                <p className={styles.time}>Sep 2016 - Jun 2020</p>
              </h3>
              <div className={styles.experienceTextContainer}>
                <p className={styles.company}>UAB</p>
                <p className={styles.description}>
                  {`               At university is where I learned math, physics, critical
                  thinking, how to speak, and how to articulate my ideas
                  properly.`}
                </p>
              </div>
            </div>
            <div className={styles.cardContainerNormal}>
              <h3 className={styles.experienceTitle}>
                Scientific Bachelor's Degree
                <p className={styles.time}>May 2014 - Jun 2016</p>
              </h3>
              <div className={styles.experienceTextContainer}>
                <p className={styles.company}>INS Viladecavalls</p>
                <p className={styles.description}>
                  {`              All my passion for science stems from this experience.`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.mainTitle}>
            {" "}
            <Image src={codeIcon.src} height={30} width={30} alt="" />
            Technologies
          </h2>
          <div className={styles.technologiesContainer}>
            <div className={styles.singleTechnology}>
              {" "}
              <Image
                src={javascriptIcon.src}
                height={50}
                width={50}
                alt=""
              />{" "}
              <p>JavaScript</p>
            </div>
            <div className={styles.singleTechnology}>
              {" "}
              <Image
                src={typescriptIcon.src}
                height={50}
                width={50}
                alt=""
              />{" "}
              <p>TypeScript</p>
            </div>
            <div className={styles.singleTechnology}>
              {" "}
              <Image src={pythonIcon.src} height={50} width={50} alt="" />{" "}
              <p>Python</p>
            </div>
            <div className={styles.singleTechnology}>
              {" "}
              <Image src={cssIcon.src} height={50} width={50} alt="" />{" "}
              <p>CSS</p>
            </div>
            <div className={styles.singleTechnology}>
              {" "}
              <Image src={htmlIcon.src} height={50} width={50} alt="" />{" "}
              <p>HTML</p>
            </div>
            <div className={styles.singleTechnology}>
              {" "}
              <Image src={reactIcon.src} height={50} width={50} alt="" />{" "}
              <p>React.JS</p>
            </div>
            <div className={styles.singleTechnology}>
              {" "}
              <Image src={nextIcon.src} height={50} width={50} alt="" />{" "}
              <p>Next.JS</p>
            </div>
            <div className={styles.singleTechnology}>
              {" "}
              <Image src={expressIcon.src} height={50} width={50} alt="" />{" "}
              <p>Express.JS</p>
            </div>
            <div className={styles.singleTechnology}>
              {" "}
              <Image src={mongodbIcon.src} height={50} width={50} alt="" />{" "}
              <p>MongoDB</p>
            </div>
            <div className={styles.singleTechnology}>
              {" "}
              <Image src={gitIcon.src} height={50} width={50} alt="" />{" "}
              <p>Git</p>
            </div>
          </div>
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.mainTitle}>
            {" "}
            <Image src={globeIcon.src} height={25} width={25} alt="" />
            Languages
          </h2>
          <div className={styles.otherJobs}>
            <div className={styles.languageCardContainerNormal}>
              <h3 className={styles.language}>
                {" "}
                <Image
                  height={30}
                  width={30}
                  src={englishFlag.src}
                  alt="flag"
                />
                English{" "}
              </h3>
              <p className={styles.level}>Advanced</p>
            </div>
            <div className={styles.languageCardContainerNormal}>
              <h3 className={styles.language}>
                {" "}
                <Image
                  height={30}
                  width={30}
                  src={spanishFlag.src}
                  alt="flag"
                />
                Spanish
              </h3>
              <p className={styles.level}>Native</p>
            </div>
            <div className={styles.languageCardContainerNormal}>
              <h3 className={styles.language}>
                {" "}
                <Image
                  className={styles.catalanFlag}
                  height={20}
                  width={30}
                  src={catalonianFlag.src}
                  alt="flag"
                />
                Catalan
              </h3>
              <p className={styles.level}>Native</p>
            </div>
            <div className={styles.languageCardContainerNormal}>
              <h3 className={styles.language}>
                {" "}
                <Image
                  height={30}
                  width={30}
                  src={italianFlag.src}
                  alt="flag"
                />
                Italian
              </h3>
              <p className={styles.level}>Basic</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMePage;
