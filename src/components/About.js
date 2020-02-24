import React from 'react';
import styles from './About.module.scss'
import AboutImgOne from '../images/about1.jpg';
import AboutImgTwo from '../images/about2.jpg';
import VizSensor from 'react-visibility-sensor';
import Box from './Box.js';


class About extends React.Component {

	state = {
    imgViz1: false,
    imgViz2: false
  }


	render(){

	console.log(this.props.content)

    return (

    <section className={styles.component}>
    <div className={styles.row}>

        <VizSensor
        partialVisibility
        onChange={(isVisible) => {
          this.setState({imgViz1: isVisible})
        }}
    >
    <div className={styles.container}           
    	style={{

            opacity: this.state.imgViz1 ? 1 : 0,
            marginLeft: this.state.imgViz1 ? 15 +'vw' : 0 + 'vw', 
            transition: 'all 700ms ease-in-out'
          }}
		>
    	<div style={{ backgroundImage: `url(${AboutImgOne})`}} className={styles.image}>
    	</div>
    	<div className={styles.info}>
    		<p style={{textAlign: "left"}}>
            {this.props.content.about[0].pl}
	    	</p>
    </div>
    </div>
    </VizSensor>
    <div className={styles.list}>
    <h3 style = {{ marginRight: 15+'vw'}} className={styles.title}>Technologies I use:</h3>
             {this.props.content.skills.map(({id, icons,description, prefix, marginDir}) => (
        
        
            <Box key={id} icons={icons} description={description} prefix={prefix} marginDir={marginDir} />

      ))}
    </div>
    </div>
    <div className={styles.row}>
        <div className={styles.list}>
            <h3 style = {{ marginLeft: 15+'vw'}} className={styles.title}>Links and contact information</h3>

             {this.props.content.links.map(({id, prefix, url, marginDir, description, icons,blank}) => (
        
        
            <Box key={id} blank={blank} marginDir={marginDir} url={url} description={description} prefix={prefix} icons={icons} />

      ))}
    </div>
    <VizSensor
        partialVisibility
        onChange={(isVisible) => {
          this.setState({imgViz2: isVisible})
        }}
    >
    <div className={styles.container}           
    	style={{

            opacity: this.state.imgViz2 ? 1 : 0,
            marginRight: this.state.imgViz2 ? 15 +'vw' : 0 + 'vw', 
            transition: 'all 700ms ease-in-out'
          }}
		>
    	<div style={{ backgroundImage: `url(${AboutImgTwo})`}} className={styles.image}>
    	</div>
    	<div className={styles.info}>
    		<p style={{textAlign: "right"}}>
            {this.props.content.about[1].pl}
	    	</p>
    </div>
    </div>
    </VizSensor>

    </div>
    </section>
  );
}}

export default About;
