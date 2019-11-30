import React from 'react';
import styles from '../Reader.module.css';

const Counter = ({ current, total }) => (
  <p className={styles.counter}>
    {current + 1}/{total}
  </p>
);

export default Counter;
