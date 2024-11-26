import React from 'react';
import styles from '../design/PortfolioCard.module.css';

const PortfolioCard = ({ name, image, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={`${name}`} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default PortfolioCard;

