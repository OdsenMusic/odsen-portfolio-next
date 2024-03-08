import styles from "../components/ExpandedProject/styles.module.css";
import htmlIcon from "../../../public/static/icons/html.svg";
import javascriptIcon from "../../../public/static/icons/javascript.svg";
import mongodbIcon from "../../../public/static/icons/mongodb.svg";
import reactIcon from "../../../public/static/icons/react.svg";
import expressIcon from "../../../public/static/icons/express.svg";
import cssIcon from "../../../public/static/icons/css.svg";
import jwtIcon from "../../../public/static/icons/jwt.svg";
import jestIcon from "../../../public/static/icons/jest.svg";
import cypressIcon from "../../../public/static/icons/cypress.svg";
import Image from "next/image";

export const reactInfo = (
  <div className={styles.singleTechnology}>
    <div className={styles.technologyTitle}>
      <Image
        height={25}
        width={25}
        className={styles.technologyIcon}
        src={reactIcon.src}
        alt=""
      />
      React.JS{" "}
    </div>
    <p className={styles.technologyText}>
      <br /> Powers dynamic, responsive UIs with efficient rendering and state
      management, perfect for interactive applications.
    </p>
  </div>
);

export const expressInfo = (
  <div className={styles.singleTechnology}>
    <div className={styles.technologyTitle}>
      {" "}
      <Image
        height={20}
        width={20}
        className={styles.technologyIcon}
        src={expressIcon.src}
        alt=""
      />{" "}
      Express.JS
    </div>{" "}
    <p className={styles.technologyText}>
      <br /> A Node.js framework enabling quick development of web and mobile
      apps with its minimalist approach and robust features.
    </p>
  </div>
);

export const jwtInfo = (
  <div className={styles.singleTechnology}>
    <div className={styles.technologyTitle}>
      {" "}
      <Image
        height={20}
        width={20}
        className={styles.technologyIcon}
        src={jwtIcon.src}
        alt=""
      />{" "}
      JsonWebToken
    </div>{" "}
    <p className={styles.technologyText}>
      <br /> Secures information transfer with compact, URL-safe JSON objects,
      ideal for authentication and data exchange.
    </p>
  </div>
);

export const jestInfo = (
  <div className={styles.singleTechnology}>
    <div className={styles.technologyTitle}>
      {" "}
      <Image
        height={20}
        width={20}
        className={styles.technologyIcon}
        style={{ padding: "-20px" }}
        src={jestIcon.src}
        alt=""
      />
      Jest
    </div>{" "}
    <p className={styles.technologyText}>
      <br /> Simplifies unit testing with a zero-configuration setup, known for
      its speed and snapshot testing capabilities.
    </p>
  </div>
);

export const cypressInfo = (
  <div className={styles.singleTechnology}>
    <div className={styles.technologyTitle}>
      {" "}
      <Image
        height={20}
        width={20}
        className={styles.technologyIcon}
        src={cypressIcon.src}
        alt=""
      />
      Cypress
    </div>{" "}
    <p className={styles.technologyText}>
      <br /> Revolutionizes end-to-end testing with real-time execution and
      debugging, ensuring browser-based application integrity.
    </p>
  </div>
);

export const cssInfo = (
  <div className={styles.singleTechnology}>
    <div className={styles.technologyTitle}>
      {" "}
      <Image
        height={20}
        width={20}
        className={styles.technologyIcon}
        src={cssIcon.src}
        alt=""
      />
      CSS
    </div>{" "}
    <p className={styles.technologyText}>
      <br /> CSS enhances the visual appearance and user experience. It allows
      for flexible presentation across different browsers and devices.
    </p>
  </div>
);
