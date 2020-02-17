import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import About from './components/About.js';
import ProjectsContainer from './components/ProjectsContainer.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <About/>
      <ProjectsContainer/>
      <Footer/>
    </div>
  );
}

export default App;
