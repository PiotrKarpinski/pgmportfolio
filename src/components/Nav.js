import React from 'react';
import styles from './Nav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-scroll";

function Nav() {
  return (
    <nav className={styles.component}>
    
        <ul>

            <li><a rel="noopener noreferrer" target='_blank' href='https://github.com/PiotrKarpinski'><FontAwesomeIcon icon={faGithub}/></a></li>

            <li><Link 
            activeClass="home"
            to="header"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {400}
            style={{fontSize: 30+'px'}}
            ><FontAwesomeIcon icon={faHome}/></Link></li>

            <li><a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/pgmkarpinski/'><FontAwesomeIcon icon={faLinkedin}/></a></li>



         </ul>
    </nav>
  );
}

export default Nav;