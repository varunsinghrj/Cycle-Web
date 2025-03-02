import React from "react";
import acc from "../components/accessories.module.css"; // Import CSS

export default function Accessories() {
  return (
    <div className={acc.container}>
      <h1 className={acc.title}>Premium Bike Accessories</h1>
      <p className={acc.description}>
        Upgrade your ride with high-quality accessories designed for safety, comfort, and performance.
      </p>

      {/* 🔹 Safety Accessories */}
      <h2 className={acc.categoryTitle}>Safety Accessories</h2>
      <div className={acc.accessoriesGrid}>
        <div className={acc.card}>
          <img src="../assets/ebike.jpg" alt="Helmet" className={acc.image} />
          <h3 className={acc.itemName}>Cycling Helmet</h3>
          <p className={acc.price}>₹2,499</p>
        </div>

        <div className={acc.card}>
          <img src="/images/lights.jpg" alt="Bike Lights" className={acc.image} />
          <h3 className={acc.itemName}>LED Bike Lights</h3>
          <p className={acc.price}>₹999</p>
        </div>

        <div className={acc.card}>
          <img src="/images/lock.jpg" alt="Bike Lock" className={acc.image} />
          <h3 className={acc.itemName}>Anti-Theft Lock</h3>
          <p className={acc.price}>₹1,299</p>
        </div>

        <div className={acc.card}>
          <img src="/images/gloves.jpg" alt="Gloves" className={acc.image} />
          <h3 className={acc.itemName}>Grip Cycling Gloves</h3>
          <p className={acc.price}>₹799</p>
        </div>
      </div>

      {/* 🔹 Performance Accessories */}
      <h2 className={acc.categoryTitle}>Performance Accessories</h2>
      <div className={acc.accessoriesGrid}>
        <div className={acc.card}>
          <img src="/images/bottle.jpg" alt="Water Bottle" className={acc.image} />
          <h3 className={acc.itemName}>Hydration Bottle</h3>
          <p className={acc.price}>₹799</p>
        </div>

        <div className={acc.card}>
          <img src="/images/speedometer.jpg" alt="Speedometer" className={acc.image} />
          <h3 className={acc.itemName}>Bike Speedometer</h3>
          <p className={acc.price}>₹3,499</p>
        </div>

        <div className={acc.card}>
          <img src="/images/tire-pump.jpg" alt="Tire Pump" className={acc.image} />
          <h3 className={acc.itemName}>Portable Tire Pump</h3>
          <p className={acc.price}>₹1,099</p>
        </div>

        <div className={acc.card}>
          <img src="/images/phone-holder.jpg" alt="Phone Holder" className={acc.image} />
          <h3 className={acc.itemName}>Bike Phone Holder</h3>
          <p className={acc.price}>₹1,599</p>
        </div>
      </div>

      {/* 🔹 Comfort Accessories */}
      <h2 className={acc.categoryTitle}>Comfort Accessories</h2>
      <div className={acc.accessoriesGrid}>
        <div className={acc.card}>
          <img src="/images/saddle.jpg" alt="Saddle" className={acc.image} />
          <h3 className={acc.itemName}>Padded Saddle</h3>
          <p className={acc.price}>₹2,199</p>
        </div>

        <div className={acc.card}>
          <img src="/images/mudguard.jpg" alt="Mudguard" className={acc.image} />
          <h3 className={acc.itemName}>Front & Rear Mudguards</h3>
          <p className={acc.price}>₹1,499</p>
        </div>

        <div className={acc.card}>
          <img src="/images/cycling-shoes.jpg" alt="Cycling Shoes" className={acc.image} />
          <h3 className={acc.itemName}>Professional Cycling Shoes</h3>
          <p className={acc.price}>₹4,999</p>
        </div>

        <div className={acc.card}>
          <img src="/images/rack.jpg" alt="Bike Rack" className={acc.image} />
          <h3 className={acc.itemName}>Rear Bike Rack</h3>
          <p className={acc.price}>₹2,799</p>
        </div>
      </div>
    </div>
  );
}
