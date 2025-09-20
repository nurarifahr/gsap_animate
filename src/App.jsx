import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cokctails from './components/Cokctails';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cokctails/>
      <About/>
      <Art/>
      <Menu/>
      <Contact/>
    </main>
  )
}

export default App
