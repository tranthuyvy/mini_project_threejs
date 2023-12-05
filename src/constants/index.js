import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  java,
  springboot,
  php,
  mongodb,
  git,
  figma,
  docker,
  vti,
  cv,
  threejs,
  ecommerce,
  custom,
  movie,
  book,
  mobileselling,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Website Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Orther Skills",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Springboot",
    icon: springboot,
  },
  {
    name: "PHP",
    icon: php,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Intern Fullstack",
    company_name: "Trainee Developer - VTI",
    icon: vti,
    iconBg: "#E6DEDD",
    date: "May 2023 - September 2023",
    points: [
      "Learning and accumulating experience.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Deploying and developing web applications using the Java-Springboot Framework and ReactJs.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#383E56",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const projects = [
  {
    name: "CV-Profile",
    description:
      "A website built to serve one's own job application (CV), incorporating Three.js for 3D graphics, React and Tailwind CSS for flexible and visually appealing design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cv,
    source_code_link: "https://github.com/tranthuyvy/mini_project_threejs",
    website: "https://ttv-tranthuyvy-6w71yp8vz-tran-vys-projects.vercel.app/",
  },
  {
    name: "Customizing T-Shirt AI",
    description:
      "A Design T-Shirt Customizing Website, you can upload custom logos and texture files or can write AI Prompt to help you generate custom logos, textures for your T-shirt.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "restfulapi",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: custom,
    source_code_link: "https://github.com/tranthuyvy/ttv-design-shirt-ai",
    website: "https://ttv-fe-design-shirt-ai.vercel.app/",
  },
  {
    name: "Frontend Movie",
    description:
      "Drawing inspiration from the Netflix app, I designed a user interface using ReactJS and calls API from The Movie Database (TMDB).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/tranthuyvy/FE_Movie",
    website: "https://the-movie-f2cd8.web.app/",
  },
  {
    name: "Sneaker Website",
    description:
      "Users interface easy shopping, ordering and convenient product reviews, along with various features for management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "spingboot",
        color: "green-text-gradient",
      },
      {
        name: "restfulapi",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/tranthuyvy/ecommerce_FE",
    website: "",
  },
  {
    name: "Books Website",
    description:
      "Users can purchase and place orders through the website, and the data is saved on the database.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "yii2",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: book,
    source_code_link: "https://github.com/tranthuyvy/bookwebsite_Yii2",
    website: "",
  },
  {
    name: "Mobile Sales Application",
    description:
      "Using Android Studio and manage the MySQL database. Users can purchase and place orders through the app.",
    tags: [
      {
        name: "query-php",
        color: "orange-text-gradient",
      },
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "androidstudio",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: mobileselling,
    source_code_link: "https://github.com/tranthuyvy/AppBanHang",
    website: "",
  },
];

export { services, technologies, experiences, projects };
