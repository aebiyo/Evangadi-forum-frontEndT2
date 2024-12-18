import React, { useState } from "react";
import "./SignUp.css";  // Ensure the correct path
import axios from "../axios.js";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function SignUp({ toggleForm }) {
  const [errorResponse, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);

  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(data) {
    reset();

    try {
      await axios.post("/users/register", {
        username: data.username,
        firstname: data.firstname,
        lastname: data.lastname,
        password: data.password,
        email: data.email,
      });

      toggleForm();
    } catch (error) {
      console.log(error);
      setError(error.response.data.msg);
    }
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login__container container col-sm-12 col-md">
      <h4>Join the network </h4>
      <p>
        Already have an account?
        <Link className="create" onClick={toggleForm}>
          Sign in
        </Link>
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className={errors.email && "invalid"}
          placeholder="  Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          onKeyUp={() => trigger("email")}
          style={{ padding: "4px", paddingLeft: "5px" }}
        />
        {errors.email && (
          <div>
            <small className="text-danger">{errors.email.message}</small>
          </div>
        )}

        <div className="input-group">
          <input
            className={`first-name ${errors.firstname && "invalid"}`}
            type="text"
            placeholder="  First Name"
            {...register("firstname", {
              required: "First name is required",
            })}
            onKeyUp={() => trigger("firstname")}
            style={{ padding: "4px" }}
          />
          <input
            className={`last-name ${errors.lastname && "invalid"}`}
            type="text"
            placeholder="  Last Name"
            {...register("lastname", {
              required: "Last name is required",
            })}
            onKeyUp={() => trigger("lastname")}
            style={{ padding: "4px" }}
          />
        </div>

        <input
          type="text"
          className={errors.username && "invalid"}
          placeholder="  User Name"
          {...register("username", {
            required: "Username is required",
          })}
          onKeyUp={() => trigger("username")}
          style={{ padding: "4px" }}
        />
        {errors.username && (
          <div>
            <small className="text-danger">{errors.username.message}</small>
          </div>
        )}
        {errorResponse && (
          <div>
            <small className="text-danger">{errorResponse}</small>
          </div>
        )}

        <input
          type={passwordVisible ? "password" : "text"}
          className={`hide ${errors.password && "invalid"}`}
          placeholder="  Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Minimum password length is 8",
            },
          })}
          onKeyUp={() => trigger("password")}
          style={{ padding: "4px" }}
        />
        <div className="signfas">
        <i onClick={togglePasswordVisibility}>
          {passwordVisible ? (
            <i className="fas fa-eye-slash" />
          ) : (
            <i className="fas fa-eye" />
          )}
        </i>
        
        {errors.password && (
          <div>
            <small className="text-danger">{errors.password.message}</small>
          </div>
        )}
</div>
        <p>
          I agree to the{" "}
          <Link
            className="create"
            to="https://www.evangadi.com/legal/privacy/"
            target="_blank"
          >
            privacy policy
          </Link>
          {"  "}
          and{"  "}
          <Link
            className="create"
            to="https://www.evangadi.com/legal/terms/"
            target="_blank"
          >
            terms of service.
          </Link>
        </p>
        <button className="login__signInButton" type="submit">
          Agree and Join
        </button>
      </form>
    </div>
  );
}

export default SignUp;



// Overview
// This is a React functional component named SignUp that provides a user registration form. It integrates:

//1. Form validation using react-hook-form.
//2. API requests using Axios to register users.
// 3.Password visibility toggling (show/hide).
// 4.Conditional error rendering.
// 5.Navigation links and styling.



// Step-by-Step Code Breakdown
// 1. Imports
//
// import React, { useState } from "react";
// import "./SignUp.css"; 
// import axios from "../axios.js"; 
// import { useForm } from "react-hook-form"; 
// import { Link } from "react-router-dom";
// React, useState: To define component state for errors and password visibility.
// CSS: SignUp.css styles the form.
// Axios: For making HTTP POST requests to the backend API.
// react-hook-form: Handles form validation and submission.
// Link: For navigation (React Router).
// 2. State Variables

// const [errorResponse, setError] = useState("");
// const [passwordVisible, setPasswordVisible] = useState(true);
// errorResponse: Stores error messages returned by the backend API.
// passwordVisible: Toggles password visibility.
// 3. Form Setup Using useForm

// const {
//   register,
//   trigger,
//   handleSubmit,
//   formState: { errors },
//   reset,
// } = useForm();
// register: Registers input fields for validation.
// trigger: Triggers validation manually on events (e.g., onKeyUp).
// handleSubmit: Handles form submission.
// formState.errors: Contains validation errors.
// reset: Clears the form fields after submission.
// 4. Form Submission Handler

// async function onSubmit(data) {
//   reset();

//   try {
//     await axios.post("/users/register", {
//       username: data.username,
//       firstname: data.firstname,
//       lastname: data.lastname,
//       password: data.password,
//       email: data.email,
//     });

//     toggleForm(); // Switches to another form (e.g., Login)
//   } catch (error) {
//     console.log(error);
//     setError(error.response.data.msg); // Displays backend error
//   }
// }
// Purpose: Handles user registration on form submission.
// Sends an HTTP POST request to /users/register with form data:
// username, firstname, lastname, password, email.
// If successful, toggleForm() is called to switch to the "Sign In" form.
// On failure, the error message returned from the backend is stored in errorResponse.
// 5. Password Visibility Toggle

// const togglePasswordVisibility = () => {
//   setPasswordVisible(!passwordVisible);
// };
// This function toggles the passwordVisible state.
// If true, the password field shows as password (hidden).
// If false, the field shows as text (visible).
// 6. UI Rendering
// The return statement renders the form UI.

// Container and Header

// <div className="login__container container col-sm-12 col-md">
//   <h4>Join the network </h4>
//   <p>
//     Already have an account?
//     <Link className="create" onClick={toggleForm}>
//       Sign in
//     </Link>
//   </p>
// Header: Displays "Join the network".
// Sign-in Link: Allows users to navigate back to the login form via toggleForm().
// Form and Input Fields
// Each input field uses:

// register() for validation rules.
// Dynamic classes for invalid input.
// onKeyUp with trigger() to validate fields as the user types.
// Email Input


// <input
//   type="text"
//   className={errors.email && "invalid"}
//   placeholder="  Email"
//   {...register("email", {
//     required: "Email is required",
//     pattern: {
//       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//       message: "Invalid email address",
//     },
//   })}
//   onKeyUp={() => trigger("email")}
// />
// Validation:
// required: Ensures the field is not empty.
// pattern: Validates the email format using a regular expression.
// If validation fails, it displays an error message.
// First Name and Last Name Fields


// <input
//   className={`first-name ${errors.firstname && "invalid"}`}
//   type="text"
//   placeholder="  First Name"
//   {...register("firstname", { required: "First name is required" })}
//   onKeyUp={() => trigger("firstname")}
// />
// Validation ensures firstname and lastname fields are not empty.
// Password Input


// <input
//   type={passwordVisible ? "password" : "text"}
//   className={`hide ${errors.password && "invalid"}`}
//   placeholder="  Password"
//   {...register("password", {
//     required: "Password is required",
//     minLength: { value: 8, message: "Minimum password length is 8" },
//   })}
//   onKeyUp={() => trigger("password")}
// />
// Toggles the input type between "password" and "text" based on passwordVisible.
// Password Visibility Toggle Icon


// <i onClick={togglePasswordVisibility}>
//   {passwordVisible ? <i className="fas fa-eye-slash" /> : <i className="fas fa-eye" />}
// </i>
// Toggles the eye icon (fa-eye/fa-eye-slash) and password visibility.
// Privacy Policy and Terms

// <p>
//   I agree to the{" "}
//   <Link className="create" to="https://www.evangadi.com/legal/privacy/" target="_blank">
//     privacy policy
//   </Link>
//   and{" "}
//   <Link className="create" to="https://www.evangadi.com/legal/terms/" target="_blank">
//     terms of service.
//   </Link>
// </p>
// Provides links to the privacy policy and terms of service.
// Submit Button

// <button className="login__signInButton" type="submit">
//   Agree and Join
// </button>
// Submits the form and triggers the onSubmit handler.
// 7. Conditional Error Rendering

// {errorResponse && (
//   <div>
//     <small className="text-danger">{errorResponse}</small>
//   </div>
// )}
// Displays an error message if the backend returns one.
// Summary of Logic
// Form Validation:
// Uses react-hook-form to validate fields and display errors.
// Form Submission:
// Sends form data via Axios to /users/register for registration.
// Resets the form and switches to the login form on success.
// Displays errors from the backend on failure.
// Password Visibility:
// Toggles between showing and hiding the password input.
// Navigation:
// Provides links to terms, privacy policies, and the "Sign In" form.
// This structure ensures a clean and functional sign-up form with proper validation and user feedback.








