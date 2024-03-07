export const glotonProject = {
  content: (
    <>
      <h1>Gloton</h1>
      <p>
        {`In this project, developed by myself and three other students, the
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
      in the history of the school.`}
      </p>

      <h2>Features</h2>

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

      <h2>Technology Stack</h2>
      <p>
        <b>React.JS:</b> Powers dynamic, responsive UIs with efficient rendering
        and state management, perfect for interactive applications.
      </p>
      <p>
        <b>Express.JS:</b> A Node.js framework enabling quick development of web
        and mobile apps with its minimalist approach and robust features.
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
