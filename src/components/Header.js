import React from 'react';
import styles from './Header.module.scss'

function Header({children}) {
  return (
    <header className={styles.component}>
    <div className={styles.image}>
    <div>{children}</div>
    
    
    <h1>P.G.M Portfolio</h1>
    </div>
    </header>



  );
}

export default Header;