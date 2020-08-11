import { nanoid } from 'nanoid';
import React from 'react';
import GatsbyLogo from '../components/Icons/GatsbyLogo';
import ReactLogo from '../components/Icons/ReactLogo';
import NodejsLogo from '../components/Icons/NodejsLogo';
import MongodbLogo from '../components/Icons/MongodbLogo';
import TailwindLogo from '../components/Icons/TailwindLogo';
import HtmlLogo from '../components/Icons/HtmlLogo';
import CssLogo from '../components/Icons/CssLogo';
import SassLogo from '../components/Icons/SassLogo';
import JavascriptLogo from '../components/Icons/JavascriptLogo';
import AwsLogo from '../components/Icons/AwsLogo';
import GitLogo from '../components/Icons/GitLogo';
import PhotoshopLogo from '../components/Icons/PhotoshopLogo';

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
  img: 'headshot.jpg',
  paragraphOne:
    "I was first introduced to Web Development during my softmore year of highschool when I enrolled in a Web Development class. During that time I learned HTML, CSS, and Adobe Dreamweaver. I was quite good compared to the rest of my class, and was offered the role of maintaining the school's website. In all honesty, I found it to be quite boring, and come next year, I instead enrolled in a Computer Programming class, which I found very exciting. It wasn't until 2018 when my love for Web Development took off, thanks to learning JavaScript and React. ",
  paragraphTwo:
    "Creating polished UI/UX's, making lives easier through the use of software, and constantly learning new things is what i find most fullfilling about Web Development",
  paragraphThree: '',
  resume: 'https://www.jeremyashcraft.me/Jeremy_Ashcraft_Resume.pdf', // if no resume, the button will not show up
};

// SKILLS DATA
export const skillsData = {
  icons: [
    <GatsbyLogo id={nanoid()} />,
    <ReactLogo id={nanoid()} />,
    <NodejsLogo id={nanoid()} />,
    <TailwindLogo id={nanoid()} />,
    <MongodbLogo id={nanoid()} />,
    <AwsLogo id={nanoid()} />,
    <GitLogo id={nanoid()} />,
    <JavascriptLogo id={nanoid()} />,
    <HtmlLogo id={nanoid()} />,
    <CssLogo id={nanoid()} />,
    <SassLogo id={nanoid()} />,
    <PhotoshopLogo id={nanoid()} />,
  ],
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    imgUrl: 'https://media.giphy.com/media/U1rSU2WqtpLF4OV61A/giphy.gif',
    title: 'Rocky Mountain Publishing',
    info:
      'Over the spring of 2020 I built a brand new website for Rocky Mountain Publishing, a company I worked with for over 3 years as the Printer Operator and Graphic Designer.',
    info2:
      'This project came with some challenges, such as creating a web-scraper using Node.js to crawl the entire (old) website, formulating a database containing all the art RMP sells.',
    url: 'https://www.rockymountainpublishing.net/',
    repo: 'https://github.com/jeremyash13/rmp-ver2', // if no repo, the button will not show up
    icons: [
      <GatsbyLogo id={nanoid()} />,
      <ReactLogo id={nanoid()} />,
      <NodejsLogo id={nanoid()} />,
      <TailwindLogo id={nanoid()} />,
      <AwsLogo id={nanoid()} />,
      <MongodbLogo id={nanoid()} />,
    ],
  },
  {
    id: nanoid(),
    imgUrl: 'https://media.giphy.com/media/eLeQoYNcGeb5SwylL7/giphy.gif',
    title: 'React Calculator',
    info: 'A simple calculator built with React.js',
    info2: '',
    url: 'https://ja95-react-calculator.netlify.com',
    repo: 'https://github.com/jeremyash13/react-calculator', // if no repo, the button will not show up
    icons: [<ReactLogo id={nanoid()} />, <HtmlLogo id={nanoid()} />, <CssLogo id={nanoid()} />],
  },
  {
    id: nanoid(),
    imgUrl: 'https://media.giphy.com/media/iihAadNGCoMkNhj3ZQ/giphy.gif',
    title: 'Wheel of Success Game',
    info: 'Inspired by the Wheel of Fortune game-show',
    info2: '',
    url: 'https://jeremyash13.github.io/Game-Show-App/',
    repo: 'https://github.com/jeremyash13/Game-Show-App', // if no repo, the button will not show up
    icons: [
      <HtmlLogo id={nanoid()} />,
      <CssLogo id={nanoid()} />,
      <JavascriptLogo id={nanoid()} />,
    ],
  },
  {
    id: nanoid(),
    imgUrl: 'https://media.giphy.com/media/SUc6jKDeUETaQNL95a/giphy.gif',
    title: 'Web App Dashboard',
    info: 'A mock web app dashboard',
    info2: '',
    url: 'https://jeremyash13.github.io/Web-App-Dashboard/',
    repo: 'https://github.com/jeremyash13/Web-App-Dashboard', // if no repo, the button will not show up
    icons: [
      <HtmlLogo id={nanoid()} />,
      <CssLogo id={nanoid()} />,
      <JavascriptLogo id={nanoid()} />,
    ],
  },
  {
    id: nanoid(),
    imgUrl: 'https://media.giphy.com/media/fsDjhCVwtMhs9qplWj/giphy.gif',
    title: 'Interactive Video Player',
    info: 'A video player that highlights text alongside a video',
    info2: '',
    url: 'https://jeremyash13.github.io/Interactive-Video-Player/',
    repo: 'https://github.com/jeremyash13/Interactive-Video-Player', // if no repo, the button will not show up
    icons: [
      <HtmlLogo id={nanoid()} />,
      <CssLogo id={nanoid()} />,
      <JavascriptLogo id={nanoid()} />,
    ],
  },
  {
    id: nanoid(),
    imgUrl: 'https://media.giphy.com/media/J13fIcYWUKdtjmSikh/giphy.gif',
    title: 'Photo Gallery',
    info: 'A simple photo gallery with search functionality',
    info2: '',
    url: 'https://jeremyash13.github.io/Photo-Gallery-Project/',
    repo: 'https://github.com/jeremyash13/Photo-Gallery-Project', // if no repo, the button will not show up
    icons: [
      <HtmlLogo id={nanoid()} />,
      <CssLogo id={nanoid()} />,
      <JavascriptLogo id={nanoid()} />,
    ],
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jeremyash13@gmail.com',
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
