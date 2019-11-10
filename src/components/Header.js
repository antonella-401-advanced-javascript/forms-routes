import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
  return (
    <header className={styles.Head}>
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