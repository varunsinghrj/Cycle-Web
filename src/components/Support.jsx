import React from "react";
import sup from "../components/support.module.css"; // Import CSS

export default function Support() {
  return (
    <div className={sup.container}>
      <h1 className={sup.title}>How Can We Help?</h1>
      <p className={sup.description}>
        Find answers to your questions or contact our support team for assistance.
      </p>

      {/* 🔹 FAQ Section */}
      <h2 className={sup.sectionTitle}>Frequently Asked Questions</h2>
      <div className={sup.faq}>
        <div className={sup.question}>
          <h3>📌 How long does the battery last?</h3>
          <p>The battery lasts between 50-80 km on a single charge, depending on riding conditions.</p>
        </div>

        <div className={sup.question}>
          <h3>📌 How do I maintain my e-bike?</h3>
          <p>Keep your tires inflated, clean the chain, and store the battery in a dry place.</p>
        </div>

        <div className={sup.question}>
          <h3>📌 What accessories are compatible?</h3>
          <p>Our accessories include helmets, lights, locks, and more. Visit our accessories page.</p>
        </div>

        <div className={sup.question}>
          <h3>📌 What should I do if my e-bike has issues?</h3>
          <p>Check the manual, restart your bike, and if the issue persists, contact support.</p>
        </div>
      </div>

      {/* 🔹 Contact Form */}
      <h2 className={sup.sectionTitle}>Contact Us</h2>
      <form className={sup.contactForm}>
        <input type="text" placeholder="Your Name" className={sup.input} required />
        <input type="email" placeholder="Your Email" className={sup.input} required />
        <textarea placeholder="Describe your issue" className={sup.textarea} required></textarea>
        <button type="submit" className={sup.button}>Submit</button>
      </form>

      {/* 🔹 Customer Support Info */}
      <h2 className={sup.sectionTitle}>Customer Support</h2>
      <div className={sup.supportInfo}>
        <p>📞 Phone: <strong>+91 7976517869</strong></p>
        <p>📧 Email: <strong>support@ebike.com</strong></p>
        <p>🕒 Support Hours: <strong>Mon-Sat, 9 AM - 6 PM</strong></p>
      </div>

      {/* 🔹 Live Chat Button */}
      <button className={sup.chatButton}>💬 Live Chat</button>
    </div>
  );
}
