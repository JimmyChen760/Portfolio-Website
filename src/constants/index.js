import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    pussbond,
    jobit,
    tripguide,
    threejs,
    databackend,
    frontends,
    advanced,
    ai,
    Portfolio,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Skills",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];
  
  const services = [
    {
      title: "Full-stack Developer",
      icon: web,
    },
    {
      title: "Python Programmer",
      icon: mobile,
    },
    {
      title: "Data Science",
      icon: backend,
    },
    {
      title: "React Programmer",
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

  ];
  
  const experiences = [
    {
      title: "Python, R, SQL, Pandas",
      company_name: "Backend/Data, Webscraping",
      icon:databackend,
      iconBg: "#1d1836",
      date: '2021',
      points: [
        'I learned python as my first coding language, creating functions and classes until I understood object oriented programming. I also learned about data structures and algorithms', 
        'I then learned R through a data science course, coding in Rstudio and discouvering the basics of data science, importing datasets, manipulating them, and finally used basic visualization in forms of various graphs',
        'I found data science to be quite fun, and learned some basic webscraping through the beautiful soup library, as well as exploring and utilizing both SQL and Pandas as alternatives to R'
      ],
    },
    {
      title: "Html, Javascript, CSS, SASS/SCSS, Node.js",
      company_name: "Frontend, Basic Styling",
      icon: frontends,
      iconBg: "#1d1836",
      date: "2022",
      points: [
        'Though I had some basic backend fundementals down, I realized that it would not matter if I did not have a way to visualize the functionalities that have been built, and thus began learning frontend languages',
        'I began with the basics of html, learning how to to combine components to create the structure of basic websites',
        'Then I learned how to style the html elements through CSS, and also learned how to implement SCSS as an extension of CSS stylings',
        'Lastly, I learned about Node.js, allowing me to use Javascript more efficiently and connectively between the front and back ends of my projects'
      ],
    },
    {
      title: "React, Tailwind, Three.js, Typescript",
      company_name: "Frontend, Advanced Styling",
      icon: advanced,
      iconBg: "#1d1836",
      date: "2023",
      points: [
        'Despite creating fully functional websites using simple HTML, CSS, and Javascript, I wanted to do something more intricate. I began looking into react, and found its composibility and the fact that I could write HTML code directly into Javascript files very appealing',
        'Afterwards, I came across Tailwind CSS. It made styling frontend components incredibly simple, and I could finally write components in Javascript, have HTML components, AND style them all in a single file',
        "From the beginning, I was always under the assumption that React websites/webapps have tremendous potential and unique elements, but I felt my React projects were lacking. That's when I found Three.js, and various React libraries, like react-three-fiber and react-three-drei. Theses discoveries allowed me to further my implementation of dynamic components to my projects, such as movement, and 3-D gltf models"
        
      ],
    },
    {
      title: "MongoDB, Express",
      company_name: "Fullstack Completion, MERN Stack",
      icon: ai,
      iconBg: "#1d1836",
      date: "Present",
      points: [
        "To complete a fullstack project, I needed to learn how to use databases. I chose to use MongoDB, learning requests such as gets and posts, and how to store and use data inputted by the user",
        'As part of the MERN stack, I also learned Express.js as an extension of Node, allowing me to manage servers and improve routing'
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Pussbond's Website",
      description:
        "A simple website made in hopes of helping a cat get adopted. Explores different simple react libraries such as slides, photo collage, and card items, along with website basics such as video backgrounds and adding audio.",
      tags: [
        
        
      ],
      image: pussbond,
      source_code_link: "https://github.com/JimmyChen760/pussbond",
    },
    {
      name: "Portfolio Website",
      description:
        "My second website made after playing around with more movement as well as loading in gltf models on a website through Three.js",
      tags: [
        
      ],
      image: Portfolio,
      source_code_link: "https://github.com/JimmyChen760/Three-JS",
    },
    
  ];
  
  export { services, technologies, experiences, projects };