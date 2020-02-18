import React from 'react';
import styles from './Project.module.scss'
import Image from './Image.js';

function Project(props) {
  return (
    <div className={styles.component}>
    <div className={styles.image}>
    <h3>{props.title}</h3>
    <Image img={props.img}/>
    </div>
    </div>
  );
}

export default Project;