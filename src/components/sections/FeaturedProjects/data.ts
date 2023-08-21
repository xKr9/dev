import ama from "../../../assets/imgs/AMA_IMG.png";
import kurb from "../../../assets/imgs/KURB.png";
import screendm from "../../../assets/imgs/SCREEN_DM.png";
import matrix from "../../../assets/imgs/MATRIX2_IMG.png";
import pln from "../../../assets/imgs/PLN_IMG.png";
import hat from "../../../assets/imgs/HATLESS_IMG.png";
import quidland from "../../../assets/imgs/QUIDLAND_IMG.png";
import posttag from "../../../assets/imgs/POSTTAG_IMG.png";
import globaltint from "../../../assets/imgs/GLOBAL_TINT.png";

const data = [
  {
    title: "Primary Languages Network",
    description:
      "A language learning application for children to practice their language listening, reading and writing skills via fun-to-play games, with a space theme.",
    img: pln,
    pills: ["Vue", "Django", "MySQL", "Tailwind", "JavaScript"],
  },
  {
    title: "A.M.A Selections",
    description:
      "Luxurious holiday booking application offering a wide range of privately owned luxuary villas in Europe.",
    pills: [
      "React",
      "JavaScript",
      "NextJS",
      "Tailwind",
      "PHP",
      "Laravel",
      "PostgreSQL",
      "GraphQL",
    ],
    img: ama,
  },
  {
    title: "Hatless Website Redesign",
    description:
      "A collaborative project with the internal design team to redesign the Hatless website.",
    pills: ["Vue", "Nuxt", "Tailwind", "Strapi", "JavaScript"],
    img: hat,
  },
  {
    title: "Case Management Platform",
    description:
      "Platform for simplifying the home-buying process by conducting comprehensive checks on land registry, water company data, hazards, and more.",
    pills: ["React", "Tailwind", "Django", "ReactQuery", "TypeScript"],
    img: matrix,
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
  },
  {
    title: "PostTag Dashboard",
    description:
      "An internal dashboard for PostTag to manage their clients data usage.",
    img: posttag,
    pills: ["React", "JavaScript", "Tailwind", "MaterialUI"],
  },
  {
    title: "ScreenDM",
    description:
      "Web platform for film students to share their work and connect with other students and industry professionals.",
    img: screendm,
    pills: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Kurb",
    description:
      "Web application designed to calculate the carbon footprint for projects, on a small scale project-by-project basis",
    pills: ["React", "TypeScript", "Tailwind", "RadixUI"],
    img: kurb,
  },
  {
    title: "Global Tint",
    description:
      "A web application for offering the sale of window tinting products and services.",
    pills: ["React", "JavaScript", "Laravel", "PHP", "CSS"],
    img: globaltint,
  },
];

export default data;
