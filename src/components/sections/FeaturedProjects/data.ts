import ama from "../../../assets/imgs/AMA_IMG.png";
import pln from "../../../assets/imgs/PLN_IMG.png";
import hat from "../../../assets/imgs/HATLESS_IMG.png";

const data = [
  {
    title: "Primary Languages Network",
    description:
      "A language learning application for children to practice their language listening, reading and writing skills via fun-to-play games, with a space theme.",
    img: pln,
    pills: ["Vue", "Django", "MySQL", "Tailwind", "JavaScript"],
    link: "projects/primary-languages-network",
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
    link: "projects/ama-selections",
  },
  {
    title: "Hatless Website Redesign",
    description:
      "A collaborative project with the internal design team to redesign the Hatless website.",
    pills: ["Vue", "Nuxt", "Tailwind", "Strapi", "JavaScript"],
    img: hat,
    link: "projects/hatless-website",
  },
];

export default data;
