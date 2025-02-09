import React from 'react';
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Feedback from "./components/Feedback";
import Hero from "./components/Hero";
import Starcanvas from "./components/Starcanvas";
import Tech from "./components/Tech";
import Work from "./components/work";


export default function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black min-h-screen">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <About/>
        </div>

        <div className="mt-1">
      
          <Experience />
          <Tech />
          <Feedback />
        </div>

        <div className="relative z-0">
          <Starcanvas />
     
        </div>
      </div>
    </BrowserRouter>
  );
}
