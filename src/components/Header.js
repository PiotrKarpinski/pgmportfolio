import React from 'react';
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.component}>
    <div className={styles.image}>
    <h1>P.G.M Portfolio</h1>
    </div>

    </header>
  );
}

export default Header;