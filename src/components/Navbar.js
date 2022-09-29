import React from 'react';
import { Link } from 'react-router-dom';

// Import Styles
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <h1 className={styles.title}>Math Magician</h1>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </div>
  </nav>
);

export default Navbar;
