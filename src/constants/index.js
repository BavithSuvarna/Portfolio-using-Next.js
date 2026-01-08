const project1 = "/assets/projects/project-1.jpg";
const project2 = "/assets/projects/project-2.jpg";
const project3 = "/assets/projects/project-3.png";
const project4 = "/assets/projects/project-4.jpg";
const project5 = "/assets/projects/project-5.jpg";
const project6 = "/assets/projects/project-6.jpg";
const project7 = "/assets/projects/project-7.jpg";

const achievement1 = "/assets/achievements/achievement-1.jpg";
const achievement2 = "/assets/achievements/achievement-2.jpg";
const achievement3 = "/assets/achievements/achievement-3.jpg";
const achievement4 = "/assets/achievements/achievement-4.jpg";
const achievement5 = "/assets/achievements/achievement-5.jpg";
const achievement6 = "/assets/achievements/achievement-6.jpg";

export const HERO_CONTENT = `I’m currently studying Computer Science at Sahyadri College of Engineering and Management Mangalore. I’m always looking for new challenges and love exploring ways to turn ideas into real, working solutions. I believe in continuous learning, and whether it’s through building projects or connecting with others, I’m always growing and evolving. I’m excited to see where this journey takes me and would love to connect with others who are equally passionate about tech, learning, and making an impact.
`;

export const PROJECTS = [
  {
    title: "DeepLock",
    image: project1,
    description:
      "An AI-powered platform that detects deepfake media across multiple formats and securely records verification results using blockchain technology.",
    technologies: [
      "Python",
      "Tensorflow",
      "React",
      "Flask",
      "Smart Contracts(Blockchain)",
    ],
    github: "https://github.com/BavithSuvarna/DeepLock",
  },
  {
    title: "QVista",
    image: project2,
    description:
      "QVista is a smart and user-friendly digital queue management system designed to streamline check-ins and reduce wait times. Users can effortlessly join the queue, while admins manage flow through real-time controls and status updates. With its clean interface and seamless experience.",
    technologies: ["MERN Stack", "REST APIs", "Git"],
    github: "https://github.com/BavithSuvarna/QVista",
    demo: "https://qvista.vercel.app",
  },
  {
    title: "Task Manager",
    image: project3,
    description:
      "Task Manager is a responsive full-stack web app that lets users register, log in, and manage tasks efficiently. It supports task creation, editing, completion, and deletion with a clean and intuitive UI. Built using the MERN stack and optimized for all devices.",
    technologies: ["MERN Stack", "REST APIs", "JWT Authentication"],
    github: "https://github.com/BavithSuvarna/Task-Manager",
    demo: "https://taskymanager.vercel.app",
  },
  {
    title: "Venture Jobs",
    image: project4,
    description:
      "VentureJobs is a responsive job listing platform built with React, Node.js, and Express, supporting job creation, browsing, and detailed views. It uses MongoDB for data storage and RESTful APIs for smooth backend integration. The project features dynamic routing, clean UI, and is deployed using Vercel with Git for version control.",
    technologies: ["MERN Stack", "REST APIs"],
    github: "https://github.com/BavithSuvarna/venturejobs",
    demo: "https://venturejobs.vercel.app",
  },
  {
    title: "FakeShield",
    image: project5,
    description:
      "FakeShield is a machine learning-based system that detects fake social media accounts and AI-generated content by analyzing user behavior, profile data, and image authenticity.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/BavithSuvarna/FakeShield",
  },
  {
    title: "My Portfolio",
    image: project6,
    description:
      "My personal portfolio website to showcase my skills, projects, and contact details.",
    technologies: ["React", "TailwindCSS", "Vercel"],
    github: "https://github.com/BavithSuvarna/bavithportfolio",
    demo: "https://bavithportfolio.vercel.app",
  },

  {
    title: "Personal Expense Tracker",
    image: project7,
    description:
      "A full-stack application that allows users to securely sign up, log in, and manage expenses in real time. Expenses can be added, edited, deleted, or filtered through a clean and responsive dashboard with category-wise summaries.",
    technologies: [
      "MERN Stack",
      "JWT Authentication",
      "Recharts",
      "REST APIs",
    ],
    github: "https://github.com/BavithSuvarna/Personal-Expense-Tracker",
    demo: "https://easespend.vercel.app",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "TechVision-2025 Runner-Up",
    images: [achievement1, achievement2, achievement3, achievement4],
    description:
      "Secured 2nd place for the DeepLock project at TechVision-2025, showcasing innovation in AI-based deepfake detection and blockchain security.",
    technologies: [],
  },
  {
    title: "Winners – Battle of Blue Whales: An Ultimate Auction Showdown",
    images: [achievement5, achievement6],
    description:
      "Achieved first place in the “Battle of Blue Whales – An Ultimate Auction Showdown” competition held on 24th May 2025 at Sahyadri Carnival. Demonstrated strong analytical thinking, decision-making, and strategic bidding skills to outperform participants from various backgrounds.",
    technologies: [],
  },
];

export const CONTACT = {
  email: "suvarnabavith@gmail.com",
};
