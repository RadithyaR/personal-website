interface IInfoList {
  icon: string;
  title: string;
  description: string;
}

export const infoList: IInfoList[] = [
  {
    icon: "/asset/code-icon.png",
    title: "Languages",
    description: "HTML, CSS, Javascript, PHP",
  },
  {
    icon: "/asset/edu-icon.png",
    title: "Education",
    description: "Information System in Andalas University",
  },
  {
    icon: "/asset/project-icon.png",
    title: "Projects",
    description: "Built more than 3 projects",
  },
];

export const toolsData = [
  "/asset/vscode.png",
  "/asset/git.png",
  "/asset/figma.png",
  "/asset/postgre.png",
  "/asset/firebase.png",
];

interface ISkills {
  icon: string;
  title: string;
  description: string;
}

export const skillsData: ISkills[] = [
  {
    icon: "/asset/frontend.png",
    title: "Front-End",
    description: "HTML, CSS, JavaScript, React, Angular",
  },
  {
    icon: "/asset/backend.png",
    title: "Back-End",
    description: "PHP, Laravel, Node.js, Express, Django, Ruby on Rails",
  },
  {
    icon: "/asset/devops.png",
    title: "DevOps & Tools",
    description: "Docker, Git, Jenkins, AWS, CI/CD solutions",
  },
];

interface IProject {
  title: string;
  description: string;
  bgImage: string;
}
export const projectData: IProject[] = [
  {
    title: "Project 1",
    description: "description 1",
    bgImage: "/asset/project.png",
  },
  {
    title: "Project 2",
    description: "description 2",
    bgImage: "/asset/project.png",
  },
  {
    title: "Project 3",
    description: "description 3",
    bgImage: "/asset/project.png",
  },
  {
    title: "Project 4",
    description: "description 4",
    bgImage: "/asset/project.png",
  },
];

export const experience = [
  {
    year: "2025 - Present",
    role: "Full-Stack Web Developer",
    company: "Tech 3",
    responsibilities: "Responsibilities 3",
  },
  {
    year: "2024",
    role: "Junior Web Developer",
    company: "Tech 2",
    responsibilities: "Responsibilities 2",
  },
  {
    year: "2020 - 2023",
    role: "Web Developer Intern",
    company: "Tech 1",
    responsibilities: "Responsibilities 1",
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
    photo: "/asset/personTest.jpg",
  },
  {
    name: "Person 2",
    message:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    photo: "/asset/personTest.jpg",
  },
  {
    name: "Person 3",
    message:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    photo: "/asset/personTest.jpg",
  },
  {
    name: "Person 4",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    photo: "/asset/personTest.jpg",
  },
];
interface ISocmed {
  icon: string;
  link: string;
}
export const socmed: ISocmed[] = [
  { icon: "/asset/linkedin.png", link: "https://www.linkedin.com/" },
  { icon: "/asset/gmail.png", link: "https://www.gmail.com/" },
  { icon: "/asset/github.png", link: "https://github.com/" },
  { icon: "/asset/facebook.png", link: "https://www.facebook.com/" },
  { icon: "/asset/instagram.png", link: "https://www.instagram.com/" },
];
