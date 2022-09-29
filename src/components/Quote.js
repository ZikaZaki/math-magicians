import React from 'react';
import styles from './Quote.module.css';

const Quote = () => (
  <div className={styles.quote}>
    <h2 className={styles.subtitle}>
      <strong>&ldquo; </strong>
      Mathematics is not about numbers, equations, computations,
      or algorithms: it is about understanding.
      <strong> &bdquo;</strong>
    </h2>
    <span className={styles.author}>
      Author: William Paul Thurston
    </span>
  </div>
);

export default Quote;
