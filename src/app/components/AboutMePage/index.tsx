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
import cvIcon from "../../../../public/static/icons/cvIcon.svg"; // Assuming you might use it later
import appleMusicImage from "../../../../public/static/images/applemusic.png";
import rocketLeagueImage from "../../../../public/static/images/rocket league.jpg";
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
import codeIconWhite from "../../../../public/static/icons/codewhite.svg";
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
import ExperienceCard from "./ExperienceCard";
import chemistryIcon from "../../../../public/static/icons/chemistry.svg";

// SideButton Component
type SideButtonProps = {
  href: string;
  src: string;
  alt: string;
};

const SideButton: React.FC<SideButtonProps> = ({ href, src, alt = "" }) => (
  <motion.a
    whileTap={{ scale: 1 }}
    whileHover={{ scale: 1.15 }}
    transition={{ type: "spring", stiffness: 400, damping: 15 }}
    href={href}
  >
    <button className={styles.bottomButton}>
      <Image
        src={src}
        className={styles.buttonIcon}
        height={40}
        width={40}
        alt={alt}
      />
    </button>
  </motion.a>
);

type StaticExperienceCardProps = {
  icon: string;
  title: string;
  company: string;
  time: string;
  description: string;
};

// ExperienceCard Component (for static content, adjust as needed or reuse original component)
const StaticExperienceCard: React.FC<StaticExperienceCardProps> = ({
  icon,
  title,
  company,
  time,
  description,
}) => (
  <article className={styles.cardContainerNormal}>
    <h3 className={styles.experienceTitle}>
      {title}{" "}
      <Image
        className={styles.sideIcon}
        src={icon}
        height={30}
        width={30}
        alt=""
      />
      <p className={styles.time}>{time}</p>
    </h3>
    <div className={styles.experienceTextContainer}>
      <p className={styles.company}>{company}</p>
      <p className={styles.description}>{description}</p>
    </div>
  </article>
);

type TechnologyCardProps = {
  src: string;
  alt: string;
  text: string;
};

// TechnologyCard Component
const TechnologyCard: React.FC<TechnologyCardProps> = ({ src, alt, text }) => (
  <article className={styles.singleTechnology}>
    <Image src={src} height={50} width={50} alt={alt} />
    <p>{text}</p>
  </article>
);

type LanguageCardProps = {
  src: string;
  alt: string;
  language: string;
  level: string;
};

// LanguageCard Component
const LanguageCard: React.FC<LanguageCardProps> = ({
  src,
  alt,
  language,
  level,
}) => (
  <article className={styles.languageCardContainerNormal}>
    <h3 className={styles.language}>
      <Image height={30} width={30} src={src} alt={alt} />
      {language}
    </h3>
    <p className={styles.level}>{level}</p>
  </article>
);

const AboutMePage = () => {
  return (
    <main className={styles.viewport}>
      <aside className={styles.buttonContainer}>
        <SideButton
          alt="GitHub"
          href="https://github.com/OdsenMusic"
          src={githubIcon.src}
        />
        <SideButton
          alt="LinkedIn"
          href="https://www.linkedin.com/in/joel-oliver-millan/"
          src={linkedinIcon.src}
        />
        <SideButton
          alt="Spotify"
          href="https://open.spotify.com/intl-es/artist/5u9LEu640uGxBEKnU1PY9V"
          src={spotifyIcon.src}
        />
        <SideButton
          alt="Mail"
          href="mailto:jolivermillan@gmail.com"
          src={mailIcon.src}
        />
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
          {/* <div className={styles.introContainer}>
            <p className={styles.introText}>
              Hello! I'm Joel. It's a pleasure to meet you. I'm a passionate
              27-year-old Junior Full Stack Developer and a professional music
              producer.
            </p>
          </div> */}

          <h2 className={styles.mainTitle}>
            <Image src={briefcaseIcon.src} height={25} width={25} alt="" /> Work
            Experience
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
            </div>{" "}
          </div>
          <div className={styles.experienceContainer}>
            <StaticExperienceCard
              icon={vanIcon.src}
              title="Delivery driver"
              company="Amazon"
              time="May 2022 - Oct 2023"
              description="This challenging job helped me save enough to finance my master's in web programming."
            />
            <StaticExperienceCard
              icon={printerIcon.src}
              title="Administrative"
              company="Roler"
              time="Oct 2019 - Sep 2020"
              description="In this role, my responsibilities included managing incoming trucks, preparing delivery notes, and ensuring all documentation was accurate."
            />
            <StaticExperienceCard
              icon={hamIcon.src}
              title="Food Handler"
              company="Ibericus"
              time="Sep 2018 - Oct 2019"
              description="My first job involved the primary task of slicing ham and packaging it for sale."
            />{" "}
          </div>
        </div>
        {/* Education Section Similar to Experience Section */}
        <div className={styles.textContainer}>
          <h2 className={styles.mainTitle}>
            <Image src={bookIcon.src} height={25} width={25} alt="" />
            Education
          </h2>

          <div className={styles.experienceContainer}>
            {" "}
            <StaticExperienceCard
              icon={codeIconWhite.src}
              title=" Master in Full Stack Development"
              company="Nuclio Digital School"
              time="May 2022 - Oct 2023"
              description="This is the most enjoyable educational center I have ever
              attended. Thanks to my esteemed professors, I now possess
              extensive knowledge about the development world."
            />
            <StaticExperienceCard
              icon={hamIcon.src}
              title="Degree in Food Science"
              company="UAB"
              time="Sep 2016 - Jun 2020"
              description="At university is where I learned math, physics, critical
              thinking, how to speak, and how to articulate my ideas
              properly."
            />
            <StaticExperienceCard
              icon={chemistryIcon.src}
              title="Scientific Bachelor's Degree"
              company="UAB"
              time="INS Viladecavalls"
              description="All my passion for science stems from this experience."
            />{" "}
          </div>
        </div>
        {/* Technologies Section */}
        <div className={styles.textContainer}>
          <h2 className={styles.mainTitle}>
            <Image src={codeIcon.src} height={30} width={30} alt="" />{" "}
            Technologies
          </h2>
          <div className={styles.technologiesContainer}>
            <TechnologyCard
              src={javascriptIcon.src}
              text="JavaScript"
              alt="JavaScript"
            />
            <TechnologyCard
              src={typescriptIcon.src}
              text="TypeScript"
              alt="TypeScript"
            />
            <TechnologyCard src={pythonIcon.src} text="Python" alt="Python" />
            <TechnologyCard src={cssIcon.src} text="CSS" alt="CSS" />

            <TechnologyCard src={htmlIcon.src} text="HTML" alt="HTML" />
            <TechnologyCard
              src={reactIcon.src}
              text="React.JS"
              alt="React.JS"
            />
            <TechnologyCard src={nextIcon.src} text="Next.JS" alt="Next.JS" />
            <TechnologyCard
              src={expressIcon.src}
              text="Express.JS"
              alt="Express.JS"
            />
            <TechnologyCard
              src={mongodbIcon.src}
              text="MongoDB"
              alt="MongoDB"
            />
            <TechnologyCard src={gitIcon.src} text="Git" alt="Git" />
            {/* Add more TechnologyCards as needed */}
          </div>{" "}
        </div>{" "}
        <div className={styles.textContainer}>
          {/* Languages Section */}
          <h2 className={styles.mainTitle}>
            <Image src={globeIcon.src} height={25} width={25} alt="" />{" "}
            Languages
          </h2>
          <div className={styles.otherJobs}>
            <LanguageCard
              alt="English flag"
              src={englishFlag.src}
              language="English"
              level="Advanced"
            />
            <LanguageCard
              alt="Spanish flag"
              src={spanishFlag.src}
              language="Spanish"
              level="Native"
            />
            <LanguageCard
              alt="Catalan flag"
              src={catalonianFlag.src}
              language="Catalan"
              level="Native"
            />
            <LanguageCard
              alt="Italian flag"
              src={italianFlag.src}
              language="Italian"
              level="Basic"
            />
          </div>{" "}
        </div>
      </motion.div>
    </main>
  );
};

export default AboutMePage;
