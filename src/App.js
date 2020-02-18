import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import About from './components/About.js';
import ProjectsContainer from './components/ProjectsContainer.js';
import Footer from './components/Footer.js';
import styles from './components/Nav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link, animateScroll as scroll } from "react-scroll";
import data from './data/projects.json'

function App() {
  return (
    <div className="App">


      <Header>
      <Nav>

      </Nav>
      </Header>
      <About/>
      <ProjectsContainer projects={data.projects}/>
      <Footer/>
    </div>
  );
}

export default App;
