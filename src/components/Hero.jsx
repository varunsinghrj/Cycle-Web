import React from "react";
import hv from "./hero.module.css";
function Hero() {
  return (
    <>
      <div className={hv.hero}>
        <h2>URBANO V5</h2>
        <h1>The Ultimate Ride</h1>
      </div>
      <div className={hv.space1}></div>
      <div className={hv.space}>
        <h1>Specifications</h1>
      </div>
      <div className={hv.hero2}>
        <div className={hv.box1}>
          <div className={hv.details}>
            <div className={hv.d1}>Battery</div>
            <div className={hv.d2}>
              <ul>
                <li>
                  Battery type: Integrated and removable lithium-ion battery.
                </li>
                <li>
                  Battery capacity: 500Wh to 750Wh for extended range options.
                </li>
                <li>
                  Range: 40-60 miles (64-96 kilometers) on a single charge.
                </li>
              </ul>
            </div>
          </div>
          <div className={hv.details1}>
            <div className={hv.d1}>Charging time</div>
            <div className={hv.d2}>
              <ul>
                <li>Fast charging: 0-80% in approximately 2-3 hours.</li>
                <li>Full charge: 100% in 4-5 hours.</li>
              </ul>
            </div>
          </div>
          <div className={hv.details}>
            <div className={hv.d1}>Assist speed</div>
            <div className={hv.d2}>
              <ul>
                <li>
                  Pedal assist: Support up to 20-28 mph (32-45 km/h) depending
                  on local regulations.
                </li>
                <li>
                  {" "}
                  Multiple assist modes: Include eco, normal, and sport for
                  different riding preferences and energy conservation.
                </li>
              </ul>
            </div>
          </div>
          <div className={hv.details2}>
            <div className={hv.d1}>Security</div>
            <div className={hv.d2}>
              <ul>
                <li>
                  Integrated theft protection: Advanced anti-theft features,
                  such as GPS tracking, remote locking/unlocking, and motion
                  sensors.
                </li>
                <li>
                  Frame lock: Integrated frame lock to secure the rear wheel and
                  deter theft.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={hv.box2}></div>
      </div>
    </>
  );
}
export default Hero;
