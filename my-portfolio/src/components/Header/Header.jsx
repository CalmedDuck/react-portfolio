import React from 'react';
import Navigation from '../Navigation/Navigation'; // Ensure this is the correct path
import './Header.css'; // Ensure this is the correct path

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Brock Williams</h1>
      <Navigation />
    </header>
  );
};

export default Header;
