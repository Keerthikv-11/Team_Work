import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faCircleXmark } from '@fortawesome/free-solid-svg-icons'
export const Navigation = () => {
  const [ open , setopen] = useState(false);

  const togglebtn = ()=>{
    setopen(!open)
  }
  
  return (
    <>
    <nav className="navbar">
      <div className="nav-container">
        
        <div className="nav-logo">
           Keerthi<span>.</span>
        </div>

        <ul className={`nav-links ${open ? 'active' : ''}`}>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Aboutme" className={({ isActive }) => (isActive ? 'active' : '')}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/TechStack" className={({ isActive }) => (isActive ? 'active' : '')}>
              Tech Stacks
            </NavLink>
          </li>
          <li>
            <NavLink to="/Projects" className={({ isActive }) => (isActive ? 'active' : '')}>
              Projects
            </NavLink>
          </li>
        </ul>
        <div className="nav-actions">
           
           <NavLink to="/Contact" className="contact-btn">
             Contact ↗
           </NavLink>
        </div>
      </div>

      <div className="menu-bar"  onClick={togglebtn}>
        
        <FontAwesomeIcon icon={open ? faCircleXmark : faBars} />
      </div>
    </nav>

    
    </>
  );
};