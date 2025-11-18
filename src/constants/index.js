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
import smartcv from "../assets/smart CV.webp"
import portfolio from "../assets/company/Portfolio Website.webp"
import triply from "../assets/triply.png"
import ecommerceIcon from "../assets/company/E-Commerce Platform.webp"

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
{
  id:"project",
  title:"Project",
},
    {
      id: "contact",
      title: "Contact",
    },
    {
      id:"resume",
      title:"Resume",
      external:"true",
      URL:"https://drive.google.com/file/d/143oMabjTPU1IfVKQP6NPOQ3Sctq9KAFv/view?usp=sharing"
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
  
 
 
  
  const projects = [
    {
      name: "Smart CV",
      description: "Designed and developed Smart CV, a dynamic resume builder web app with PDF generation and download functionality. Ensured responsive design and smooth user experience across devices.",
      tags: [
        { name: "ReactJS", color: "blue-text-gradient" },
        { name: "NodeJS", color: "green-text-gradient" },
        { name: "PDFKit", color: "pink-text-gradient" },
      ],
      image: smartcv,
      source_code_link: "https://smart-cv-iota.vercel.app",
      date: "15.02.24 - 20.03.24",
    },
    {
      name: "Triply - AI Travel Planner",
      description: "Developed a full-stack AI-based travel planner using Tailwind CSS for styling, EJS for templating, Node.js and Express.js for backend, and MongoDB for database management. Deployed live on Vercel for seamless user experience.",
      tags: [
        { name: "Tailwind CSS", color: "blue-text-gradient" },
        { name: "EJS", color: "green-text-gradient" },
        { name: "Node.js", color: "pink-text-gradient" },
        { name: "Express.js", color: "orange-text-gradient" },
        { name: "MongoDB", color: "green-text-gradient" },
      ],
      image: triply, // make sure you imported your triply project image
      source_code_link: "https://triplyv2.vercel.app/",
      date: "10.04.24 - 24.04.24",
    }
    ,
    {
      name: "Portfolio Website",
      description: "Designed and developed a personal portfolio showcasing projects and skills. Integrated contact form with email functionality, SEO optimization, and animations with Framer Motion.",
      tags: [
        { name: "ReactJS", color: "blue-text-gradient" },
        { name: "Framer Motion", color: "green-text-gradient" },
        { name: "Tailwind CSS", color: "pink-text-gradient" },
      ],
      image: portfolio,
      source_code_link: "#",
      date: "05.04.23 - 06.05.23",
    },
    {
  name: "Zipacres.com – Real Estate Platform",
  description:
    "Built the complete frontend and backend architecture for Zipacres.com, a real estate property discovery platform. Designed the entire UI/UX including homepage, property grids, location-based search, dynamic filters, project highlights, and individual property detail pages. Implemented secure user authentication, admin dashboard, property uploads, image gallery, and API integrations. Delivered a smooth, responsive, and professional real estate experience with modern web design principles.",
  tags: [
    { name: "React.js", color: "blue-text-gradient" },
    { name: "Node.js", color: "green-text-gradient" },
    { name: "MongoDB", color: "pink-text-gradient" },
    { name: "Express.js", color: "orange-text-gradient" },
    { name: "UI/UX", color: "purple-text-gradient" },
  ],
  image: ecommerceIcon,   // replace with your zipacres screenshot
  source_code_link: "https://zipacres.com",
  date: "06.08.25 - 15.09.25",
}

  ];
  // Your previous imports...

// FAQ Section Data
const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in ReactJS, NodeJS, MongoDB, Tailwind CSS, and modern frontend frameworks.",
  },
  {
    question: "How can I contact you for a project?",
    answer: "You can reach out via the contact form in the portfolio or directly through my email and LinkedIn provided in the contact section.",
  },
  {
    question: "Do you offer freelance services?",
    answer: "Yes, I am open to freelance projects related to web development, UI design, and full-stack applications.",
  },
  {
    question: "Can you help me build a custom web application?",
    answer: "Absolutely! I can help you design and develop custom web applications tailored to your specific needs.",
  },
  {
    question: "What is your project delivery time?",
    answer: "The project delivery time depends on the complexity of the project. Simple websites take 1-2 weeks, while complex full-stack apps may take a month or more.",
  },
];

export { services, technologies, projects, faqs };

