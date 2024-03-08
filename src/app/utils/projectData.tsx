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

export const glotonProject = {
  content: (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>Gloton</h1>
      <div className={styles.descriptionVideo}>
        <p className={styles.sideText}>
          {`In this project, developed by myself and three other students, the
        goal was to create a website similar to Glovo in both functionality
        and appearance. My primary role involved a significant contribution to
        the development of the application's front-end.`}
        </p>
        <video
          className={styles.video}
          src={require("../../../public/static/video/glotonVideo.mp4")}
          autoPlay
          muted
          loop
        />
      </div>

      <h2 style={{ padding: "5px 0", borderBottom: "1px solid black" }}>
        Features
      </h2>

      <p>
        {`The application features two main functionalities: purchasing products
      and creating and managing your restaurant. When purchasing products,
      customers can search for restaurants using the search bar on the hero
      page. Here, they have two options: use their location by clicking the
      "use location" button or enter their address manually. Both options
      utilize the Google Places API along with the usePlacesAutocomplete
      library, which greatly aided in customizing the styles and achieving a
      professional finish. `}
        <br />
        {`When it comes to managing a restaurant, the decision was made to
      create a dashboard. Within it, various aspects of the business can be
      modified, including deals, delivery charges, and product additions.
      The dashboard incorporates the Cloudinary API, allowing users to
      upload their images using a drag-and-drop system to maximize user
      experience.`}
      </p>

      <h2 style={{ padding: "5px 0", borderBottom: "1px solid black" }}>
        Technology Stack
      </h2>
      <div className={styles.technologiesContainer}>
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
            <br /> Powers dynamic, responsive UIs with efficient rendering and
            state management, perfect for interactive applications.
          </p>
        </div>
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
            <br /> A Node.js framework enabling quick development of web and
            mobile apps with its minimalist approach and robust features.
          </p>
        </div>
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
            <br /> Secures information transfer with compact, URL-safe JSON
            objects, ideal for authentication and data exchange.
          </p>
        </div>
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
            <br /> Simplifies unit testing with a zero-configuration setup,
            known for its speed and snapshot testing capabilities.
          </p>
        </div>
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
            <br /> Revolutionizes end-to-end testing with real-time execution
            and debugging, ensuring browser-based application integrity.
          </p>
        </div>

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
            <br /> CSS enhances the visual appearance and user experience. It
            allows for flexible presentation across different browsers and
            devices.
          </p>
        </div>
      </div>
    </>
  ),
  github: "https://github.com/nds-fsd/glovo",
  website: "https://gloton.netlify.app/",
};

export const taskerProject = {
  content: (
    <>
      <h1>Tasker</h1>
      <p>
        {`The concept behind this project was to create a To-Do application, and that's precisely what I accomplished. However, upon completion, I realized the application was overly simplistic, and I felt compelled to enhance its complexity. This idea laid the foundation for "Tasker." It was at this juncture that I decided to incorporate features such as color customization, grouping tasks, and a recycle bin. All these elements were integrated with a keen focus on design, where functionality and aesthetics are seamlessly blended. This approach aimed to not only meet the practical needs of the users but also to provide them with a visually appealing and personalized user experience.`}
      </p>

      <h2>Features</h2>

      <p>
        {`The application provides functionality for color customization, the allocation of tasks into groups, as well as the creation and deletion of these groups. Furthermore, it is supported by a robust backend system tasked with ensuring that names remain unique to prevent any conflicts. This careful management of names and groupings aids in maintaining a seamless and efficient user experience, avoiding potential discrepancies and ensuring the smooth operation of the app. The integration of these features reflects a thoughtful consideration of user needs, prioritizing both personalization and operational integrity.`}
      </p>

      <h2>Technology Stack</h2>
      <p>
        <b>React.JS:</b> Powers dynamic, responsive UIs with efficient rendering
        and state management, perfect for interactive applications.
      </p>
      <p>
        <b>Express.JS:</b> A Node.js framework enabling quick development of web
        and mobile apps with its minimalist approach and robust features.
      </p>
    </>
  ),
  github: "https://github.com/nds-fsd/reto-6-todo-app-OdsenMusic",
  website: "https://gloton.netlify.app/",
};

export const calculatorProject = {
  content: (
    <>
      <h1 style={{ fontSize: "3rem" }}>Calculator</h1>
      <p>
        {`This was my first React project, a classic. When designing a calculator, there's no need to reinvent the wheel regarding its functionality. Therefore, my primary focus was on ensuring that each operation worked flawlessly without any errors. Additionally, I dedicated considerable effort to refining the visual design, resulting in an exceptionally sleek and user-friendly interface. This calculator also features a history function, allowing users to review past calculations.`}
      </p>

      <h2>Technology Stack</h2>
      <p>
        <b>React.JS:</b> Powers dynamic, responsive UIs with efficient rendering
        and state management, perfect for interactive applications.
      </p>
    </>
  ),
  github: "https://github.com/nds-fsd/reto-4-react-calculator-OdsenMusic",
  website: "https://odsencalculator.netlify.app/",
};
