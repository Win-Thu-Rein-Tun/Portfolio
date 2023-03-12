import {
  mobile,
  backend,
  quicklearner,
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
  linux,
  jobit,
  docker,
  hoobank,
  metaverse,
  portfolio,
  reactnative,
} from "../assets";

const navLinks = [
  {
    id: "work",
    title: "Work",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Quick Learner",
    icon: quicklearner,
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
    name: "docker",
    icon: docker,
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
    name: "linux",
    icon: linux,
  },
];

const projects = [
  {
    id: "project-1",
    imgUrl: metaverse,
    tags: [
      {
        name: "nextjs",
      },
      {
        name: "framermotion",
      },
      {
        name: "tailwind",
      },
    ],
    title: "Meta Madness",
    repoLink: "https://github.com/Win-Thu-Rein-Tun/first-nextjs-site",
    demoLink: "https://metaverse-madness-rouge.vercel.app/",
  },
  {
    id: "project-2",
    imgUrl: jobit,
    tags: [
      {
        name: "react",
      },
      {
        name: "vite",
      },
      {
        name: "tailwind",
      },
    ],
    title: "Job Search",
    repoLink: "https://github.com/Win-Thu-Rein-Tun/badcode-react",
    demoLink: "https://jobsearch-no-reponsive-react-bad-code.netlify.app/",
  },
  {
    id: "project-3",
    imgUrl: hoobank,
    tags: [
      {
        name: "react",
      },
      {
        name: "vite",
      },
      {
        name: "tailwind",
      },
    ],
    title: "Hoo Bank",
    repoLink: "https://github.com/Win-Thu-Rein-Tun/my-first-react-website",
    demoLink: "https://sun-d-shine-modern-payment.netlify.app/",
  },
  {
    id: "project-4",
    imgUrl: portfolio,
    tags: [
      {
        name: "react",
      },
      {
        name: "threejs",
      },
      {
        name: "framermotin",
      },
      {
        name: "tailwind",
      },
    ],
    title: "3D Portfolio",
    repoLink: "https://github.com/Win-Thu-Rein-Tun/3d-portfolio",
    demoLink: "https://3d-portfolio-sun-d-shine-site.netlify.app/",
  },
  {
    id: "project-5",
    imgUrl: reactnative,
    tags: [
      {
        name: "reactnative",
      },
      {
        name: "expo",
      },
      {
        name: "tailwind",
      },
    ],
    title: "React Native",
    repoLink:
      "https://github.com/Win-Thu-Rein-Tun/react-native-app-showcase-website",
    demoLink: "https://nfts-react-native-app-showcase.netlify.app/",
  },
];

export { navLinks, services, technologies, projects };
