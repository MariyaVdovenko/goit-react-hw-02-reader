import React from 'react';
import styles from '../Reader.module.css';

const Publication = ({ item }) => {
  return (
    <article key={item.id} className={styles.publication}>
      <h2>{item.title}</h2>
      <p>{item.text}</p>
    </article>
  );
};
export default Publication;
