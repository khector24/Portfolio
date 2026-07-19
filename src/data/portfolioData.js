// ======================================================
// IMPORTS: REGIONLORE PROJECT IMAGES
// ======================================================

import regionHomeTop from "../assets/featured-projects/RegionLore-Pics/home-top.png";
import regionHomeBottom from "../assets/featured-projects/RegionLore-Pics/home-bottom.png";

import regionStates from "../assets/featured-projects/RegionLore-Pics/states.png";
import regionStateDetailTop from "../assets/featured-projects/RegionLore-Pics/state-detail-top.png";
import regionStateDetailMid from "../assets/featured-projects/RegionLore-Pics/state-detail-mid.png";
import regionStateDetailMid2 from "../assets/featured-projects/RegionLore-Pics/state-detail-mid-2.png";

import regionMetros from "../assets/featured-projects/RegionLore-Pics/metros.png";
import regionMetroDetailTop from "../assets/featured-projects/RegionLore-Pics/metro-detail-top.png";
import regionMetroDetailMid from "../assets/featured-projects/RegionLore-Pics/metro-detail-mid.png";

import regionDashboardTop from "../assets/featured-projects/RegionLore-Pics/dashboard-top.png";
import regionDashboardMid from "../assets/featured-projects/RegionLore-Pics/dashboard-mid.png";
import regionDashboardBottom from "../assets/featured-projects/RegionLore-Pics/dashboard-bottom.png";

// ======================================================
// IMPORTS: SPLASH ZONE PROJECT IMAGES
// ======================================================

import splashHome from "../assets/featured-projects/Splash-Zone-Pics/Home.png";
import splashFAQ from "../assets/featured-projects/Splash-Zone-Pics/faq.png";
import splashNewsletter from "../assets/featured-projects/Splash-Zone-Pics/newsletter.png";
import splashModal from "../assets/featured-projects/Splash-Zone-Pics/contact-modal.png";
import splashReceive from "../assets/featured-projects/Splash-Zone-Pics/students-receive.png";

// ======================================================
// IMPORTS: WEATHER PROJECT IMAGES
// ======================================================

import weatherType from "../assets/featured-projects/WeatherAppPics/type-city.png";
import weatherSuccess from "../assets/featured-projects/WeatherAppPics/success.png";
import weatherError from "../assets/featured-projects/WeatherAppPics/error.png";

// ======================================================
// IMPORTS: SIMON SAYS PROJECT IMAGES
// ======================================================

import SimonSaysGame from "../assets/featured-projects/Simon-Says-Pics/start-page.png";
import SimonLevel1 from "../assets/featured-projects/Simon-Says-Pics/level-1.png";
import SimonLevel2 from "../assets/featured-projects/Simon-Says-Pics/level-2.png";
import SimonLevel3 from "../assets/featured-projects/Simon-Says-Pics/level-3.png";

// ======================================================
// IMPORTS: TO-DO LIST PROJECT IMAGES
// ======================================================

import TodoListMain from "../assets/featured-projects/Todo-List-Pics/main-page.png";
import TodoListAdd from "../assets/featured-projects/Todo-List-Pics/add-task.png";
import TodoListPostAdd from "../assets/featured-projects/Todo-List-Pics/post-add-task.png";
import TodoListEdit from "../assets/featured-projects/Todo-List-Pics/edit-task.png";

// ======================================================
// IMPORTS: PORTFOLIO WEBSITE IMAGES
// ======================================================

import hero from "../assets/featured-projects/portfolio-website-pics/Hero.png";
import whatIDo from "../assets/featured-projects/portfolio-website-pics/what-i-do.png";
import howIWork from "../assets/featured-projects/portfolio-website-pics/how-i-work.png";
import whoIAm from "../assets/featured-projects/portfolio-website-pics/who-i-am.png";
import career from "../assets/featured-projects/portfolio-website-pics/career.png";
import portfolio from "../assets/featured-projects/portfolio-website-pics/portfolio.png";
import techSkills from "../assets/featured-projects/portfolio-website-pics/tech-skills.png";
import contact from "../assets/featured-projects/portfolio-website-pics/contact.png";

// ======================================================
// IMPORTS: SHARED PROJECT ASSETS
// ======================================================

import placeholder from "../assets/featured-projects/placeholder.jpg";

// ======================================================
// PORTFOLIO DATA: FEATURED PROJECTS
// ======================================================

export const featuredProjects = [
  {
    title: "RegionLore",
    tech: "React, Node.js, Express, REST APIs, ETL Pipelines, Data Analytics, Interactive Mapping",
    description:
      "Comprehensive full-stack platform for researching and comparing U.S. states and metropolitan areas using demographic, migration, education, housing, labor-market, and economic data. RegionLore combines large public datasets into interactive maps, rankings, dashboards, and in-depth regional insights that help people better understand places.",
    link: "https://github.com/khector24/regionlore",
    tags: [
      "react",
      "node",
      "express",
      "aws",
      "rest-api",
      "etl",
      "data-visualization",
    ],
    images: [
      regionHomeTop,
      regionHomeBottom,
      regionStates,
      regionStateDetailTop,
      regionStateDetailMid,
      regionStateDetailMid2,
      regionMetros,
      regionMetroDetailTop,
      regionMetroDetailMid,
      regionDashboardTop,
      regionDashboardMid,
      regionDashboardBottom,
    ],
    hasLiveLink: true,
    liveLink: "https://regionlore.com/",
    showPlaceholderNote: false,
  },
  {
    title: "Splash Zone Aquatics Website",
    tech: "React, Material UI, AWS S3, Lambda, DynamoDB, Resend",
    description:
      "Production website and cloud email platform developed for a swim school. The responsive customer experience, program information, contact workflows, and automated email features improved the company's online visibility and contributed to approximately 50% of seasonal registrations before the summer launch.",
    link: "https://github.com/khector24/swim-aquatics",
    tags: ["react", "aws", "lambda", "dynamodb", "resend", "material-ui"],
    images: [
      splashHome,
      splashFAQ,
      splashNewsletter,
      splashModal,
      splashReceive,
    ],
    hasLiveLink: true,
    liveLink: "https://splashzoneaquatics.com/",
    showPlaceholderNote: false,
  },
  {
    title: "Delivery Management App",
    tech: "React, Node.js, Express, DynamoDB, JWT Authentication",
    description:
      "Full-stack delivery scheduling and operations platform with manager authentication, driver management, secure CRUD APIs, permission-based workflows, and delivery-status tracking. The application streamlined delivery creation and helped reduce fulfillment errors.",
    link: "https://github.com/khector24/delivery-manager",
    tags: ["react", "node", "express", "dynamodb", "jwt", "authentication"],
    images: [placeholder],
    hasLiveLink: false,
    liveLink: "",
    showPlaceholderNote: true,
  },
  {
    title: "Theft Tracker Application",
    tech: "React, Material UI, AWS S3, Lambda, DynamoDB",
    description:
      "Cloud-based incident-reporting system with searchable archived reports, structured evidence records, and secure media uploads through AWS S3 pre-signed URLs. The application improved in-store documentation and reduced police-report preparation time by approximately 33%.",
    link: "https://github.com/khector24/theft-tracker",
    tags: [
      "react",
      "aws",
      "s3",
      "lambda",
      "dynamodb",
      "file-upload",
      "material-ui",
    ],
    images: [placeholder],
    hasLiveLink: false,
    liveLink: "",
    showPlaceholderNote: true,
  },
  {
    title: "Personal Portfolio Website",
    tech: "React, AWS S3, Route 53, Framer Motion, CSS",
    description:
      "Responsive portfolio website designed and developed to present my professional experience, engineering projects, technical skills, and contact information. The site includes animated transitions, reusable React components, project galleries, responsive layouts, and light and dark themes.",
    link: "https://github.com/khector24/portfolio",
    tags: ["react", "aws", "s3", "route53", "framer-motion", "css"],
    images: [
      hero,
      whatIDo,
      howIWork,
      whoIAm,
      career,
      portfolio,
      techSkills,
      contact,
    ],
    hasLiveLink: true,
    liveLink: "https://kennyhector.com",
    showPlaceholderNote: false,
  },
  {
    title: "Weather Project",
    tech: "Node.js, Express, EJS, CSS, OpenWeatherMap API",
    description:
      "Server-rendered weather application that accepts a city from the user, requests current conditions from the OpenWeatherMap API, and presents the results through dynamic EJS templates with validation and error handling.",
    link: "https://github.com/khector24/weather-project",
    tags: ["node", "express", "ejs", "api", "css"],
    images: [weatherType, weatherSuccess, weatherError],
    hasLiveLink: true,
    liveLink: "https://weather-app.kennyhector.com/",
    showPlaceholderNote: false,
  },
  {
    title: "Simple To-Do List",
    tech: "Node.js, Express, EJS, CSS, JavaScript",
    description:
      "Interactive task-management application built with Node.js, Express, and EJS. Users can create, edit, and manage tasks through server-rendered views and route-based application logic.",
    link: "https://github.com/khector24/simple-to-do-list",
    tags: ["node", "express", "ejs", "javascript", "todo"],
    images: [TodoListMain, TodoListAdd, TodoListPostAdd, TodoListEdit],
    hasLiveLink: true,
    liveLink: "https://todo.kennyhector.com/",
    showPlaceholderNote: false,
  },
  {
    title: "Simon Says Game",
    tech: "JavaScript, jQuery, HTML, CSS",
    description:
      "Browser-based recreation of the classic Simon memory game featuring randomized sequences, level progression, sound effects, animations, and game-state logic.",
    link: "https://github.com/khector24/simon-says-game",
    tags: ["javascript", "jquery", "game", "html", "css"],
    images: [SimonSaysGame, SimonLevel1, SimonLevel2, SimonLevel3],
    hasLiveLink: true,
    liveLink: "https://simongame.kennyhector.com/",
    showPlaceholderNote: false,
  },
];
