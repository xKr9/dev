import kurb from "../../../assets/imgs/KURB.png";
import screendm from "../../../assets/imgs/SCREEN_DM.png";
import matrix from "../../../assets/imgs/MATRIX2_IMG.png";
import quidland from "../../../assets/imgs/QUIDLAND_IMG.png";
import posttag from "../../../assets/imgs/POSTTAG_IMG.png";
import globaltint from "../../../assets/imgs/GLOBAL_TINT.png";
import gotLearning from "../../../assets/imgs/GOT_IMG.png";
import taxi from "../../../assets/imgs/TAXI_APP.png";
import ultraleap from "../../../assets/imgs/ULTRALEAP_IMG.jpg";
import beacon from "../../../assets/imgs/BEACON_IMG.jpg";
import clearooms from "../../../assets/imgs/CLEAROOMS_IMG.jpg";
import ama from "../../../assets/imgs/AMA_IMG.png";
import pln from "../../../assets/imgs/PLN_IMG.png";
import hat from "../../../assets/imgs/HATLESS_IMG.png";
import pragma from "../../../assets/imgs/PRAGMA_IMG.jpg";

const data = [
  {
    title: "Clearooms",
    description: "A web application for booking desks and meeting rooms.",
    pills: [
      "Vue",
      "Laravel",
      "Tailwind",
      "PHP",
      "JavaScript",
      "CSS",
      "HTML",
      "AWS",
      "Laravel Herd",
      "PostgreSQL",
      "GitHub Actions",
      "Grafana",
      "Prometheus",
      "S3",
      "SES",
      "Google Calendar API",
      "Outlook Calendar API",
    ],
    features: [
      "Developed a seamless room booking feature that lets users reserve multiple linked rooms, making it ideal for events needing adjacent spaces. Rooms can be connected in clusters (like A to B, and B to C), with an algorithm I designed to prevent gaps in linked bookings, ensuring a smooth experience for users. The feature also integrates smoothly with platforms like Google and Outlook, allowing users to sync their bookings across their preferred calendar services.",
      "Worked on the support ticket system allowing users to report issues on the platform.",
    ],
    img: clearooms,
  },
  {
    title: "Pragma Holis",
    description:
      "A web application for businesses to generate an overview of their strengths and weaknesses.",
    features: [
      "Integrated typeform API to allow users to fill out a questionnaire to generate a report.",
      "Developed a comprehensive admin dashboard that offers full control over the user experience. Admins can view and manage user information, preview reports to ensure alignment with business goals, and perform bulk actions like adding users or exporting data.",
      "Developed a report generation system that allows users to generate a report based on their questionnaire answers.",
    ],
    pills: [
      "React",
      "TypeScript",
      "Tailwind",
      "HTML2Canvas",
      "JSPDF",
      "API",
      "Typeform",
    ],
    img: pragma,
  },
  {
    title: "Primary Languages Network",
    description:
      "A space-themed language learning platform that makes learning fun and interactive! Teachers are able to set weekly games and challenges for their students in which the students can practise their writing, listening and reading skills.",
    img: pln,
    features: [
      "Weekly languages games of writing, listening and reading",
      "Badge achievement system that motivates students to progress in specific categories, such as animals or food. As they master new content, they earn badges in bronze, silver, and gold levels in which they can be previewed in their profile.",
      "Developed a comprehensive teacher dashboard that offers full control over the student experience. Teachers can set weekly games, manage student and class information, preview games to ensure alignment with learning goals, and perform bulk actions like adding students or exporting data.",
    ],
    pills: [
      "Vue",
      "Django",
      "MySQL",
      "Tailwind",
      "JavaScript",
      "CSS",
      "HTML",
      "Python",
      "Django Rest Framework",
    ],
  },
  {
    title: "A.M.A Selections",
    description:
      "Luxurious holiday booking application offering a wide range of privately owned luxuary villas in Europe.",
    features: [
      "Developed the booking process from the users ability to create a request for a booking, to the admin's ability to manage the request, to the user's ability to confirm the booking.",
      "Developed the user dashboard where users can manage their bookings, view their invoices, and update their profile.",
    ],
    pills: [
      "React",
      "JavaScript",
      "NextJS",
      "Tailwind",
      "PHP",
      "Laravel",
      "PostgreSQL",
      "GraphQL",
      "Github Actions",
    ],
    img: ama,
  },
  {
    title: "Hatless Website Redesign",
    description:
      "A collaborative project with the internal design team to redesign the Hatless website.",
    pills: [
      "Vue",
      "Nuxt",
      "Tailwind",
      "Strapi",
      "JavaScript",
      "HTML",
      "CSS",
      "Figma",
    ],
    features: [
      "Improved SEO performance by over 12% acrossall metrics by leveraging Nuxt.js 3, leading to higher search engine rankings and increased organic traffic.",
      "Successfully boosted website traffic by 57%, elevating the company's online visibility and generating more project opportunities.",
    ],
    img: hat,
  },
  {
    title: "Case Management Platform",
    description:
      "Platform for simplifying the home-buying process by conducting comprehensive checks on land registry, water company data, hazards, and more.",
    pills: ["React", "Tailwind", "Django", "React Query", "TypeScript"],
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
    title: "Analytics Dashboard",
    description:
      "An internal dashboard for PostTag to manage their clients data usage.",
    img: posttag,
    pills: ["React", "JavaScript", "Tailwind", "MaterialUI"],
    link: "/projects/posttag-dashboard",
  },
  {
    title: "Student Art Platform",
    description:
      "Web platform for film students to share their work and connect with other students and industry professionals.",
    img: screendm,
    pills: ["React", "TypeScript", "Tailwind"],
    link: "/projects/student-art-platform",
  },
  {
    title: "Carbon Footprint Calculator",
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
  {
    title: "gotLearning",
    description:
      "Student-centered hub for seamless teacher-student communication about learning",
    pills: ["Vue", "JavaScript", "Django", "Python"],
    img: gotLearning,
    link: "/projects/global-tint",
  },
  {
    title: "Ultraleap",
    description:
      "Hand tracking and haptics powers intuitive, touchless gesture control in AR/VR,",
    pills: ["React", "Redux", "TypeScript", "AR"],
    img: ultraleap,
    link: "/projects/ultraleap",
  },
  {
    title: "API usage platform",
    description:
      "A web application for offering the sale of window tinting products and services.",
    pills: ["React", "JavaScript", "Material UI"],
    img: taxi,
    link: "/projects/global-tint",
  },
  {
    title: "Student support platform",
    description:
      "A web application for offering the sale of window tinting products and services.",
    pills: [
      "React",
      "TypeScript",
      "Tailwind",
      "PrimeReact",
      "Django",
      "Python",
    ],
    img: beacon,
    link: "/projects/beacon-pathway",
  },
];

export default data;
