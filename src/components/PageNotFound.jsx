import React from 'react';
import pnf from '../components/pageNotFound.module.css';
import { Link } from 'react-router';

export default function PageNotFound() {
  return (
    <div className={pnf.fullPage}>
      <div className={pnf.container}>
        <h1 className={pnf.title}>404</h1>
        <p className={pnf.subtitle}>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className={pnf.button}>Go to Home</Link>
      </div>
    </div>
  );
}
