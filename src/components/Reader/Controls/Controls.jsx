import React from 'react';
import styles from '../App.module.css';
import T from 'prop-types';

const Controls = ({ handleClick, current, total }) => (
  <section className={styles.controls}>
    <button
      onClick={handleClick}
      type="button"
      disabled={current === 0}
      className={styles.button}
      name="decrement"
    >
      Назад
    </button>
    <button
      onClick={handleClick}
      type="button"
      disabled={total < current + 2}
      name="increment"
      className={styles.button}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  current: T.number.isRequired,
  total: T.number.isRequired,
};

export default Controls;
