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
  jira,
  irics,
  cv,
  threejs,
  ecommerce,
  custom,
  movie,
  book,
  mobileselling,
  lotus,
  drawphoto,
  dinosaurgame,
  vfiverr,
  trello,
  alan,
  web3,
  food,
  wedding,
  car_showcase,
  lab_200,
  nextjs,
  typescript,
} from "../assets";

export const navLinks = [
  {
    id: "profile",
    title: "Profile",
  },
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "git",
    icon: git,
  },
];

const careers = [
  {
    objects: [
      "1 year of experience building responsive web interfaces with JavaScript, TypeScript, React.js, Next.js. Interested in SEO and website performance optimization, focusing on creating fast, accessible, and user-friendly applications. Eager to learn and improve skills continuously."
    ],
  },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "CÔNG TY CÔNG NGHỆ 200LAB",
    icon: lab_200,
    iconBg: "#ECECEC",
    date: "2024 - Now",
    points: [
      "Learning and accumulating experience",
      "Developing web applications using the Typescript and ReactJs, NextJs",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "VIỆN NGHIÊN CỨU KHOA HỌC & CÔNG NGHỆ IRICS",
    icon: irics,
    iconBg: "#E6DEDD",
    date: "2022 - 2023",
    points: [
      "Intern and stay to work after.",
      "Learning and accumulating experience.",
      "Implementing responsive design. Developing web applications using the NodeJs - Express and ReactJs.",
    ],
  },
];

const projects = [
  {
    name: "Wed Invitation Mini App",
    description:
      "Users can create and share code for friends to view invitations, albums, location, and transfer wedding gift money",
    tags: [
      {
        name: "zmp",
        color: "orange-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: wedding,
    source_code_link: "https://github.com/tranthuyvy/wedding-invitation-mini-app",
    website: "",
  },
  {
    name: "Project Car Showcase",
    description:
      "The project is built using NextJS and TailwindCSS. Users can view and filter detailed information about cars.",
    tags: [
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "orange-text-gradient",
      },
      {
        name: "rapid-api",
        color: "green-text-gradient",
      },
    ],
    image: car_showcase,
    source_code_link: "https://github.com/tranthuyvy/car_showcase.git",
    website: "https://carshowcase-7q8rpzjn9-tran-vys-projects.vercel.app/",
  },
  {
    name: "Project Web 3.0",
    description:
      "The first blockchain website built using Web 3.0 methodologies, Solidity, and Metamask. Users can track transaction history.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "metamask",
        color: "orange-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: web3,
    source_code_link: "https://github.com/tranthuyvy/project_web3",
    website: "https://project-web3-pink.vercel.app/",
  },
  {
    name: "Portfolio",
    description:
      "A website built using Three.js for 3D graphics, React and Tailwind CSS for flexible and visually appealing design.",
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
    website: "https://ttv-tranthuyvy-cv.vercel.app/",
  },
  {
    name: "Customizing T-Shirt AI",
    description:
      "Design T-Shirt Customizing Website, can upload custom logos, texture files or write AI Prompt generate logos, textures for T-shirt.",
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
    name: "Trello",
    description:
      "A website built based on Trello, utilizing Vite for fast performance. User interface developed with ReactJs and Material.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: trello,
    source_code_link: "https://github.com/tranthuyvy/Trello_Vite",
    website: "https://ttv-trello.vercel.app/",
  },
  {
    name: "Food Delivery",
    description:
      "Food delivery website with user-friendly interface, implementing responsive design, allows you to manage your cart, orders.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/tranthuyvy/food_delivery",
    website: "https://ttv-delivery.vercel.app/home",
  },
  {
    name: "Alan AI",
    description:
      "Conversational Voice Controlled React News Application using Alan AI, allows you control absolutely everything using your voice.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "alanai",
        color: "orange-text-gradient",
      },
    ],
    image: alan,
    source_code_link: "https://github.com/tranthuyvy/alan_ai",
    website: "",
  },
  {
    name: "Drawing From File Photo",
    description:
      "A website to create paintings from photos, you can upload any image you want to turn into a watercolor or pencil painting.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
    ],
    image: drawphoto,
    source_code_link: "https://github.com/tranthuyvy/DrawPhotos",
    website: "https://drawphotos-mjt54t879c4wpnjeycqpaq.streamlit.app/",
  },
  // {
  //   name: "Dinosaur Running Game",
  //   description:
  //     "Game is inspired by dinosaur running on Chrome browser when the internet connection is lost.",
  //   tags: [
  //     {
  //       name: "python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "pygame",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: dinosaurgame,
  //   source_code_link: "https://github.com/tranthuyvy/DinosaurGame.git",
  //   website: "",
  // },
  {
    name: "Vfiverr Website",
    description:
      "Website inspiration from Fiverr website, is online platform to connections between buyers and sellers (Network Freelancer).",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
    ],
    image: vfiverr,
    source_code_link: "https://github.com/tranthuyvy/Vfiverr.git",
    website: "",
  },
  {
    name: "Frontend Movie",
    description:
      "Drawing inspiration from Netflix app. I designed user interface using ReactJS, calls API from The Movie Database (TMDB).",
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
  // {
  //   name: "Sneaker Website",
  //   description:
  //     "Users interface easy shopping, ordering and convenient product reviews, along with various features for management.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "spingboot",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "restfulapi",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: ecommerce,
  //   source_code_link: "https://github.com/tranthuyvy/ecommerce_FE",
  //   website: "",
  // },
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
  //  {
  //   name: "Books Website",
  //   description:
  //     "Users can purchase and place orders through the website, and the data is saved on the database.",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "yii2",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "mysql",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: book,
  //   source_code_link: "https://github.com/tranthuyvy/bookwebsite_Yii2",
  //   website: "",
  // },
];

export { services, technologies, experiences, projects, careers };
