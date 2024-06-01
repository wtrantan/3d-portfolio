import {
  karina,
  karinasys,
  tht,
  port,
  cauldron,
  rxplain
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Intro",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact Me",
  },
 
];

const experiences = [
  {
    title: "Front End Developer Lead",
    company_name: "Tiny Health Tales",
    date: "2023 - Present",
    details: [
      // <span style='color: white;'></span>
      "Responsible for designing and creating a full-stack website and implementing <span style='color: white;'>YouTube API</span> to create <span style='color: white;'>interactive videos</span> to advocate and promote health to the people of <span style='color: white;'>San Joaquin Valley</span>.",
      "Producing easy to use features for users to navigate the site.",
    ],
  },
    {
 title: "Sales Associate",
    company_name: "Daiso",
    date: "2022",
    details: [
      "Improved customer satisfaction by <span style='color: white;'>resolving issues promptly</span>, and demonstrating <span style='color: white;'>strong problem-solving skills.</span>",
      "Collaborated with team members to achieve sales targets, showcasing <span style='color: white;'>teamwork and communication skills.</span>"
    ],
  },   
  {
    title: "Web Developer Intern",
    company_name: "Igniteducation",
    date: "2020 - 2021",
    details: [
      
      "Implemented <span style='color: white;'>Bootstrap, HTML, CSS and Photoshop </span> to redesign the company website for mobile devices",
      "<span style='color: white;'>Collaborated with a supervisor</span> to plan and execute ways to design for mobile devices.",
    ],
  },
//   {
//  title: "Computer Science",
//     company_name: "ODU",
//     date: "2015 - 2018",
//     details: [
//       "Built a <span style='color: white;'>computer science foundation</span> learning theory, computer architecture, and software engineering.",
//       "Worked and interned at <span style='color: white;'>NASA and Norfolk Southern Railway</span> to gain practical experience in the field of data analysis.",
//       "Acted as a member of the <span style='color: white;'>Association for Computing Machinery</span> (ACM).",
//     ],
//   },   
];

const portfolio = [
  {
    name: "Website Portfolio",
    description:
      "Welcome to my website! This project was created using Vite, JavaScript, ThreeJS, React, Framer Motion, and Tailwind. Thanks to Forrest Knight for the ThreeJS template, which I heavily modified and customized, and JavaScript Mastery for help with JavaScript implementations and Tailwind.",
    image: port,
    link: "https://github.com/wtrantan/React-Portfolio-ThreeJS",
  },
  {
    name: "Tiny Health Tales",
    description:
      "Tiny Health Tales is an organization aimed to educate people in health with interactive media. I am responsible for leading a team, designing and creating a full-stack website and implementing interactive videos",
    image: tht,
    link: "https://github.com/wtrantan/tiny-health-tales",
  },
  {
    name: "Karina System",
    description:
      "A showcase of objects, 3d models, and shading materials using Three JS",
    image: karinasys,
    link: "https://github.com/wtrantan/karinasys",
  },
  {
    name: "HackDavis 2024",
    description:
      "During HackDavis 2024 in a team of 4, we created a recipe generating app using the items they have in their fridge using Open AI with a backend. We want people to make more health concious decisions with food and to help with that is to make managing groceries in your fridge easier.",
    image: cauldron,
    link: "https://github.com/wtrantan/HackDavis",
  },
  {
    name: "HackMerced 2024",
    description:
      "During HackMerced 2024 in a team of 4, we created a medication management app with language changing abilities using google translate API, to add inclusiveness to everyone. (Won for best Domain name from GoDaddy Registry)",
    image: rxplain,
    link: "https://github.com/wtrantan/HackMerced-Health-For-Social-Good",
  },
];

export { experiences, portfolio };

