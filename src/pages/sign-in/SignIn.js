import React, { useState } from "react";
import { signInFunction } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./SIgn-in.css"
import { Button } from "../../components/button"

export const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const submit = async (e) => {
    if (email && password) {
      try {
        await signInFunction(email, password);
        setEmail("");
        setPassword("");
        navigate("/");
      } catch (error) {
        setError(error.message);
      }
    } else {
      alert("Please enter Email and password");
    }
  };
  return (
    <div id="two-side">
        <div id="container">
          <h1 id="welcome">Welcome</h1>
          <p id="task">Please enter your details</p>
          <input
            id="input"
            required
            name="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)} 
            placeholder="Email"
            type="email"
          ></input>
          <input
            id="input"
            required
            name="Password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <button id="button" onClick={submit} type="submit">
            SIGN IN
          </button>
          <div id="link">
            <p>Don't have an account?</p>
            <a id="signup" href="/sign-up">
              Sign up
            </a>
          </div>
          <a href="/"><Button>Return</Button></a>
          {error && <p style={{color: 'red', fontSize: '18px'}}>{error}</p>}
        </div>
    </div>
  );
};
