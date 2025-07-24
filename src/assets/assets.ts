interface IInfoList {
  icon: string;
  title: string;
  description: string;
}

export const infoList: IInfoList[] = [
  {
    icon: "/asset/code-icon.webp",
    title: "Languages",
    description: "HTML, CSS, Javascript, PHP",
  },
  {
    icon: "/asset/edu-icon.webp",
    title: "Education",
    description: "Information System in Andalas University",
  },
  {
    icon: "/asset/project-icon.webp",
    title: "Projects",
    description: "Built more than 3 projects",
  },
];

export const toolsData = [
  "/asset/vscode.webp",
  "/asset/git.webp",
  "/asset/figma.webp",
  "/asset/postgre.webp",
  "/asset/firebase.webp",
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
    description: "HTML, CSS, JavaScript, React, Angular",
  },
  {
    icon: "/asset/backend.webp",
    title: "Back-End",
    description: "PHP, Laravel, Node.js, Express, Django, Ruby on Rails",
  },
  {
    icon: "/asset/devops.webp",
    title: "DevOps & Tools",
    description: "Docker, Git, Jenkins, AWS, CI/CD solutions",
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
    title: "EcoShop Marketplace",
    tech: "React, Node.js, MongoDB, Tailwind CSS",
    bgImage: "/asset/project.webp",
    description:
      "Developed a sustainable product marketplace to connect eco-friendly brands with conscious consumers, built with a responsive React frontend and Node.js backend, implementing secure payments and carbon footprint calculators which resulted in 120+ vendor signups within the first month.",
  },
  {
    id: 2,
    title: "HealthTrack Pro",
    tech: "Vue.js, Firebase, Chart.js",
    bgImage: "/asset/project.webp",
    description:
      "Created a wellness dashboard for fitness enthusiasts to monitor workouts and nutrition, featuring real-time data visualization through Chart.js and Firebase integration, helping users achieve 30% better consistency in their health routines through personalized tracking.",
  },
  {
    id: 3,
    title: "CodeCollab IDE",
    tech: "TypeScript, WebSockets, Monaco Edito",
    bgImage: "/asset/project.webp",
    description:
      "Designed a browser-based collaborative coding environment with live pairing functionality using WebSockets, enabling remote teams to solve programming challenges together with shared cursor positions and instant code execution, now used by 15+ coding bootcamps.",
  },
  {
    id: 4,
    title: "UrbanBites Food Delivery",
    tech: "Next.js, Stripe API, Mapbox",
    bgImage: "/asset/project.webp",
    description:
      "Built a hyperlocal food delivery platform with real-time order tracking using Mapbox and Next.js ISR, reducing average delivery times by 25% through optimized route algorithms and vendor proximity matching in urban areas.Built a hyperlocal food delivery platform with real-time order tracking using Mapbox and Next.js ISR, reducing average delivery times by 25% through optimized route algorithms and vendor proximity matching in urban areas.",
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
  { icon: "/asset/linkedin.webp", link: "https://www.linkedin.com/" },
  { icon: "/asset/gmail.webp", link: "https://www.gmail.com/" },
  { icon: "/asset/github.webp", link: "https://github.com/" },
  { icon: "/asset/facebook.webp", link: "https://www.facebook.com/" },
  { icon: "/asset/instagram.webp", link: "https://www.instagram.com/" },
];
