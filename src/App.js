import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import About from './components/About.js';
import ProjectsContainer from './components/ProjectsContainer.js';
import Footer from './components/Footer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import data from './data/projects.json'
import VizSensor from 'react-visibility-sensor';
import Contact from './components/Contact.js';


class App extends React.Component {

  state = {
    viz: false,
  }

handleClick = () => {
  console.log('test')
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

render() {
  return (
    <div className="App">


      <Header>
      <Nav>
      </Nav>
      </Header>

      <button style={{
            opacity: this.state.viz ? 1 : 0,
            transition: 'all 700ms ease-in-out'
          }}
          className='scroll-to-top' onClick={this.handleClick}><FontAwesomeIcon icon={faChevronUp}/></button>

      <About content={data.content}/>
      

      <VizSensor
      partialVisibility
        onChange={(isVisible) => {
          this.setState({viz: isVisible})
        }}
      >
      <ProjectsContainer projects={data.projects}/>
      </VizSensor>
      <Contact />
      <Footer/>
      

    </div>
  );
}}

export default App;
