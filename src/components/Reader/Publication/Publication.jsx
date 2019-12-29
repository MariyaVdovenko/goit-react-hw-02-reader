import React from 'react';
import styles from '../App.module.css';
import T from 'prop-types';

const Publication = ({ item }) => {
  return (
    <article key={item.id} className={styles.publication}>
      <h2>{item.title}</h2>
      <p>{item.text}</p>
    </article>
  );
};

Publication.propType = {
  item: T.shape({
    id: T.string.isRequired,
    title: T.string,
    text: T.string,
  }),
};

export default Publication;
