import React, { useState } from "react";
import nv from "./nav.module.css";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from 'react-router-dom';
function Navbar() {
  const [menuM, setmenuM] = useState(false);
  return (
    <>
      <div className={nv.navbar}>
        <div className={nv.logo}></div>
        <div className={nv.menu}>

        <Link to="/" className={nv.a}>Home</Link>
       <Link to="/ebike" className={nv.a}>E-bikes</Link>
       <Link to="/accessories" className={nv.a}>Accessories</Link>
       <Link to="/support" className={nv.a}>Support</Link>
        </div>
        <Link to="/login"> <button className={nv.button}>My Account</button></Link>
        <div className={nv.icons}>
          <Link to="/login" className={nv.user}>
            <FaRegUser />
          </Link>
          <a  className={nv.hamburger} onClick={() => setmenuM(!menuM)}>
            <MdOutlineMenu />
          </a>
        </div>
      </div>
      <div className={menuM ? nv.menuMobile : nv.menuMobileHidden}>
      <Link to="/" className={nv.a2}>Home</Link>
       <Link to="/ebike" className={nv.a2}>E-bikes</Link>
       <Link to="/accessories" className={nv.a2}>Accessories</Link>
       <Link to="/support" className={nv.a2}>Support</Link>
      </div>
    </>
  );
}
export default Navbar;
