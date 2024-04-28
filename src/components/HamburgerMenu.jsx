import React, { useState } from 'react';
import './HamburgerMenu.css'; 

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="hamburger-menu">
      <button className="hamburger-icon" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
      {isOpen && (
        <div className="menu">
          <button className="close-btn" onClick={closeMenu}>X</button>
          <ul>
            <li>HOME</li>
            <li>DISCOVER</li>
            <li>SPECIAL DEALS</li>
            <li>CONTACT</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
