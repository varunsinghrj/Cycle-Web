import React from "react";
import acc from "../components/accessories.module.css";
import pc from '../assets/Cycling Helmet.jpg' 
import pc2 from '../assets/LED Bike Lights.webp' 
import pc3 from '../assets/Anti-Theft Lock.webp' 
import pc4 from '../assets/Grip Cycling Gloves.webp' 
import pc5 from '../assets/Hydration Bottle.webp' 
import pc6 from '../assets/Bike Speedometer.webp' 
import pc7 from '../assets/Portable Tire Pump.webp' 
import pc8 from '../assets/Bike Phone Holder.webp' 
import pc9 from '../assets/Padded Saddle.webp' 
import pc10 from '../assets/Front & Rear Mudguards.webp' 
import pc11 from '../assets/Professional Cycling Shoes.webp' 
import pc12 from '../assets/Rear Bike Rack.webp' 

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
          <img src={pc} alt="Helmet" className={acc.image} />
          <h3 className={acc.itemName}>Cycling Helmet</h3>
          <p className={acc.price}>₹2,499</p>
        </div>

        <div className={acc.card}>
          <img src={pc2} className={acc.image} />
          <h3 className={acc.itemName}>LED Bike Lights</h3>
          <p className={acc.price}>₹999</p>
        </div>

        <div className={acc.card}>
          <img src={pc3} alt="Bike Lock" className={acc.image} />
          <h3 className={acc.itemName}>Anti-Theft Lock</h3>
          <p className={acc.price}>₹1,299</p>
        </div>

        <div className={acc.card}>
          <img src={pc4} alt="Gloves" className={acc.image} />
          <h3 className={acc.itemName}>Grip Cycling Gloves</h3>
          <p className={acc.price}>₹799</p>
        </div>
      </div>

      {/* 🔹 Performance Accessories */}
      <h2 className={acc.categoryTitle}>Performance Accessories</h2>
      <div className={acc.accessoriesGrid}>
        <div className={acc.card}>
          <img src={pc5} alt="Water Bottle" className={acc.image} />
          <h3 className={acc.itemName}>Hydration Bottle</h3>
          <p className={acc.price}>₹799</p>
        </div>

        <div className={acc.card}>
          <img src={pc6} alt="Speedometer" className={acc.image} />
          <h3 className={acc.itemName}>Bike Speedometer</h3>
          <p className={acc.price}>₹3,499</p>
        </div>

        <div className={acc.card}>
          <img src={pc7} alt="Tire Pump" className={acc.image} />
          <h3 className={acc.itemName}>Portable Tire Pump</h3>
          <p className={acc.price}>₹1,099</p>
        </div>

        <div className={acc.card}>
          <img src={pc8} alt="Phone Holder" className={acc.image} />
          <h3 className={acc.itemName}>Bike Phone Holder</h3>
          <p className={acc.price}>₹1,599</p>
        </div>
      </div>

      {/* 🔹 Comfort Accessories */}
      <h2 className={acc.categoryTitle}>Comfort Accessories</h2>
      <div className={acc.accessoriesGrid}>
        <div className={acc.card}>
          <img src={pc9} alt="Saddle" className={acc.image} />
          <h3 className={acc.itemName}>Padded Saddle</h3>
          <p className={acc.price}>₹2,199</p>
        </div>

        <div className={acc.card}>
          <img src={pc10} alt="Mudguard" className={acc.image} />
          <h3 className={acc.itemName}>Front & Rear Mudguards</h3>
          <p className={acc.price}>₹1,499</p>
        </div>

        <div className={acc.card}>
          <img src={pc11} alt="Cycling Shoes" className={acc.image} />
          <h3 className={acc.itemName}>Professional Cycling Shoes</h3>
          <p className={acc.price}>₹4,999</p>
        </div>

        <div className={acc.card}>
          <img src={pc12} alt="Bike Rack" className={acc.image} />
          <h3 className={acc.itemName}>Rear Bike Rack</h3>
          <p className={acc.price}>₹2,799</p>
        </div>
      </div>
    </div>
  );
}
