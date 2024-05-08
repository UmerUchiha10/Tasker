import React from 'react';
import logo from "../../images/list.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className='flex justify-around bg-red-900 text-white py-2'>
      <div className="logo">
        <img src={logo} alt="Phone Icon" style={{ width: '35px', height: '35px' }} />
      </div>
      <ul className="flex gap-8 mx-9">
        <li className={`cursor-pointer transition-all ${location.pathname === "/" ? "font-bold" : ""}`}>
          <Link to="/">Home</Link>
        </li>
       
        <li className={`cursor-pointer transition-all ${location.pathname === "/contact" ? "font-bold" : ""}`}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
