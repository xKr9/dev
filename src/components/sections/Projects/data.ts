import kurb from "../../../assets/imgs/KURB.png";
import screendm from "../../../assets/imgs/SCREEN_DM.png";
import matrix from "../../../assets/imgs/MATRIX2_IMG.png";
import quidland from "../../../assets/imgs/QUIDLAND_IMG.png";
import posttag from "../../../assets/imgs/POSTTAG_IMG.png";
import globaltint from "../../../assets/imgs/GLOBAL_TINT.png";

const data = [
  {
    title: "Case Management Platform",
    description:
      "Platform for simplifying the home-buying process by conducting comprehensive checks on land registry, water company data, hazards, and more.",
    pills: ["React", "Tailwind", "Django", "ReactQuery", "TypeScript"],
    img: matrix,
    link: "/projects/case-management-platform",
  },
  {
    title: "Quidland",
    description:
      "Decentralised web application allowing service providers to offer their services and customers to book them by registering e-wallets.",
    img: quidland,
    pills: [
      "React",
      "JavaScript",
      "Laravel",
      "Tailwind",
      "PHP",
      "Laravel",
      "MangoPay",
      "Decentralised Web",
    ],
    link: "/projects/quidland",
  },
  {
    title: "PostTag Dashboard",
    description:
      "An internal dashboard for PostTag to manage their clients data usage.",
    img: posttag,
    pills: ["React", "JavaScript", "Tailwind", "MaterialUI"],
    link: "/projects/posttag-dashboard",
  },
  {
    title: "ScreenDM",
    description:
      "Web platform for film students to share their work and connect with other students and industry professionals.",
    img: screendm,
    pills: ["React", "TypeScript", "Tailwind"],
    link: "/projects/screendm",
  },
  {
    title: "Kurb",
    description:
      "Web application designed to calculate the carbon footprint for projects, on a small scale project-by-project basis",
    pills: ["React", "TypeScript", "Tailwind", "RadixUI"],
    img: kurb,
    link: "/projects/kurb",
  },
  {
    title: "Global Tint",
    description:
      "A web application for offering the sale of window tinting products and services.",
    pills: ["React", "JavaScript", "Laravel", "PHP", "CSS"],
    img: globaltint,
    link: "/projects/global-tint",
  },
];

export default data;
