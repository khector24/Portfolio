// data.js

export const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React, Node.js, AWS (Lambda, DynamoDB, S3), REST APIs, and responsive front-end design.",
  },
  {
    question: "Can you build full-stack applications?",
    answer:
      "Yes — I’ve built end-to-end systems using front-end frameworks like React and back-end services with Express and AWS.",
  },
  {
    question: "Do you have experience with real clients?",
    answer:
      "Absolutely — I’ve deployed commercial sites like Splash Zone Aquatics and built internal tools for retail operations.",
  },
  {
    question: "What results have your projects achieved?",
    answer:
      "My projects led to tangible improvements, including a 47% faster checkout system, 13 client signups before launch, and a 33% faster reporting process.",
  },
  {
    question: "Do you use AWS in your work?",
    answer:
      "Yes — I’m AWS Certified and use services like Lambda, S3, and DynamoDB to build scalable, secure, cloud-first applications.",
  },
  {
    question: "How do you handle secure file uploads?",
    answer:
      "For projects like Theft Tracker, I used AWS S3 pre-signed URLs to securely handle media uploads without exposing credentials.",
  },
  {
    question: "What kind of businesses have you supported?",
    answer:
      "I’ve supported both small businesses and retail operations—creating internal systems and customer-facing websites to boost efficiency and engagement.",
  },
  {
    question: "Can you integrate with third-party APIs?",
    answer:
      "Yes — I’ve integrated APIs like Resend for transactional emails and Mailchimp for newsletter sign-ups using Node.js and Express.",
  },
  {
    question: "Do you have team leadership experience?",
    answer:
      "Yes — I led a team of over 25 staff members at Rainbow Ace Hardware while also building technical solutions to improve store performance.",
  },
  {
    question: "Do you build mobile-friendly applications?",
    answer:
      "Absolutely — I prioritize responsive design using CSS Grid, Flexbox, and component-based UIs to ensure usability across all devices.",
  },
];

export const leadershipPoints = [
  "Led a 25+ person team while overseeing day-to-day store operations",
  "Delivered hands-on mentorship and onboarding for new hires",
  "Provided excellent customer support and issue resolution",
  "Identified operational inefficiencies and built internal apps",
  "Collaborated on custom software solutions",
  "Balanced tech execution with retail management",
  "Launched internal tools and client-facing apps",
  "Promoted a culture of innovation and customer-first service",
];

// 🧩 Logo Imports
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

// 🛠️ Tech Items Array
export const techItems = [
  { logo: reactLogo, title: "React" },
  { logo: nodeLogo, title: "Node.js" },
  { logo: expressLogo, title: "Express" },
  { logo: awsLogo, title: "AWS" },
  { logo: javaLogo, title: "Java" },
  { logo: mysqlLogo, title: "MySQL" },
  { logo: htmlLogo, title: "HTML5" },
  { logo: cssLogo, title: "CSS3" },
  { logo: gitLogo, title: "Git" },
  { logo: postmanLogo, title: "Postman" },
  { logo: visualStudioLogo, title: "VS Code" },
  { logo: bootstrapLogo, title: "Bootstrap" },
];

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

export const engineeringProjectsData = [
  {
    title: "Full-Stack Data Analytics Platform",
    company: "RegionLore",
    location: "Independent Project",
    dateRange: "Mar 2026 – Present",
    bullets: [
      "Building a full-stack analytics platform for exploring demographic, economic, migration, education, and housing data across all 50 states and major U.S. metropolitan areas.",
      "Developing ETL pipelines that transform Census, ACS, IRS migration, and NAEP datasets into optimized application-ready data.",
      "Creating Express REST APIs and interactive React dashboards with search, filtering, maps, and regional comparisons.",
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
      "Built an incident reporting application with searchable archived reports and secure media uploads.",
      "Used AWS S3 pre-signed URLs, Lambda, and DynamoDB to support file storage and report management.",
      "Reduced police report preparation time by approximately 33%.",
    ],
    tech: ["React", "AWS S3", "Lambda", "DynamoDB"],
  },
];

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

// Portfolio Imports renamed to featured-projects
import splashHome from "../assets/featured-projects/Splash-Zone-Pics/Home.png";
import splashFAQ from "../assets/featured-projects/Splash-Zone-Pics/faq.png";
import splashNewsletter from "../assets/featured-projects/Splash-Zone-Pics/newsletter.png";
import splashModal from "../assets/featured-projects/Splash-Zone-Pics/contact-modal.png";
import splashReceive from "../assets/featured-projects/Splash-Zone-Pics/students-receive.png";

import weatherType from "../assets/featured-projects/WeatherAppPics/type-city.png";
import weatherSuccess from "../assets/featured-projects/WeatherAppPics/success.png";
import weatherError from "../assets/featured-projects/WeatherAppPics/error.png";

import placeholder from "../assets/featured-projects/placeholder.jpg";

import SimonSaysGame from "../assets/featured-projects/Simon-Says-Pics/start-page.png";
import SimonLevel1 from "../assets/featured-projects/Simon-Says-Pics/level-1.png";
import SimonLevel2 from "../assets/featured-projects/Simon-Says-Pics/level-2.png";
import SimonLevel3 from "../assets/featured-projects/Simon-Says-Pics/level-3.png";

import TodoListMain from "../assets/featured-projects/Todo-List-Pics/main-page.png";
import TodoListAdd from "../assets/featured-projects/Todo-List-Pics/add-task.png";
import TodoListPostAdd from "../assets/featured-projects/Todo-List-Pics/post-add-task.png";
import TodoListEdit from "../assets/featured-projects/Todo-List-Pics/edit-task.png";

import hero from "../assets/featured-projects/portfolio-website-pics/Hero.png";
import whatIDo from "../assets/featured-projects/portfolio-website-pics/what-i-do.png";
import howIWork from "../assets/featured-projects/portfolio-website-pics/how-i-work.png";
import whoIAm from "../assets/featured-projects/portfolio-website-pics/who-i-am.png";
import career from "../assets/featured-projects/portfolio-website-pics/career.png";
import portfolio from "../assets/featured-projects/portfolio-website-pics/portfolio.png";
import techSkills from "../assets/featured-projects/portfolio-website-pics/tech-skills.png";
import contact from "../assets/featured-projects/portfolio-website-pics/contact.png";

export const featuredProjects = [
  {
    title: "Splash Zone Aquatics Website",
    tech: "React, Material UI, AWS S3, Lambda, DynamoDB",
    description:
      "Responsive, customer-focused site featuring instructor profiles, FAQs, and AWS-powered newsletter automation. Drove 13+ early signups before launch.",
    link: "https://github.com/khector24/swim-aquatics",
    tags: ["react", "aws", "lambda", "dynamodb", "material-ui"],
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
    title: "Theft Tracker Application",
    tech: "React, Material UI, AWS S3, Lambda, DynamoDB",
    description:
      "Incident reporting system with media uploads and DynamoDB logging. Used in-store to reduce police reporting time by 33%.",
    link: "https://github.com/khector24/theft-tracker",
    tags: ["react", "aws", "lambda", "file-upload", "material-ui"],
    images: [placeholder],
    hasLiveLink: false,
    liveLink: "",
    showPlaceholderNote: true,
  },
  {
    title: "Delivery Management App",
    tech: "React, Node.js, Express, DynamoDB",
    description:
      "Internal delivery scheduling platform with real-time tracking, custom permissions, and SMS notifications. Helped reduce delivery errors to near-zero.",
    link: "https://github.com/khector24/delivery-manager",
    tags: ["react", "node", "express", "dynamodb", "auth"],
    images: [placeholder],
    hasLiveLink: false,
    liveLink: "",
    showPlaceholderNote: true,
  },
  {
    title: "Weather Project",
    tech: "Node.js, Express, EJS, CSS",
    description:
      "Simple weather app using OpenWeatherMap API. Accepts city input and displays live weather data using EJS templating.",
    link: "https://github.com/khector24/weather-project",
    tags: ["node", "ejs", "express", "api"],
    images: [weatherType, weatherSuccess, weatherError],
    hasLiveLink: true,
    // liveLink: "https://weather-project-868n.onrender.com/",
    liveLink: "https://weather-app.kennyhector.com/",
    showPlaceholderNote: false,
  },
  {
    title: "Simple To-Do List",
    tech: "Node.js, EJS, CSS, JavaScript",
    description:
      "Clean and interactive to-do list app using EJS templates and route-based task management.",
    link: "https://github.com/khector24/simple-to-do-list",
    tags: ["node", "ejs", "express", "todo"],
    images: [TodoListMain, TodoListAdd, TodoListPostAdd, TodoListEdit],
    hasLiveLink: true,
    // liveLink: "https://simple-to-do-list-mat0.onrender.com/",
    liveLink: "https://todo.kennyhector.com/",
    showPlaceholderNote: false,
  },
  {
    title: "Simon Says Game",
    tech: "JavaScript, HTML, CSS",
    description:
      "Interactive memory game built from scratch with custom sounds and animations. Fun demonstration of game logic.",
    link: "https://github.com/khector24/simon-says-game",
    tags: ["javascript", "game", "html", "css", "j-query"],
    images: [SimonSaysGame, SimonLevel1, SimonLevel2, SimonLevel3],
    hasLiveLink: true,
    liveLink: "https://simongame.kennyhector.com/",
    showPlaceholderNote: false,
  },
  {
    title: "Personal Portfolio Website",
    tech: "React, AWS S3, Route 53, Framer Motion, CSS",
    description:
      "My own responsive portfolio site featuring animations, dark/light mode, and a polished design showcasing my projects and skills.",
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
];
