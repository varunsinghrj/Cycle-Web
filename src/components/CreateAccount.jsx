import React from 'react';
import ac from '../components/account.module.css';
import { Link } from 'react-router';

export default function CreateAccount() {
  return (
    <div className={ac.fullPage}>
      <div className={ac.container}>
        <div className={ac.loginBox}>
          <h2 className={ac.title}>Create Account</h2>
          <form className={ac.form}>
            <input type="text" placeholder="Full Name" className={ac.input} required />
            <input type="email" placeholder="Email" className={ac.input} required />
            <input type="password" placeholder="Password" className={ac.input} required />
            <input type="password" placeholder="Confirm Password" className={ac.input} required />
            <button type="submit" className={ac.button}>Sign Up</button>
          </form>
          <div className={ac.links}>
            <Link to="/login" className={ac.link}>Already have an account?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
