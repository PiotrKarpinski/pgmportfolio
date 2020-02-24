import React from 'react';
import styles from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Contact() {
  return ( 
  <section id='contact' className={styles.component}>
  <h3>Kontakt</h3>
      <FontAwesomeIcon  className={styles.env} icon={faEnvelope}/>
  		<h5>Email: 
        <span> pgmkarpinski@gmail.com</span>
      </h5>


  </section>
  );
}

export default Contact;