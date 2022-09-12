export const projects = [
  {
    title: 'OSM',
    description: "OSM is a free open-source learning management platform built with the MERN stack. During the pandemic, schools in my country had to force a shutdown due to the lack of school's site where students and teachers can log in and have access to/create assignments, tests, resources, etc. This site is trying to solve that problem",
    image: '/images/osm.png',
    tags: ['Mongo', 'Express', 'React', 'Node', 'TailwindCSS'],
    source: 'https://github.com/sagarsubedi/OSM',
    visit: 'https://osm.sagarsubedi.com',
    id: 0,
  },
  {
    title: 'Trax',
    description:"Trax is a music app built with Next.js. The actual purpose of this site was to learn more about Next.js and jwt authorization. The music player is actually functional and allows for play, pause, skip, next, shuffle, etc.",
    image: '/images/trax.png',
    tags: ['React', 'JWT', 'Next.JS', 'Hooks'],
    source: 'https://github.com/sagarsubedi/next-music',
    visit: 'https://musicapp.sagarsubedi.com',
    id: 1,
  },
  {
    title: 'CryptoVerse',
    description: "This app is a React app that provides latest information on different cryptocurrencies. This includes exchanges, news and much more details. This app uses two different APIs both through FastAPI.com",
    image: '/images/cryptoapp.png',
    tags: ['React', 'API', 'Redux'],
    source: 'https://github.com/sagarsubedi/crypto-app',
    visit: 'https://cryptoapp.sagarsubedi.com',
    id: 2,
  },
  {
    title: 'Landing Page',
    description: "This is a landing page built for a fictional payment portal company. It is built with react and tailwindcss. It is fully responsive. The design is taken from dribble and I have tried to replicate it as close as possible.",
    image: '/images/landingpage.png',
    tags: ['React', 'TailwindCSS', 'Responsive'],
    source: 'https://github.com/sagarsubedi/landing_page',
    visit: 'https://landingpage.sagarsubedi.com',
    id:3,
  }
];

export const TimeLineData = [
  { year: 2017, text: 'Started my journey', },
  { year: 2018, text: 'Worked as a freelance developer', },
  { year: 2019, text: 'Founded JavaScript Mastery', },
  { year: 2020, text: 'Shared my projects with the world', },
  { year: 2021, text: 'Started my own platform', },
];

export const AccomplishmentsData = [
  { number: '3', text: 'Professional Experiences', },
  { number: '6+', text: 'Open Source Projects' },
];