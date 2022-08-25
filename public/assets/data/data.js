// import projects images
import drim from "../projects/drim.png";
import mantraecomm from "../projects/mantraecomm.png";
import mealmonkey from "../projects/mealmonkey.png";
import portfolio from "../projects/portfolio.png";
import livechat from "../projects/livechat.png";

// import skills image
import javascript from "../skills/javascript.png";
import github1 from "../skills/github1.png";
import firebase from "../skills/firebase.png";
import react from "../skills/react.png";
import tailwind from "../skills/tailwind.png";
import node from "../skills/node.png";
import nextjs from "../skills/nextjs.png";
import mongo from "../skills/mongo.png";

// skills data
export const skillsData = [
  {
    id: 1,
    img: javascript,
    skill: "Javascript",
  },
  {
    id: 2,
    img: node,
    skill: "nodejs",
  },

  {
    id: 3,
    img: react,
    skill: "reactJS",
  },

  {
    id: 4,
    img: nextjs,
    skill: "nextjs",
  },

  {
    id: 5,
    img: mongo,
    skill: "mongodb",
  },
  {
    id: 6,
    img: tailwind,
    skill: "tailwind",
  },

  {
    id: 7,
    img: firebase,
    skill: "firebase",
  },

  {
    id: 8,
    img: github1,
    skill: "github",
  },
];

// project data

export const projectsData = [
  {
    id: 1,
    name: "Mantra Ecommerce",
    category: "webdevelopment",
    image: mantraecomm,
    desc: "Mantra is a full stack ecommerce website, with complete token based authentication, admin page to add new product, delete and update existing one.",
    demo: "https://mantracom.netlify.app",
    git: "https://github.com/GautamGunecha/Ecommerce",
  },
  {
    id: 2,
    name: "Drim Vehicle Booking",
    category: "webdevelopment",
    image: drim,
    desc: "Customer can book their dream car at a rental basis if timeslot is available, track down all the cars rented out by him.",
    demo: "https://drim.vercel.app",
    git: "https://github.com/GautamGunecha/Vehicle-Rental-Service",
  },
  {
    id: 3,
    name: "Developer Portfolio",
    category: "ui",
    image: portfolio,
    desc: "A personal portfolio projects that showcase all my latest work in field of tech.",
    demo: "https://gautamgunecha.vercel.app",
    git: "https://github.com/GautamGunecha/myportfolio",
  },
  {
    id: 4,
    name: "Meal Monkey",
    category: "webdevelopment",
    image: mealmonkey,
    desc: "NextJs food delivery web application that allows customer to track down delivery status in real-time.",
    demo: "https://meal-monkey.vercel.app",
    git: "https://github.com/GautamGunecha/meal-monkey",
  },
  {
    id: 5,
    name: "Live Chat Web Application",
    category: "webdevelopment",
    image: livechat,
    desc: "Real time web chat application with one-to-one or group chat feature where group admin can add or remove someone.",
    demo: "https://livechatwebapp.vercel.app",
    git: "https://github.com/GautamGunecha/Live-Chat-App",
  },
  {
    id: 6,
    name: "Moms Blisss",
    category: "client",
    image: "",
    desc: "Help out local home vendor to setup ecommerce website. Check out and order too :) [Under Maintainance]",
    demo: "https://moms-bliss.vercel.app",
    git: "",
  },
];

// about me
export const aboutMe = [
  { id: 1, para: "" },
  { id: 2, para: "" },
];
