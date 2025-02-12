import React from 'react';
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Education from './components/Education';
import Certification from './components/Certification';

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black min-h-screen">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <About/>
          <Experience />
          <Tech />
          <Certification/>
          <Education/>
          <Contact/>
        </div>
      </div>
    </BrowserRouter>
  );
}
