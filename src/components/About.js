import React from 'react';
import styles from './About.module.scss'
import AboutImgOne from '../images/about1.jpg';
import AboutImgTwo from '../images/about2.jpg';
import VizSensor from 'react-visibility-sensor';



class About extends React.Component {

	state = {
    imgViz1: false,
    imgViz2: false
  }


	render(){


  return (

    <section className={styles.component}>
    <VizSensor
    	partialVisibility
        onChange={(isVisible) => {
          this.setState({imgViz1: isVisible})
        }}
    >
    <div className={styles.container}    

    	style={{
            opacity: this.state.imgViz1 ? 1 : 0,
            marginLeft: this.state.imgViz1 ? 12 +'vw' : 0 + 'vw', 
            transition: 'all 700ms ease-in-out'
          }}>

    	<div style={{ backgroundImage: `url(${AboutImgOne})`}} className={styles.image}>
    	</div>
    	<div className={styles.info}>
    		<p>
		    	Nam dictum, odio id vestibulum hendrerit, massa quam egestas dolor, sed aliquam lectus lectus sit amet tortor. Ut nec laoreet turpis, non blandit erat. Suspendisse rhoncus viverra lectus, maximus lobortis massa ornare at.
			    Quisque sit amet rutrum nunc, quis ultricies sem. Mauris efficitur, ipsum ac elementum vehicula, felis sem fringilla magna, at fermentum sapien tellus et dui.
			    Phasellus vestibulum, urna sed finibus ornare, lectus augue lobortis orci, quis pharetra neque justo et lacus. Donec sagittis maximus ipsum vel congue.
			    Nulla a dolor gravida, vestibulum enim quis, venenatis leo. Aenean ullamcorper libero a ligula tristique, ac convallis justo cursus. Fusce feugiat magna id arcu finibus convallis.
			    Donec eros erat, hendrerit vel nulla sit amet, venenatis volutpat mauris.
      		</p>
        </div>
    </div>
    </VizSensor>
    <VizSensor
        partialVisibility
        onChange={(isVisible) => {
          this.setState({imgViz2: isVisible})
        }}
    >
    <div className={styles.container}           
    	style={{

            opacity: this.state.imgViz2 ? 1 : 0,
            marginRight: this.state.imgViz2 ? 14 +'vw' : 0 + 'vw', 
            transition: 'all 700ms ease-in-out'
          }}
		>
    	<div style={{ backgroundImage: `url(${AboutImgTwo})`}} className={styles.image}>
    	</div>
    	<div className={styles.info}>
    		<p>
		    	Nam dictum, odio id vestibulum hendrerit, massa quam egestas dolor, sed aliquam lectus lectus sit amet tortor. Ut nec laoreet turpis, non blandit erat. Suspendisse rhoncus viverra lectus, maximus lobortis massa ornare at.
			    Quisque sit amet rutrum nunc, quis ultricies sem. Mauris efficitur, ipsum ac elementum vehicula, felis sem fringilla magna, at fermentum sapien tellus et dui.
			    Phasellus vestibulum, urna sed finibus ornare, lectus augue lobortis orci, quis pharetra neque justo et lacus. Donec sagittis maximus ipsum vel congue.
			    Nulla a dolor gravida, vestibulum enim quis, venenatis leo. Aenean ullamcorper libero a ligula tristique, ac convallis justo cursus. Fusce feugiat magna id arcu finibus convallis.
			    Donec eros erat, hendrerit vel nulla sit amet, venenatis volutpat mauris. Vivamus pulvinar mi lectus, quis tincidunt lectus ultricies id. Nullam vel efficitur magna. Etiam pulvinar egestas massa, eu porttitor quam semper ut.
	    	</p>
    </div>
    </div>
    </VizSensor>

    </section>
  );
}}

export default About;
