import axios from "axios";

const axiosBase = axios.create({
  //baseURL: "https://forum-backend-deployment-1.onrender.com/api",
  baseURL: " https://evangadi-forum-group4-team2-1.onrender.com"
});
export default axiosBase;


// //Explain 
// 1. import axios from "axios";

// Purpose: Imports the axios library, which is a promise-based HTTP client for making HTTP requests (GET, POST, PUT, DELETE, etc.) in JavaScript.
// Axios simplifies API communication compared to fetch, as it automatically transforms JSON and manages errors more effectively.
// 2. const axiosBase = axios.create({...})

// Purpose: Creates a new Axios instance with custom configurations.
// Using axios.create() allows you to set up a base URL and other global configurations like headers, timeout, and interceptors.
// 3. Configuration:

// baseURL: " https://evangadi-forum-group4-team2-1.onrender.com"
// baseURL: Sets the base URL for all HTTP requests made using axiosBase. This eliminates the need to repeat the domain name for every API call.
// Any request sent through axiosBase will automatically append endpoints to this base URL.
// Example:

// axiosBase.get("/posts");
// // Resolves to: https://evangadi-forum-group4-team2-1.onrender.com/posts
// 4. export default axiosBase;
// Purpose: Exports the configured Axios instance (axiosBase) as the default export.
// This allows other files to import and reuse the same Axios instance without needing to redefine the base URL.

// import axiosBase from './path-to-axiosBase';

// axiosBase.get("/posts")
//   .then(response => console.log(response.data))
//   .catch(error => console.error(error));
// Why use axios.create()?
// Reusability: Centralizes API configuration (e.g., base URL, headers).
// Clean Code: Makes API calls cleaner by avoiding repeated URL or configuration setup.
// Easier Maintenance: If the API base URL changes, you only need to update it in one place.
