import {
  frontend,
  backend,
  devops,
  javascript,
  html,
  css,
  python,
  flask,
  sql,
  clang,
  nginx,
  boot,
  reactjs,
  nodejs,
  git,
  docker,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  celestial,
  weather,
  hbnb,
  shell,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Devops Engineer',
    icon: devops,
  },
];

const technologies = [
  {
    name: 'C',
    icon: clang,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'SQL',
    icon: sql,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Flask',
    icon: flask,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'Bootstrap',
    icon: boot,
  },
  {
    name: 'CSS 3',
    icon: css,
  },

  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'nginx',
    icon: nginx,
  },

];


const projects = [
  {
    id: 'project-1',
    name: 'Celestial Palate',
    description: 'A website for a high-end restaurant with locations in South Africa, Japan, and Italy.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'flask',
        color: 'pink-text-gradient',
      },
      {
        name: 'sql',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'boot',
        color: 'pink-text-gradient',
      },
    ],
    image: celestial,
    repo: 'https://github.com/habibaadam/Celestial-Palate-Portfolio',
    demo: 'https://celestial.tophabiba.tech/public/',
  },
  {
    id: 'project-2',
    name: 'Weather App',
    description:
      'A weather app that displays weather temperatures and forecast based on city searches.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: weather,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://bibi-react-weather.netlify.app/',
  },
  {
    id: 'project-3',
    name: 'Airbnb Clone',
    description: 'A small copy or clone of the popular Airbnb website.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'sql',
        color: 'green-text-gradient',
      },
      {
        name: 'flask',
        color: 'pink-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: hbnb,
    repo: 'https://github.com/mukoe2020/AirBnB_clone_v4',
    demo: 'http://54.205.99.166:5003/2-hbnb',
  },
  {
    id: 'project-4',
    name: 'Simple Shell',
    description: `A project which tries to replicate the simple functionalities of a unix interpreter.`,
    tags: [
      {
        name: 'clang',
        color: 'blue-text-gradient',
      },
    ],
    image: shell,
    repo: 'https://github.com/mukoe2020/simple_shell',
    demo: 'https://github.com/mukoe2020/simple_shell',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, projects };
