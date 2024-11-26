import React from 'react';
import styles from '../design/BlogCard.module.css';

const BlogCard = ({ title, description, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default BlogCard;
