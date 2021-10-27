import { v4 as uuidv4 } from 'uuid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Vincent Oladimeji',
  subtitle: 'I love to build websites',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://s3.amazonaws.com/archivos-cvonline/assets/pdf/791315/FSVincent-Oladimeji.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: 'project.PNG',
    title: 'Robofriends',
    info: 'This web app allows users to search for different Robot names and the corresponding profile details. Robofriends was created using React.js. it is fully responsible.',
    info2: 'This app is designed using;Html,Css,Javascript,React.js, Node.js',
    url: '',
    repo: 'https://github.com/vincey101/robofriends', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'projectII.PNG',
    title: 'Facerecognition',
    info: "Facerecognition app accepts image url and detects the face in the picture.The front end uses React.js, an image recognition Api. The server uses Node and Express, and it also has its own database.",
    info2: 'This app is designed using;Html,Css,Javascript,React.js, Node.js,Express.js',
    url: '',
    repo: 'https://github.com/vincey101/app-brain', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'bovato.PNG',
    title: 'E-commerce website',
    info: "Bovato Block Industry is a physical block industry that wants its products and services displayed virtually for users across the world.",
    info2: 'This website is designed using Html,CSS andJavascript',
    url: '',
    repo: '', // if no repo, the button will not show up
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
      id: uuidv4(),
      name: 'twitter',
      url: 'https://twitter.com/vinceyolad',
    },
    {
      id: uuidv4(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/vincent-oladimeji-22441a1a4',
    },
    {
      id: uuidv4(),
      name: 'github',
      url: 'https://github.com/vincey101',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};