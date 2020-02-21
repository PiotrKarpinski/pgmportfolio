import React from 'react';
import styles from './Project.module.scss'
import Image from './Image.js';
import VizSensor from 'react-visibility-sensor';


class Project extends React.Component {

    state = {
    imgViz: false,
    }

    render() {

  return (
    <VizSensor
        partialVisibility
        onChange={(isVisible) => {
          this.setState({imgViz: isVisible})
        }}
    >
    <div className={styles.component}         

    style={{
            
            opacity: this.state.imgViz ? 1 : 0,
            transition: 'all 600ms ease-in-out'
          }}>
    
    <div className={styles.description}>
    
    <p>{this.props.description}</p>
    </div>          
    <div className={styles.image}>
    <h3>{this.props.title}</h3>
    <Image img={this.props.img}/>
    </div>
    <a target='_blank' rel="noopener noreferrer" href={this.props.url}/>
    </div>
    </VizSensor>
  );
}}

export default Project;