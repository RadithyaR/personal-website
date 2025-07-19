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
