import React from 'react';
import styles from '../Reader.module.css';

const Controls = ({ incrPublication, decrPublication, activButton }) => (
  <section className={styles.controls}>
    <button
      onClick={decrPublication}
      type="button"
      disabled={!activButton}
      className={styles.button}
    >
      Назад
    </button>
    <button onClick={incrPublication} type="button" className={styles.button}>
      Вперед
    </button>
  </section>
);

export default Controls;
