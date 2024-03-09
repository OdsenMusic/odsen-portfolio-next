import styles from "../components/ExpandedProject/styles.module.css";
import {
  reactInfo,
  jestInfo,
  jwtInfo,
  cssInfo,
  cypressInfo,
  expressInfo,
} from "./technologyData";

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

      <p style={{ columnCount: "2" }}>
        {`The application features two main functionalities: purchasing products
      and creating and managing your restaurant. When purchasing products,
      customers can search for restaurants using the search bar on the hero
      page. Here, they have two options: use their location by clicking the
      "use location" button or enter their address manually. Both options
      utilize the Google Places API along with the usePlacesAutocomplete
      library, which greatly aided in customizing the styles and achieving a
      professional finish. When it comes to managing a restaurant, the decision was made to
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
        {reactInfo} {expressInfo} {jwtInfo} {jestInfo} {cypressInfo} {cssInfo}
      </div>
    </>
  ),
  github: "https://github.com/nds-fsd/glovo",
  website: "https://gloton.netlify.app/",
};

export const taskerProject = {
  content: (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>Tasker</h1>
      <div className={styles.descriptionVideo}>
        <p className={styles.sideText}>
          {`The concept behind this project was to create a To-Do application. This idea laid the foundation for "Tasker." I decided to incorporate features such as color customization, grouping tasks, and a recycle bin integrated with a keen focus on design, where functionality and aesthetics are seamlessly blended.`}
        </p>
        <video
          className={styles.video}
          src={require("../../../public/static/video/taskerVideo.mp4")}
          autoPlay
          muted
          loop
        />
      </div>

      <h2 style={{ padding: "5px 0", borderBottom: "1px solid black" }}>
        Features
      </h2>

      <p style={{ columnCount: "2" }}>
        {`The application provides functionality for color customization, the allocation of tasks into groups, as well as the creation and deletion of these groups. Furthermore, it is supported by a robust backend system tasked with ensuring that names remain unique to prevent any conflicts. This careful management of names and groupings aids in maintaining a seamless and efficient user experience, avoiding potential discrepancies and ensuring the smooth operation of the app. The integration of these features reflects a thoughtful consideration of user needs, prioritizing both personalization and operational integrity.`}
      </p>

      <h2 style={{ padding: "5px 0", borderBottom: "1px solid black" }}>
        Technology Stack
      </h2>
      <div className={styles.technologiesContainer}>
        {reactInfo} {expressInfo} {cssInfo}
      </div>
    </>
  ),
  github: "https://github.com/nds-fsd/reto-6-todo-app-OdsenMusic",
  website: "https://odsen.vercel.app/projects/",
};

export const calculatorProject = {
  content: (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>Calculator</h1>
      <div className={styles.descriptionVideo}>
        <p className={styles.sideText}>
          {`When designing this calculator my primary focus was on ensuring that each operation worked flawlessly as well as refining the visual design, resulting in a sleek and user-friendly interface. This calculator also features a history function, allowing users to review past calculations.`}
        </p>
        <video
          className={styles.video}
          src={require("../../../public/static/video/calculatorVideo.mp4")}
          autoPlay
          muted
          loop
        />
      </div>

      <h2 style={{ padding: "5px 0", borderBottom: "1px solid black" }}>
        Technology Stack
      </h2>
      <div className={styles.technologiesContainer}>
        {reactInfo} {cssInfo}
      </div>
    </>
  ),
  github: "https://github.com/nds-fsd/reto-4-react-calculator-OdsenMusic",
  website: "https://odsencalculator.vercel.app/",
};
