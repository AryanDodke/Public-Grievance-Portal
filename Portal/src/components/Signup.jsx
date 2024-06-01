import React, { useState } from "react";
import "../css/signup.css"; // Make sure the path is correct
import firebaseConfig from "../config/firebaseconfig";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [confpassword, setConfpassword] = useState("");
  const [error, setError] = useState(null);

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();

  const handleSignUp = () => {
    if (password === confpassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          set(ref(database, "users/" + user.uid), {
            username: username,
            email: email,
            phone: phone,
          });
          alert("Registration successful!!");
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setError("Passwords do not match.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h2 className="signup-heading">Sign Up</h2>

        <div className="mb-4">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="signup-input"
            placeholder="Choose a username"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
            placeholder="Choose a strong password"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="confpassword">Confirm Password</label>
          <input
            type="password"
            id="confpassword"
            name="confpassword"
            value={confpassword}
            onChange={(e) => setConfpassword(e.target.value)}
            className="signup-input"
            placeholder="Confirm your password"
            required
          />
        </div>

       

        <div className="mb-6">
          <label htmlFor="phone">Contact Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="signup-input"
            placeholder="Enter Your contact number"
            required
          />
        </div>

        <button type="submit" className="signup-button" onClick={handleSignUp}>
          Sign Up
        </button>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="signup-login-link">
            Log In
          </a>
        </p>
      </div>
      {error && <div className="signup-error">{error}</div>}
    </div>
  );
}

export default Signup;