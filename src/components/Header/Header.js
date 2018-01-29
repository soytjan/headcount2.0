import React from 'react';
import './Header.css';
import image from './school.svg';

const Header = () => {
  return (
    <div className="header">
      <img src={image} alt="Flat icon logo of a school" className="icon" />
      <h1>Headcount 2.0</h1>
    </div>
  );
};

export default Header;
