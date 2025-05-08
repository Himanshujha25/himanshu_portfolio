import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import logo from "../assets/logo.webp";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      scrollTop > 100 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActive(id);
    setToggle(false);
    if (id === "") window.scrollTo(0, 0);
  };

  return (
    <nav className={`${styles.paddingX} w-full fixed top-0 z-20 ${
      scrolled ? "bg-primary/95 backdrop-blur-md" : "bg-transparent"
    } transition-all duration-300 ease-in-out `}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto py-3 pr-1 ">
        {/* Logo and Name */}
     
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => handleNavClick("")}
          aria-label="Return to home"
        >
          <img 
            src={logo} 
            alt="logo" 
            className="w-14 h-14 object-contain rounded-full border-2 border-yellow-500/30 hover:border-yellow-500 transition-colors duration-300" 
          />
          <p className="text-2xl font-bold tracking-wide cursor-pointer font-[Playfair Display] text-yellow-500 hover:text-yellow-400 transition-colors duration-300">
            Himanshu Jha
          </p>
        </Link>
       

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              {link.external ? (
                <a
                  href={link.URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 text-lg font-medium ${
                    active === link.id ? "text-yellow-400" : "text-white"
                  } hover:text-yellow-400 transition-colors duration-300 group`}
                >
                  {link.title}
                  <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ↗
                  </span>
                </a>
              ) : (
                <a
                  href={`#${link.id}`}
                  className={`text-lg font-medium ${
                    active === link.id 
                      ? "text-yellow-400 underline decoration-2 underline-offset-4" 
                      : "text-white"
                  } hover:text-yellow-400 hover:underline decoration-2 underline-offset-4 transition-all duration-300`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.title}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
          onClick={() => setToggle(!toggle)}
        >
          <img
            src={toggle ? close : menu}
            alt="menu toggle"
            className="w-7 h-7 object-contain"
          />
        </button>

        {/* Mobile Menu */}
        <div className={`${
          toggle ? "flex" : "hidden"
        } md:hidden absolute top-20 right-6 bg-primary/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl p-6 transition-all duration-300`}>
          <ul className="list-none flex flex-col gap-4 w-full">
            {navLinks.map((link) => (
              <li key={link.id}>
                {link.external ? (
                  <a
                    href={link.URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg font-medium ${
                      active === link.id ? "text-yellow-400" : "text-white"
                    } hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2`}
                    onClick={() => handleNavClick(link.id)}
                  >
                    {link.title}
                    <span className="text-xs">↗</span>
                  </a>
                ) : (
                  <a
                    href={`#${link.id}`}
                    className={`text-lg font-medium ${
                      active === link.id 
                        ? "text-yellow-400 underline decoration-2 underline-offset-4" 
                        : "text-white"
                    } hover:text-yellow-400 transition-all duration-300`}
                    onClick={() => handleNavClick(link.id)}
                  >
                    {link.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}