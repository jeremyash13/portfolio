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
import ReduxLogo from '../components/Icons/ReduxLogo';

// HEAD DATA
export const headData = {
  title: 'Home | My Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jeremy.',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot.jpg',
  paragraphOne:
    "I began my web development journey in high school. During my sophomore year, I started learning about HTML and CSS—essential tools in a front end developer's toolbox.",
  paragraphTwo:
    "The next year, I enrolled in a more advanced computer programming course. I quickly realized I had a knack for design and programming. Leadership at the school noticed, too. By the end of the year, I was managing the school's website.",
  paragraphThree:
    "In 2018, I decided it was time to add more skills to my toolbox. That's when I began mastering high-level languages and libraries, like JavaScript and React.",
  paragraphFour:
    'I know that polished UI/UX designs make life easier for everyone, from programmers to website visitors. Want to ensure your next website is up to code? Get in touch with me today.',
  resume: 'https://my-random-items.s3-us-west-2.amazonaws.com/Jeremy_Ashcraft_Resume.PDF', // if no resume, the button will not show up
};

// SKILLS DATA
export const skillsData = {
  icons: [
    <GatsbyLogo id={nanoid()} />,
    <ReactLogo id={nanoid()} />,
    <ReduxLogo id={nanoid()} />,
    <NodejsLogo id={nanoid()} />,
    <TailwindLogo id={nanoid()} />,
    <MongodbLogo id={nanoid()} />,
    // <AwsLogo id={nanoid()} />,
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
    imgUrl: 'https://media.giphy.com/media/S9FARNPcV4VQ4qnLkP/giphy.gif',
    title: 'Simple Seek',
    info:
      'Simple Seek is a tool that will simplify your next job search. It features a Kanban-style board, drag & drop interface, and the ability to assign notes to job prospects—Helping you organize your job search.',
    url: 'https://www.simpleseek.io/',
    repo: 'https://github.com/jeremyash13/kanban-job-seeker', // if no repo, the button will not show up
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
    imgUrl: 'https://media.giphy.com/media/U1rSU2WqtpLF4OV61A/giphy.gif',
    title: 'Rocky Mountain Publishing',
    info: 'In spring 2020, I built a custom website for Rocky Mountain Publishing.',
    info2:
      'This project required me to create a web-scraping script using Node.js to collect all images and data from the existing website, due to the original site being built in 1995, and the original developer no longer having access to the existing database.',
    info3:
      "I've taken measures to ensure that never happens again, in the case I ever have to hand the project over to someone else.",
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
    info: 'A mock web app dashboard. Charts and graphs were built using the Chart.js library',
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
  cta:
    'Want to work with me? You can count on me to develop your website or program. Reach out today to make me a part of your team.',
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
