import React from 'react';
import styles from './ProjectsContainer.module.scss'
import Project from './Project.js';

function ProjectsContainer(props) {

  return (
    <section className={styles.component}>
        <div className= {styles.container}>
         {props.projects.map(({id, url,img, title, description}) => (
        
        
            <Project key={id} img={img} url={url} title={title} description={description} />

      ))}
       </div>

    </section>
  );
}

export default ProjectsContainer;