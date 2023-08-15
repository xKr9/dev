import ama from "../../../assets/imgs/AMA_IMG.png";
import matrix from "../../../assets/imgs/MATRIX2_IMG.png";
import pln from "../../../assets/imgs/PLN_IMG.png";
import hat from "../../../assets/imgs/HATLESS_IMG.png";
import quidland from "../../../assets/imgs/QUIDLAND_IMG.png";
import posttag from "../../../assets/imgs/POSTTAG_IMG.png";

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
      "A collaborative project with a designer to redesign the Hatless website.",
    pills: ["Vue", "Nuxt", "Tailwind", "Strapi", "JavaScript"],
    img: hat,
  },
  {
    title: "Matrix Pi",
    description:
      "Simplifies the home-buying process by conducting comprehensive checks on land registry, water company data, hazards, and more.",
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
];

export default data;
