import React from 'react';
import styles from './Header.module.scss'

function Header({children}) {
  return (
    <header className={styles.component}>
    <div>{children}</div>
    <div className={styles.image}>
     
    
    
    <h1>P.G.M Portfolio</h1>
    </div>
    </header>



  );
}

export default Header;