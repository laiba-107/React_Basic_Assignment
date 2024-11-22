import React from 'react';
import { Link } from 'react-router-dom'; // Optional if you're using React Router
import styles from './design/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">MyWebsite</a>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className={styles.navToggle}>
        <button>&#9776;</button> {/* This is my profile.*/}
      </div>
    </nav>
  );
};

export default Navbar;
