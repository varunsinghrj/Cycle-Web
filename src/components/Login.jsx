import React, { useState } from "react";
import log from "../components/login.module.css"; // Import CSS
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <div className={log.container}>
      <div className={log.loginBox}>
        <h2 className={log.title}>Login to Your Account</h2>
        <form onSubmit={handleSubmit} className={log.form}>
          <input
            type="email"
            placeholder="Email"
            className={log.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className={log.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className={log.button}>Login</button>
        </form>
        <div className={log.links}>
          <Link to="/forgot-password" className={log.link}>Forgot Password?</Link>
          <span className={log.divider}>|</span>
          <Link to="/signup" className={log.link}>Create an Account</Link>
        </div>
      </div>
    </div>
  );
}
