import mobile from "../assets/mobile.png";
import backend from "../assets/backend.png";
import creator from "../assets/creator.png";
import web from "../assets/web.png";

// Import tech-related images from the 'tech' folder
import javascript from "../assets/tech/javascript.png";
import typescript from "../assets/tech/typescript.png";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import nodejs from "../assets/tech/nodejs.png";
import mongodb from "../assets/tech/mongodb.png";
import git from "../assets/tech/git.png";
import figma from "../assets/tech/figma.png";
import docker from "../assets/tech/docker.png";
import threejs from "../assets/tech/threejs.svg"
// Import other assets

import carrent from "../assets/carrent.png";
import jobit from "../assets/jobit.png";
import tripguide from "../assets/tripguide.png";
import Recipemaker from "../assets/company/RecipeMaker.webp"
import portfolio from "../assets/company/Portfolio Website.webp"
import fitness from "../assets/company/Fitness App.webp"
import ecommerceIcon from "../assets/company/E-Commerce Platform.webp"

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id:"resume",
      title:"Resume",
      external:"true",
      URL:"https://drive.google.com/file/d/1V_GFPBkkbT6vwqkuQKCsQKoRZiqLmJpZ/view?usp=drive_link"
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Writer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      project_name: "RecipeMaker",
      icon: Recipemaker,  // Replace with your actual project icon
      iconBg: "#383E56",
      date: "01.02.23 - 02.03.23",
      points: [
        "Developed and designed RecipeMaker using React.js and Tailwind CSS.",
        "Implemented a dynamic filtering system for vegetarian, non-veg, vegan, and dessert categories.",
        "Optimized the UI/UX for a seamless browsing experience.",
        "Added responsive design and smooth animations for better user engagement.",
      ],
    },
    {
      title: "React Native Developer",
      project_name: "Fitness App",
      icon: fitness,  // Replace with your actual project icon
      iconBg: "#E6DEDD",
      date: "03.03.23 - 04.04.23",
      points: [
        "Built a cross-platform fitness tracking app with React Native and Firebase.",
        "Integrated real-time step tracking and goal setting features.",
        "Ensured responsive UI with React Native Paper and custom animations.",
        "Implemented authentication and user profiles with Firebase Auth.",
      ],
    },
    {
      title: "Web Developer",
      project_name: "Portfolio Website",
      icon: portfolio,  // Replace with your actual project icon
      iconBg: "#383E56",
      date: "05.04.23 - 06.05.23",
      points: [
        "Designed and developed a personal portfolio showcasing projects and skills.",
        "Implemented animations and transitions using Framer Motion.",
        "Integrated a contact form with email functionality.",
        "Optimized the website for SEO and fast loading speeds.",
      ],
    },
    {
      title: "Full Stack Developer",
      project_name: "E-Commerce Platform",
      icon: ecommerceIcon,  // Replace with your actual project icon
      iconBg: "#E6DEDD",
      date: "07.05.23 - 08.08.23",
      points: [
        "Developed a full-stack e-commerce platform using the MERN stack.",
        "Implemented secure authentication, product management, and cart functionality.",
        "Integrated Stripe for online payments and order processing.",
        "Optimized backend APIs for scalability and performance.",
      ],
    },
  ];
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, };