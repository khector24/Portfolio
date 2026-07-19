// data.js

// ======================================================
// IMPORTS: TECHNOLOGY LOGOS
// ======================================================

import reactLogo from "../assets/logos/react.svg";
import nodeLogo from "../assets/logos/nodejs.svg";
import expressLogo from "../assets/logos/express-js.svg";
import awsLogo from "../assets/logos/aws.svg";
import javaLogo from "../assets/logos/java.svg";
import mysqlLogo from "../assets/logos/mysql.svg";
import htmlLogo from "../assets/logos/html.svg";
import cssLogo from "../assets/logos/css.svg";
import gitLogo from "../assets/logos/git.svg";
import postmanLogo from "../assets/logos/postman.svg";
import visualStudioLogo from "../assets/logos/visual-studio-code.svg";
import bootstrapLogo from "../assets/logos/bootstrap.svg";

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
// CAREER DATA: PROFESSIONAL EXPERIENCE
// ======================================================

export const experienceData = [
  {
    title: "Full-Stack Developer",
    company: "Splash Zone Aquatics",
    location: "Contract · Remote",
    dateRange: "Sep 2024 – May 2025",
    bullets: [
      "Designed, developed, and deployed a production website for a swim school using React, Material UI, and AWS.",
      "Boosted online visibility, contributing to approximately 50% of seasonal registrations before the summer launch.",
      "Integrated AWS Lambda, DynamoDB, and the Resend API to automate email workflows with secure one-click unsubscribe functionality.",
    ],
    tech: ["React", "Material UI", "AWS", "DynamoDB", "Resend"],
  },
  {
    title: "Assistant Manager / Technical Analyst",
    company: "Rainbow Ace Hardware",
    location: "Suffern, NY",
    dateRange: "Apr 2016 – Jul 2024",
    bullets: [
      "Led and supervised more than 25 staff members, improving daily operations and communication across departments.",
      "Built an in-house delivery tracking system that reduced order errors and streamlined logistics.",
      "Enhanced the POS system with an image and code module, reducing checkout time by 47%.",
    ],
    tech: ["Java", "JavaFX", "MySQL", "Operations"],
  },
];

// ======================================================
// CAREER DATA: ENGINEERING PROJECTS
// ======================================================

export const engineeringProjectsData = [
  {
    title: "Full-Stack Data Analytics Platform",
    company: "RegionLore",
    location: "Independent Project",
    dateRange: "Mar 2026 – Present",
    bullets: [
      "Building a full-stack analytics platform for exploring demographic, economic, migration, education, housing, and labor-market data across U.S. states and metropolitan areas.",
      "Developing ETL pipelines that transform Census, ACS, IRS migration, and NAEP datasets into optimized application-ready data.",
      "Creating Express REST APIs and interactive React dashboards with search, filtering, maps, charts, and regional comparisons.",
    ],
    tech: ["React", "Node.js", "Express", "REST APIs", "ETL", "AWS"],
  },
  {
    title: "Full-Stack Developer",
    company: "Delivery Management App",
    location: "Independent Project",
    dateRange: "2025",
    bullets: [
      "Built a delivery scheduling platform with manager authentication, driver views, and secure CRUD APIs.",
      "Implemented JWT-based authentication and DynamoDB-backed data storage.",
      "Reduced delivery creation time by approximately 38% and improved order tracking.",
    ],
    tech: ["React", "Node.js", "Express", "DynamoDB", "JWT"],
  },
  {
    title: "Full-Stack Developer",
    company: "Theft Tracker Application",
    location: "Independent Project",
    dateRange: "2025",
    bullets: [
      "Built an incident-reporting application with searchable archived reports and secure media uploads.",
      "Used AWS S3 pre-signed URLs, Lambda, and DynamoDB to support evidence storage and report management.",
      "Reduced police-report preparation time by approximately 33%.",
    ],
    tech: ["React", "AWS S3", "Lambda", "DynamoDB"],
  },
];

// ======================================================
// CAREER DATA: EDUCATION
// ======================================================

export const educationData = [
  {
    type: "education",
    title: "Master of Science in Computer Science",
    company: "University of Colorado Boulder",
    location: "Boulder, CO",
    dateRange: "Oct 2025 – Expected Mar 2027",
    bullets: [
      "Currently pursuing a graduate degree in computer science.",
      "Maintaining a 4.0 GPA.",
    ],
    tech: ["Computer Science", "Software Architecture", "Data Systems"],
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    company: "St. Thomas Aquinas College",
    location: "Sparkill, NY",
    dateRange: "2016 – 2020",
    bullets: [
      "Completed coursework in software development, algorithms, data structures, databases, and computer systems.",
    ],
    tech: ["Java", "SQL", "Algorithms", "Data Structures"],
  },
];

// ======================================================
// CAREER DATA: CERTIFICATIONS
// ======================================================

export const certificationData = [
  {
    type: "education",
    title: "AWS Certified Solutions Architect – Associate",
    company: "Amazon Web Services",
    location: "Professional Certification",
    dateRange: "May 2024 – May 2027",
    bullets: [
      "Validated knowledge of designing secure, resilient, high-performing, and cost-optimized AWS architectures.",
    ],
    tech: ["AWS", "Cloud Architecture"],
  },
];

// ======================================================
// HOME DATA: TECHNOLOGIES
// ======================================================

export const techItems = [
  {
    logo: reactLogo,
    title: "React",
  },
  {
    logo: nodeLogo,
    title: "Node.js",
  },
  {
    logo: expressLogo,
    title: "Express",
  },
  {
    logo: awsLogo,
    title: "AWS",
  },
  {
    logo: javaLogo,
    title: "Java",
  },
  {
    logo: mysqlLogo,
    title: "MySQL",
  },
  {
    logo: htmlLogo,
    title: "HTML5",
  },
  {
    logo: cssLogo,
    title: "CSS3",
  },
  {
    logo: gitLogo,
    title: "Git",
  },
  {
    logo: postmanLogo,
    title: "Postman",
  },
  {
    logo: visualStudioLogo,
    title: "VS Code",
  },
  {
    logo: bootstrapLogo,
    title: "Bootstrap",
  },
];

// ======================================================
// ABOUT DATA: LEADERSHIP
// ======================================================

export const leadershipPoints = [
  "Led a team of more than 25 staff members while overseeing daily store operations",
  "Provided hands-on mentorship, training, and onboarding for new employees",
  "Identified operational inefficiencies and developed internal software tools",
  "Combined technical problem-solving with retail and team leadership",
  "Built applications that improved delivery, checkout, and reporting workflows",
  "Collaborated with employees and stakeholders to develop practical solutions",
  "Supported customers while resolving technical and operational issues",
  "Promoted a culture of innovation, accountability, and customer service",
];

// ======================================================
// ABOUT DATA: FREQUENTLY ASKED QUESTIONS
// ======================================================

export const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React, Node.js, Express, Java, AWS services, REST APIs, database development, and responsive front-end design.",
  },
  {
    question: "Can you build full-stack applications?",
    answer:
      "Yes. I build end-to-end applications using React on the front end and technologies such as Node.js, Express, Java, DynamoDB, MySQL, and AWS services on the back end.",
  },
  {
    question: "Do you have experience working with real clients?",
    answer:
      "Yes. I designed and deployed the production website and email infrastructure for Splash Zone Aquatics and have also built internal software tools for retail operations.",
  },
  {
    question: "What results have your applications achieved?",
    answer:
      "My work has contributed to approximately 50% of seasonal registrations before a business launch, reduced checkout time by 47%, and reduced police-report preparation time by approximately 33%.",
  },
  {
    question: "Do you use AWS in your work?",
    answer:
      "Yes. I am AWS Certified and have worked with services including Lambda, S3, DynamoDB, API Gateway, CloudFront, Route 53, and Secrets Manager.",
  },
  {
    question: "How do you handle secure file uploads?",
    answer:
      "For applications such as Theft Tracker, I use AWS S3 pre-signed URLs so files can be uploaded securely without exposing cloud credentials to the browser.",
  },
  {
    question: "What kinds of organizations have you supported?",
    answer:
      "I have supported small businesses, customer-facing service organizations, and retail operations by building websites, cloud workflows, and internal productivity tools.",
  },
  {
    question: "Can you integrate third-party APIs?",
    answer:
      "Yes. I have integrated services and public data sources including Resend, Mailchimp, OpenWeatherMap, Census data, IRS migration data, and other external APIs and datasets.",
  },
  {
    question: "Do you have team leadership experience?",
    answer:
      "Yes. I led and supervised more than 25 staff members at Rainbow Ace Hardware while also developing technical solutions to improve store operations.",
  },
  {
    question: "Do you build mobile-friendly applications?",
    answer:
      "Yes. I use responsive layouts, CSS Grid, Flexbox, component-based interfaces, and mobile breakpoints to create applications that work across screen sizes.",
  },
];

// ======================================================
// PORTFOLIO DATA: FEATURED PROJECTS
// ======================================================

export const featuredProjects = [
  {
    title: "RegionLore",
    tech: "React, Node.js, Express, REST APIs, ETL Pipelines, AWS",
    description:
      "Full-stack analytics platform for exploring demographic, economic, migration, education, housing, and labor-market data across U.S. states and metropolitan areas. RegionLore transforms large public datasets into searchable dashboards, maps, charts, rankings, and regional comparisons.",
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
