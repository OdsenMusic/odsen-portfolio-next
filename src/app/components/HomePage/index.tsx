"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef, FC } from "react";
import styles from "./styles.module.css";
import backgroundImg from "../../../../public/static/images/Sin título-1.jpg";
import logoImg from "../../../../public/static/images/Logo.png";
import spotifyLogo from "../../../../public/static/images/Spotify_logo_without_text.svg";
import linkedinLogo from "../../../../public/static/images/LinkedIn_icon_circle.svg";
import MailIcon from "../../../../public/static/images/mailicon.svg";
import { motion } from "framer-motion";

export const HomePage: FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const hoverTimeoutRef = useRef<any>(null);
  const router = useRouter();

  const useMousePosition = () => {
    const [mousePosition, setMousePosition] = React.useState({
      x: null,
      y: null,
    });

    useEffect(() => {
      const updateMousePosition = (ev: any) => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      };

      window.addEventListener("mousemove", updateMousePosition);

      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }, []);

    return mousePosition;
  };

  const mousePosition = useMousePosition();

  const mouseInHandler = (text: string) => {
    setCursorVariant("hover");

    clearTimeout(hoverTimeoutRef.current);
    setIsHovered(true);
    setPopupText(text);
  };

  const mouseOutHandler = () => {
    setCursorVariant("default");
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 0);
  };

  const cursorVariants = {
    default: {
      border: "3px solid transparent",
    },

    hover: {
      border: "3px solid white",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className={styles.viewport}
    >
      <motion.div
        style={{
          top: `calc(${JSON.stringify(mousePosition.y)}px + 9px`,
          left: `calc(${JSON.stringify(mousePosition.x)}px - 8px )`,
        }}
        className={styles.cursor}
        variants={cursorVariants}
        animate={cursorVariant}
      >
        <div
          className={`${styles.flecha} ${isHovered ? styles.active : ""}`}
        ></div>
      </motion.div>
      <p
        style={{
          top: `calc(${JSON.stringify(mousePosition.y)}px - 5px`,
          left: `calc(${JSON.stringify(mousePosition.x)}px + 100px)`,
        }}
        className={`${styles.popupText} ${isHovered ? styles.active : ""}`}
      >
        {popupText}
      </p>
      <div className={styles.perspectiveDiv}>
        <div className={styles.mainContainer}>
          <div className={styles.sideButtons}>
            <div
              onClick={() => {
                router.push("/projects");
              }}
              className={styles.ajedrez}
            >
              <div
                onMouseLeave={() => mouseOutHandler()}
                onMouseEnter={() => {
                  mouseInHandler("Projects");
                }}
                className={styles.projectButton}
              >
                <Image
                  height={400}
                  width={400}
                  className={styles.backgroundImg}
                  src={backgroundImg.src}
                  alt=""
                />
                <Image
                  height={150}
                  width={250}
                  className={styles.logo}
                  src={logoImg.src}
                  alt=""
                />
              </div>{" "}
            </div>
            <div className={styles.buttonContainer}>
              <a
                href="https://open.spotify.com/intl-es/artist/5u9LEu640uGxBEKnU1PY9V"
                className={styles.sideButton}
                onMouseLeave={() => mouseOutHandler()}
                onMouseEnter={() => {
                  mouseInHandler("Spotify");
                }}
              >
                <Image
                  height={70}
                  width={70}
                  className={styles.icon}
                  src={spotifyLogo.src}
                  alt=""
                />
              </a>
              <div
                onClick={() => {
                  router.push("/aboutme");
                }}
                onMouseLeave={() => mouseOutHandler()}
                onMouseEnter={() => {
                  mouseInHandler("LinkedIn");
                }}
                className={styles.sideButton}
              >
                <Image
                  height={70}
                  width={70}
                  className={styles.icon}
                  src={linkedinLogo.src}
                  alt=""
                />
              </div>
              <a
                href="mailto:jolivermillan@gmail.com"
                onMouseLeave={() => mouseOutHandler()}
                onMouseEnter={() => {
                  mouseInHandler("Email");
                }}
                className={styles.sideButton}
              >
                <Image
                  height={70}
                  width={70}
                  className={styles.icon}
                  src={MailIcon.src}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
