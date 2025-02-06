import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import logo from "../assets/logo.webp";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center justify-between py-1 top-0 bg-primary text-white`}>
      <div className="w-full flex justify-between items-center px-6 md:px-10">
        {/* Logo and Name */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-16 h-16 object-contain rounded-full" />
          <p className="text-2xl font-bold cursor-pointer flex">
            <span className="hidden sm:block">HIMANSHU</span>&nbsp;
            <span className="text-yellow-500 italic block sm:hidden">Web Developer</span>
            <span className="text-yellow-500 italic hidden sm:block"> || Web Developer</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`cursor-pointer ${active === link.id ? "text-yellow-400" : "text-white"} text-2xl hover:text-yellow-600 font-thin transition duration-200`}
              onClick={() => setActive(link.id)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Icon */}
        <div className="sm:hidden flex items-center flex-1 justify-end">
          <img
            src={toggle ? close : menu}
            alt="menu toggle"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)} 
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${!toggle ? "hidden" : "flex"} sm:hidden absolute top-20 right-8 mx-4 min-w-[140px] z-10 p-6 bg-primary rounded-xl transition-all duration-300 ease-in-out`}>
        <ul className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`cursor-pointer ${active === link.id ? "text-yellow-400" : "text-white"} text-2xl hover:text-yellow-600 transition duration-200 font-medium text-[16px]`}
              onClick={() => {
                setActive(link.id);
                setToggle(false); 
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
