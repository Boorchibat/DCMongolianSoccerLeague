import React, { useState } from "react";
import { signUpFunction } from "../../firebase";
import "./Sign-up.css"

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfpassword, setCfpassword] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        password === "" ||
        cfpassword === ""
      ) {
        alert("Please fill out all fields");
      } else if (password !== cfpassword) {
        alert("Password and confirm password need to be same");
      } else if (password.length < 6) {
        alert("Password length needs to be over 6 characters");
      } else {
        await signUpFunction(firstName, lastName, email, password, cfpassword);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setCfpassword("");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
    <div id="container">
      <h1 id="welcome">Create an account</h1>
      <input
        id="input"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        required
        name="firstName"
        placeholder="First Name"
      ></input>
      <input
        id="input"
        name="lastName"
        required
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        type="text"
        placeholder="Last name"
      ></input>
      <input
        id="input"
        name="email"
        required
        value={email}
        placeholder="Enter email"
        onChange={(event) => setEmail(event.target.value)}
      ></input>
      <input
        id="input"
        name="Password"
        value={password}
        required
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      ></input>
      <input
        id="input"
        name="Cfpassword"
        value={cfpassword}
        required
        placeholder="Confirm password"
        onChange={(event) => setCfpassword(event.target.value)}
      ></input>
      <button id="button" type="submit" onClick={handleSubmit}>
        SIGN UP
      </button>
      <div id="link">
        <p>Already have an account?</p>
        <a id="signup" href="/sign-in" >
          Log in  
        </a>
      </div>
      {error && <p style={{color: 'red', fontSize: '18px'}}>{error}</p>}
    </div>
  </div>
  );
};
