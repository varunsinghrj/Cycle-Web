import React from "react";
import ebv from "../components/ebike.module.css"; // Importing CSS module

export default function Ebike() {
  return (
    <div className={ebv.container}>
      {/* Hero Section */}
      <header className={ebv.hero}>
        <div className={ebv.heroText}>
          <h1>Revolutionize Your Ride</h1>
          <p>Experience the future of mobility with our high-performance e-bike.</p>
          <button className={ebv.button}>Explore Now</button>
        </div>
      </header>

      {/* Features Section */}
      <section className={ebv.features}>
        <h2>Why Choose Our E-Bike?</h2>
        <div className={ebv.featureList}>
          <div className={ebv.featureCard}>
            <h3>🔋 Long Battery Life</h3>
            <p>Ride up to 80km on a single charge.</p>
          </div>
          <div className={ebv.featureCard}>
            <h3>⚡ Fast Charging</h3>
            <p>Full charge in just 2 hours.</p>
          </div>
          <div className={ebv.featureCard}>
            <h3>🚀 High Speed</h3>
            <p>Reach speeds up to 45km/h effortlessly.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={ebv.about}>
        <h2>About Our E-Bike</h2>
        <p>
          Our e-bike is designed for urban commuting and off-road adventures.
          With cutting-edge technology and eco-friendly design, it's built for the future.
        </p>
      </section>

      {/* Contact Section */}
      <footer className={ebv.footer}>
        <h2>Contact Us</h2>
        <p>Email: support@ebike.com</p>
        <p>Phone: +91 7976517869</p>
      </footer>
    </div>
  );
}
