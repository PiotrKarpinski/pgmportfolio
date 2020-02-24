import React from 'react';
import styles from './Box.module.scss'
import VizSensor from 'react-visibility-sensor';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab} from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faSalesforce } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase} from '@fortawesome/free-solid-svg-icons';
import { faYarn } from '@fortawesome/free-brands-svg-icons';
import { faNpm} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faLinkedin,faCss3Alt,faHtml5, faReact,faGithub,faJs,
faSass,
faSalesforce,
faBootstrap,
faJava,
faDatabase, faEnvelope)

class Box extends React.Component {

	state = {
    Viz: false
    }


	render(){

console.log(this.props)

  return (

    <VizSensor
    	partialVisibilty
        onChange={(isVisible) => {
          this.setState({Viz: isVisible})
        }}
    >
    <div style={{

            opacity: this.state.Viz ? 1 : 0,
            [this.props.marginDir]: this.state.Viz ? 15 + 'vw' : 0 + 'vw',
            transition: 'all 700ms ease-in-out'
          }}
        className={styles.component}>
        <div className={styles.icons}>
    {this.props.icons.map(({id, prefix, iconName}) => (
        
        <FontAwesomeIcon style={{margin: 12 +'px', fontSize: 48+'px'}} key={id} icon={[prefix,iconName]}/>

      ))}
    </div>
    <a href={this.props.url} target={this.props.blank ? '_blank' : '_self'} rel="noopener noreferrer"/>
    
    </div>
    </VizSensor>
  );
}}

export default Box;
