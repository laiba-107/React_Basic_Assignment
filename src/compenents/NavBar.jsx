import React from 'react';
import styles from '../design/Navbar.module.css';

const NavBar = ({ setActiveTab }) => {
  return (
    <nav style={{ background: "green", padding: "10px", color: "white" }}>
      <button onClick={() => setActiveTab("ProfileCard")}>Profile Card</button>
      <button onClick={() => setActiveTab("BlogCard")}>Blog Card</button>
      <button onClick={() => setActiveTab("FormValidation")}>
        Form with Validation
      </button>
    </nav>
  );
};

export default NavBar;
