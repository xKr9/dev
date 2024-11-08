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
import markers from "../../../assets/imgs/POSTTAG_MARKERS.jpg";

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
      "Websockets",
    ],
    features: [
      "Room booking feature that lets users reserve multiple linked rooms, making it ideal for events needing adjacent spaces. Rooms can be connected in clusters (like A to B, and B to C), with an algorithm I designed to prevent gaps in linked bookings, ensuring a smooth experience for users. The feature also integrates smoothly with platforms like Google and Outlook, allowing users to sync their bookings across their preferred calendar services.",
      "Worked on the support ticket system allowing users to report issues on the platform.",
    ],
    img: clearooms,
  },
  {
    title: "Highway marker locator",
    description:
      "A web application to pinpoint highway markers on a map to accurately locate them for maintenance.",
    features: [
      "Integrated Google Maps API to display a map with highway markers, allowing users to pinpoint the exact location of each marker.",
      "Developed a feature that enables users to add new markers to the map, making it easy to update the database with new information.",
      "Review system that allows users to rate the accuracy of the marker locations, helping to maintain the database's quality.",
      "UI to allow users to search for markers by name or location, making it easy to find specific highways to update.",
    ],
    pills: [
      "React",
      "TypeScript",
      "Tailwind",
      "Google Maps API",
      "HTML",
      "CSS",
    ],
    img: markers,
  },

  {
    title: "Primary Languages Network",
    description:
      "A space-themed language learning platform that makes learning fun and interactive! Teachers are able to set weekly games and challenges for their students in which the students can practise their writing, listening and reading skills.",
    img: pln,
    features: [
      "Weekly languages games of writing, listening and reading",
      "Badge achievement system that motivates students to progress in specific categories, such as animals or food. As they master new content, they earn badges in bronze, silver, and gold levels in which they can be previewed in their profile.",
      "Ccomprehensive teacher dashboard that offers full control over the student experience. Teachers can set weekly games, manage student and class information, preview games to ensure alignment with learning goals, and perform bulk actions like adding students or exporting data.",
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
      "Booking process from the users ability to create a request for a booking, to the admin's ability to manage the request, to the user's ability to confirm the booking.",
      "User dashboard where users can manage their bookings, view their invoices, and update their profile.",
      "Mobile optimisation efforts to ensure a seamless user experience on all devices.",
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
      "Collaborated with the design team to create a visually appealing and user-friendly website that aligns with the company's brand identity.",
    ],
    img: hat,
  },
  {
    title: "Pragma Holis",
    description:
      "A web application for businesses to generate an overview of their strengths and weaknesses.",
    features: [
      "Integrating the typeform API to allow users to fill out a questionnaire to generate a report.",
      "Comprehensive admin dashboard that offers full control over the user experience. Admins can view and manage user information, preview reports to ensure alignment with business goals, and perform bulk actions like adding users or exporting data.",
      "Report generation system that allows users to generate a report based on their questionnaire answers.",
    ],
    pills: [
      "React",
      "TypeScript",
      "Tailwind",
      "HTML2Canvas",
      "JSPDF",
      "Typeform",
    ],
    img: pragma,
  },
  {
    title: "Case Management Platform",
    description:
      "Platform for simplifying the home-buying process by conducting comprehensive checks on land registry, water company data, hazards, and more.",
    features: ["Extensive assessment report that evaluates"],
    pills: [
      "React",
      "Tailwind",
      "Django",
      "React Query",
      "TypeScript",
      "Django Rest Framework",
      "HTML",
      "CSS",
    ],
    img: matrix,
  },
  {
    title: "Quidland",
    description:
      "Decentralised web application allowing service providers to offer their services and customers to book them by registering e-wallets.",
    img: quidland,
    features: [
      "Secure e-wallet system that allows users to deposit, withdraw, and transfer funds.",
      "Integrated MangoPay API to facilitate secure transactions between users and service providers.",
      "Designed and implemented a user-friendly interface that simplifies the booking process, making it easy for customers to find and book services.",
      "Data visualization feature that provides service providers with insights into their earnings, bookings, and service popularity breakdown.",
    ],
    pills: [
      "React",
      "JavaScript",
      "Laravel",
      "Tailwind",
      "PHP",
      "Laravel",
      "MangoPay",
      "Web 3",
      "Decentralised Web",
    ],
  },
  {
    title: "PostTag PAYG Dashboard",
    description:
      "An internal dashboard for PostTag clients to manage their data usage and spending.",
    img: posttag,
    features: [
      "Integrated PAYG transactions to allow users to register and make payments on the platform.",
      "Data visualisation feature that provides users with insights into their data usage, spending, and account balance.",
      "Invoice generation based on PAYG transactions, allowing users to download and print their invoices.",
      "Admin specific features to allow for referal management, user management and credit management.",
    ],
    pills: [
      "React",
      "JavaScript",
      "Tailwind",
      "MaterialUI",
      "TypeScript",
      "PAYG",
      "3rd Party API",
      "HTML",
      "CSS",
      "ReCharts",
      "Data Visualisation",
    ],
  },
  {
    title: "PostTag Dashboard",
    description: "An internal dashboard for PostTag to manage their clients.",
    img: posttag,
    features: [
      "Dashbaord that provides data visualisation statistics on API usage, data usage, and more.",
    ],
    pills: ["React", "JavaScript", "Tailwind", "MaterialUI"],
  },
  {
    title: "Student Art Platform",
    description:
      "Web platform for film students to share their work and connect with other students and industry professionals.",
    features: [
      "Collaborated with desginers to develop a proof of concept for the platform, which was used to secure funding for the project.",
    ],
    img: screendm,
    pills: ["React", "TypeScript", "Tailwind", "Firebase", "HTML", "CSS"],
  },
  {
    title: "Carbon Footprint Calculator",
    description:
      "Web application designed to calculate the carbon footprint for projects, on a small scale project-by-project basis",
    pills: ["React", "TypeScript", "Tailwind", "RadixUI"],
    features: [
      "Multi-step form that guides users through the process of calculating their carbon footprint.",
      "Integrated dynamic selection that weighs different factors depending on the previous selections, ensuring accurate results.",
    ],
    img: kurb,
  },
  {
    title: "Global Tint",
    description:
      "A web application for offering the sale of window tinting products and services.",
    pills: ["React", "JavaScript", "Laravel", "PHP", "CSS"],
    img: globaltint,
  },
  {
    title: "gotLearning",
    description:
      "Student-centered hub for seamless teacher-student communication about classwork and assignments.",
    pills: ["Vue", "JavaScript", "Django", "Python"],
    features: [
      "Integrated a calendar feature that allows teachers to schedule and share upcoming events, assignments, and exams with students.",
      "Conversation feature helping students to communicate with teachers and other students about classwork, assignments, and more.",
    ],
    img: gotLearning,
  },
  {
    title: "Ultraleap",
    description:
      "Hand tracking and haptics powers intuitive, touchless gesture control in AR/VR,",
    pills: ["React", "Redux", "TypeScript", "AR", "Ulraleap"],
    features: [
      "Integrated Ultraleap's hand tracking and haptics technology to enable touchless gesture control in AR/VR applications.",
      "Developed a user-friendly survey with the touchless gesture control feature, allowing users to interact with the survey without touching the screen.",
    ],
    img: ultraleap,
  },
  {
    title: "API usage platform",
    description:
      "A web application for offering the sale of window tinting products and services.",
    pills: ["React", "JavaScript", "Material UI"],
    img: taxi,
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
  },
];

export default data;
