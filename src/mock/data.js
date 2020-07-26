import { nanoid } from 'nanoid';
import GatsbyLogo from '../components/Icons/GatsbyLogo';
import React from "react"
import ReactLogo from '../components/Icons/ReactLogo';
import NodejsLogo from '../components/Icons/NodejsLogo';
import MongodbLogo from '../components/Icons/MongodbLogo';
import TailwindLogo from '../components/Icons/TailwindLogo';

// HEAD DATA
export const headData = {
  title: 'Home | My Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jeremy',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'mountains.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    imgUrl: 'https://media.giphy.com/media/U1rSU2WqtpLF4OV61A/giphy.gif',
    title: 'Rocky Mountain Publishing',
    info: 'Over the spring of 2020 I built a brand new website for Rocky Mountain Publishing, a company I worked with for over 3 years as the Printer Operator and Graphic Designer.',
    info2: 'This project came with some challenges, such as creating a web-scraper using Node.js to crawl the entire (old) website, formulating a database containing all the art RMP sells.',
    url: 'https://www.rockymountainpublishing.net/',
    repo: 'https://github.com/jeremyash13/rmp-ver2', // if no repo, the button will not show up
    icons: [<GatsbyLogo/>, <ReactLogo/>, <NodejsLogo/>, <TailwindLogo/>, <MongodbLogo/>, ],
  },
  {
    id: nanoid(),
    imgUrl: 'project.jpg',
    title: 'React Calculator',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jeremy-ashcraft-71725b104/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jeremyash13',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
