interface IInfoList {
  icon: string;
  title: string;
  description: string;
}

export const infoList: IInfoList[] = [
  {
    icon: "/asset/code-icon.webp",
    title: "Languages",
    description: "Typescript, Javascript, PHP",
  },
  {
    icon: "/asset/edu-icon.webp",
    title: "Education",
    description: "Information System in Andalas University",
  },
  {
    icon: "/asset/project-icon.webp",
    title: "Framework",
    description: "Next JS, Express JS, Laravel",
  },
];

export const toolsData = [
  "/asset/vscode.webp",
  "/asset/git.webp",
  "/asset/figma.webp",
  "/asset/postman.png",
  "/asset/sourcetree.png",
];

interface ISkills {
  icon: string;
  title: string;
  description: string;
}

export const skillsData: ISkills[] = [
  {
    icon: "/asset/frontend.webp",
    title: "Front-End",
    description:
      "HTML, CSS, JavaScript, Next JS, React, Tailwind CSS, Bootstrap",
  },
  {
    icon: "/asset/backend.webp",
    title: "Back-End",
    description: "PHP, Laravel, Node.js, Express, Prisma ORM, RESTful APIs",
  },
  {
    icon: "/asset/devops.webp",
    title: "DevOps & Tools",
    description: "Git & GitHub, VS Code, Postman, Figma",
  },
];

interface IProject {
  id: number;
  title: string;
  tech: string;
  bgImage: string;
  description?: string;
}
export const projectData: IProject[] = [
  {
    id: 1,
    title: "StayFinder",
    tech: "NextJs, ExpressJS, PostgreSQL, Tailwind CSS",
    bgImage: "/asset/StayFinder.webp",
    description:
      "StayFinder is a web-based platform designed to help users easily find accommodations while enabling property owners to promote their listings. The application provides a seamless experience for discovering, filtering, and booking lodging options, making the search process faster and more efficient for both tenants and users.",
  },
  {
    id: 2,
    title: "Hafara",
    tech: "Laravel, MySQL, Bootstrap",
    bgImage: "/asset/Hafara.webp",
    description:
      "Hafara GuestHouse is an online room booking system developed to streamline guest reservations and simplify daily administrative tasks. The platform allows users to check room availability and make bookings online while providing staff with tools for managing reservations and generating basic operational reports.",
  },
];

export const experience = [
  {
    year: "2025",
    role: "Full Stack Web Development Student",
    company: "Purwadhika Digital School",
    // responsibilities: "Responsibilities 3",
  },
  {
    year: "2020 - 2025",
    role: "Information System Student",
    company: "Andalas University",
    // responsibilities: "Responsibilities 1",
  },
];

interface ITestimony {
  name: string;
  message: string;
  photo: string;
}
export const testimony: ITestimony[] = [
  {
    name: "Person 1",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    photo: "/asset/personTest.webp",
  },
  {
    name: "Person 2",
    message:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    photo: "/asset/personTest.webp",
  },
  {
    name: "Person 3",
    message:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    photo: "/asset/personTest.webp",
  },
  {
    name: "Person 4",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    photo: "/asset/personTest.webp",
  },
];
interface ISocmed {
  icon: string;
  link: string;
}
export const socmed: ISocmed[] = [
  {
    icon: "/asset/linkedin.webp",
    link: "https://www.linkedin.com/in/radithyaromero",
  },
  { icon: "/asset/gmail.webp", link: "mailto:radithya.romero@gmail.com" },
  { icon: "/asset/github.webp", link: "https://github.com/RadithyaR" },
  {
    icon: "/asset/facebook.webp",
    link: "https://www.facebook.com/radithya.romero.7/",
  },
  {
    icon: "/asset/instagram.webp",
    link: "https://www.instagram.com/radit_romero",
  },
];
