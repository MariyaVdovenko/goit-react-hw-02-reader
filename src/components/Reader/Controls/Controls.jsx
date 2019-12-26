import React from 'react';
import styles from '../Reader.module.css';

const Controls = ({
  incrPublication,
  decrPublication,
  activButton,
  activButtonFwd,
}) => (
  <section className={styles.controls}>
    <button
      onClick={decrPublication}
      type="button"
      disabled={!activButton}
      className={styles.button}
    >
      Назад
    </button>
    <button
      onClick={incrPublication}
      type="button"
      disabled={!activButtonFwd}
      className={styles.button}
    >
      Вперед
    </button>
  </section>
);

export default Controls;
