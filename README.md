Weather App with Node.js
========================================

This project is a **Node.js** application to look up weather data. This README will guide you through understanding the project structure, navigating the files, and running both applications together.

* * *

Project Structure
-----------------
The project consists of:
    - A `src` which act as a public folder, it is the material accessible to all those using the webpage when it is running
    - A `server.js` file which runs on the backend fetching weather data from an open source API, it is not accessible to users when the page is running
    - A `package.json` file for managing dependencies and scripts for the webpage

### Explanation of Each Part

*   **Root `package.json`**: The root `package.json` defines dependencies and scripts for the projects.

### Version Control: Understanding `**/node_modules` in `.gitignore` and What is the `node_modules` Folder?

The `node_modules` folder is automatically created by **npm** (Node Package Manager) when you run `npm install`. It contains all the dependencies and sub-dependencies required for the project to function.

### What Purpose does `.gitignore` serve?

The `.gitignore` file tells Git to ignore any files listed in the file. In this case, the `node_modules` folder and `.evn` file are listed.

* * *

Setting Up the Project
----------------------

### Prerequisites

Ensure you have the following installed:

*   **Node.js** (v14 or later)
*   **npm** (v7 or later for workspaces support)

### Installation

To set up the project, install all dependencies by running `npm install` from the root directory.

* * *

Running the Project
-------------------

### Available Scripts

*   **Install Dependencies**: Installs all dependencies or the project.
    
         npm install
    
*   **Start the Project**: Starts both the Node.js server and displays `index.html`.
      
          npm start
    
    *   **Weather App** runs on `http://localhost:3000`

*   **While Running**: Enter a city and state into the required fields and click the 'Get Weather' button. A weather forecast will be outputed on the page as well as an icon, and the background color will change. Any errors will be outputted to the user.
    