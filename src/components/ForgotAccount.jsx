import React from 'react';
import ac from '../components/forgotAccount.module.css';
import { Link } from 'react-router';

export default function ForgotAccount() {
  return (
    <div className={ac.fullPage}>
      <div className={ac.container}>
        <div className={ac.loginBox}>
          <h2 className={ac.title}>Forgot Password</h2>
          <p className={ac.subtitle}>Enter your registered email to reset your password.</p>
          <form className={ac.form}>
            <input type="email" placeholder="Enter your email" className={ac.input} required />
            <button type="submit" className={ac.button}>Reset Password</button>
          </form>
          <div className={ac.links}>
            <Link to="/login" className={ac.link}>Back to Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
