import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>
        Avatar
      </h1>
      <nav>
        <Link to="/">Home Page</Link>
        <Link to="/list">List Page</Link>
        <Link to="/details">Detail Page</Link>
      </nav>
    </header>
  );
};

export default Header;