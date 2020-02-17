import React from 'react';
import styles from './About.module.scss'
import AboutImgOne from '../images/about1.jpg';
import AboutImgTwo from '../images/about2.jpg';



function About() {
  return (
    <section className={styles.component}>
    <div className={styles.row}>
    <div className={styles.containerTop}>
    	<div style={{ backgroundImage: `url(${AboutImgOne})`}} className={styles.image}>
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
    </div>
    <div className={styles.row}>
    <div className={styles.containerBottom}>
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
    </div>
    </section>
  );
}

export default About;
