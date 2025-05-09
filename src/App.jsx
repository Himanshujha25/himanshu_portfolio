import React from 'react';
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import Navbar from './components/Navbar';
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Education from './components/Education';
import Certification from './components/Certification';
import FAQ from './components/Faq';
import ChatBot from './components/Chat';
export default function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black min-h-screen">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Tech />
          <Certification />
          <Education />
          <FAQ />           
          <Contact />
          <ChatBot/>
          <Analytics />
        </div>
      </div>
    </BrowserRouter>
  );
}
