import React from 'react';
import styles from '../App.module.css';
import T from 'prop-types';

const Counter = ({ current, total }) => (
  <p className={styles.counter}>
    {current + 1}/{total}
  </p>
);

Counter.propTypes = {
  current: T.number.isRequired,
  total: T.number.isRequired,
};

export default Counter;
