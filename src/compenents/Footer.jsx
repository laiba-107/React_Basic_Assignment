import React from 'react';
import styles from '../design/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        © 2024 Iron Man Fanpage | Created with ❤️ by <b>Laiba Ali</b>
      </p>
      <p>
        Check out more on{' '}
        <a href="https://www.marvel.com" target="_blank" rel="noopener noreferrer">
          Marvel's Official Page
        </a>
      </p>
    </footer>
  );
};

export default Footer;
