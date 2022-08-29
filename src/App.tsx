import React, { useState, useEffect } from 'react'
import './App.css';
import { gsap } from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToTop from "react-scroll-to-top";

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Home from './components/Home';

import TimelineGS from './utils/TimelineGS';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [gsTimeline, setGSTimeline] = useState<gsap.core.Timeline>(
    gsap.timeline({
      delay: 0.15,
    })
  );

  return (
    <div className='App'>
      <TimelineGS.Provider value={{ gsTimeline }}>
        <Header />
        <div>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contacts />
        </div>
        <ScrollToTop smooth color="white" width="38" style={{backgroundColor: "grey", opacity: 0.5}} />
      </TimelineGS.Provider>
    </div>
  );
}

export default App;
