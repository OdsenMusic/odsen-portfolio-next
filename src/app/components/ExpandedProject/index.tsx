import styles from "./styles.module.css";
import { motion } from "framer-motion";
import React from "react";
import { ExpandedProjectProps } from "./types";
import crossIcon from "../../../../public/static/icons/crossIcon.svg";

export const ExpandedProject: React.FC<ExpandedProjectProps> = ({
  setIsRightContainerOpen,
}) => {
  const initialTransition = {
    ease: "easeOut",
    duration: 0.6,
    delay: 0.4,
  };

  const exitTransition = {
    ease: "easeOut",
    duration: 0.1,
    delay: 0,
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 200 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{
        opacity: 0,
        translateY: 200,
        transition: exitTransition,
      }}
      transition={initialTransition}
      className={styles.expandedContainer}
    >
      <div className={styles.topBar}></div>

      <button
        className={styles.closeButton}
        onClick={() => {
          setIsRightContainerOpen(false);
        }}
      >
        <img className={styles.crossIcon} src={crossIcon.src} alt="" />
      </button>
      <div className={styles.textContainer}>
        <h1>Gloton</h1>
        <p>
          In this project, developed by myself and three other students, the
          goal was to create a website similar to Glovo in both functionality
          and appearance. My primary role involved a significant contribution to
          the development of the application's front-end. This included
          designing the interface, enhancing usability with JavaScript, and
          styling using CSS modules, as well as constructing the back-end
          portion of the ordering system. The choice to use CSS over libraries
          such as AntDesign or Tailwind was driven by the desire to fully
          leverage all the capabilities CSS offers, in addition to creating a
          unique and fully customizable interface. The final product was deemed
          by my professor, Jose Manuel, as the most beautiful Glovo application
          in the history of the school.
        </p>

        <h2>Features</h2>

        <p>
          The application features two main functionalities: purchasing products
          and creating and managing your restaurant. When purchasing products,
          customers can search for restaurants using the search bar on the hero
          page. Here, they have two options: use their location by clicking the
          "use location" button or enter their address manually. Both options
          utilize the Google Places API along with the usePlacesAutocomplete
          library, which greatly aided in customizing the styles and achieving a
          professional finish.
          <br />
          When it comes to managing a restaurant, the decision was made to
          create a dashboard. Within it, various aspects of the business can be
          modified, including deals, delivery charges, and product additions.
          The dashboard incorporates the Cloudinary API, allowing users to
          upload their images using a drag-and-drop system to maximize user
          experience.
        </p>

        <h2>Technology Stack</h2>
        <p>
          <b>React.JS:</b> Powers dynamic, responsive UIs with efficient
          rendering and state management, perfect for interactive applications.
        </p>
        <p>
          <b>Express.JS:</b> A Node.js framework enabling quick development of
          web and mobile apps with its minimalist approach and robust features.
        </p>
        <p>
          <b>JsonWebToken (JWT):</b> Secures information transfer with compact,
          URL-safe JSON objects, ideal for authentication and data exchange.
        </p>
        <p>
          <b>Jest:</b> Simplifies unit testing with a zero-configuration setup,
          known for its speed and snapshot testing capabilities.
        </p>
        <p>
          <b>Cypress:</b> Revolutionizes end-to-end testing with real-time
          execution and debugging, ensuring browser-based application integrity.
        </p>
      </div>
      <aside className={styles.buttonContainer}>
        <a href="https://gloton.netlify.app">
          <button className={styles.bottomButton}>Website</button>
        </a>
        <a href="https://github.com/nds-fsd/glovo">
          <button className={styles.bottomButton}>Github</button>
        </a>
      </aside>
    </motion.div>
  );
};
