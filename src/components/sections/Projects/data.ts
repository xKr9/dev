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
      "Optimised core platform functionality by identifying and resolving performance bottlenecks in critical database queries. Refactored frontend architecture to reduce error-prone logic, implementing cleaner component patterns and improving overall reliability and maintainability.",
      "Developed a seamless in-platform support system enabling users to report issues directly. Engineered an email reply integration that allows users to respond to support threads from their inbox, with replies automatically synced and visible on the platform—enhancing user experience and support team efficiency.",
      "Led the development of a customisable public booking widget for organisations, enabling external users to reserve desks and meeting rooms. The widget includes advanced features such as pre-booking flows similar to Ticketmaster, integrated payment handling, and dynamic layout options to suit various branding and use-case requirements.",
    ],
    img: clearooms,
  },
  {
    title: "Highway marker locator",
    description:
      "A web application to pinpoint highway markers on a map to accurately locate them for maintenance.",
    features: [
      "Built a custom web application that visualizes highway intersection data using the Google Maps API. Users can view accurate, real-time map displays with existing marker data, allowing them to visually identify and verify the location of highway points.",
      "Developed an intuitive feature that allows authenticated users to place new markers directly on the map, populating missing intersection data. Each new submission is linked to a live backend API, enabling immediate updates to the central database with minimal friction.",
      "Introduced a user review and rating system for each marker, enabling crowdsourced validation of marker accuracy. This mechanism helps ensure data quality over time by promoting consensus on correct locations and flagging potentially incorrect submissions.",
      "Developed a clean, user-friendly interface that supports searching for markers by name or geographic location. This feature streamlines the data enrichment process by helping users quickly locate and update specific intersections without needing to manually browse the map.",
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
      "Built a suite of writing, listening, and reading-based games that teachers can assign on a weekly basis. These activities are designed to reinforce key vocabulary and grammar topics through engaging, game-like mechanics, helping students develop core language skills in a playful, structured environment.",
      `Designed and implemented a badge-based reward system to incentivise continued learning. Students earn bronze, silver, and gold badges as they progress through themed content areas such as "Animals" or "Food." Badges are visually displayed on student profiles, encouraging friendly competition and ongoing motivation`,
      "Created a comprehensive dashboard empowering teachers with full administrative control. Features include the ability to assign weekly games, manage individual students or entire classes, preview activities to ensure curriculum alignment, and perform time-saving bulk actions such as importing/exporting student data or resetting assignments.",
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
      "Developed a multi-step booking system covering the full lifecycle—from a guest submitting a booking request, to admin review and approval, to final guest confirmation. This process includes dynamic availability checks, messaging integration, and status management, ensuring a clear and reliable experience for both users and staff.",
      "Designed a user-friendly dashboard that enables guests to manage upcoming and past bookings, securely view and download invoices, and update personal details. This feature empowers users with full visibility into their travel plans and simplifies post-booking interactions.",
      "Prioritised mobile responsiveness across the entire platform to deliver a smooth, high-end user experience on all devices. Implemented adaptive layouts, touch-friendly UI components, and performance optimisations to support on-the-go browsing and booking, especially for a luxury market accustomed to premium digital standards.",
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
      "Leveraged the power of Nuxt.js 3 and server-side rendering to enhance SEO performance across key metrics, resulting in higher search engine rankings and a noticeable uptick in organic traffic.",
      "Implemented performance optimisations, SEO best practices, and user-centric design improvements that led to a 57% surge in website traffic. This directly contributed to greater brand visibility and an increase in inbound project leads.",
      "Worked closely with the design team to translate Figma mockups into a clean, modern, and fully responsive interface. Ensured the visual identity was consistent across the site while enhancing usability on both desktop and mobile devices.",
    ],
    img: hat,
  },
  {
    title: "Pragma Holis",
    description:
      "A web application for businesses to generate an overview of their strengths and weaknesses.",
    features: [
      "Integrated the Typeform API to allow users to complete structured questionnaires that feed directly into a custom-built report generation engine. This seamless flow ensures accurate data capture and enhances the user experience with a professional and interactive survey interface.",
      "Engineered a dynamic report creation system that processes user responses and generates visualised insights in real time. Users can export their results as downloadable PDFs or email the report directly from the interface—powered by html2canvas and jsPDF for fast and visually consistent exports.",
      " Built a comprehensive admin panel where administrators can manage user data, preview individual reports for quality assurance, and perform bulk actions such as exporting datasets or adding new users. This enables alignment with internal business goals while streamlining operations.",
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
      "Built a robust e-wallet feature allowing users to deposit, withdraw, and transfer funds seamlessly within the platform. This system ensures transactional integrity while giving users full control over their financial interactions.",
      "Integrated the MangoPay API to handle complex payment scenarios, including escrow, payouts, and multi-party transactions. This enabled secure and compliant payment handling between service providers and customers, with built-in fraud protection and KYC/AML support.",
      "Designed and implemented a clean, responsive user interface that simplifies the service discovery and booking process. Customers can browse offerings, check availability, and confirm bookings with minimal friction—resulting in a smoother user journey and increased conversion rates.",
      "Developed an analytics dashboard offering service providers real-time insights into their performance. Visual breakdowns of earnings, booking trends, and service popularity empower providers to make informed business decisions and optimise their offerings.",
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
      "Built a robust internal dashboard for PostTag clients to manage their Pay-As-You-Go (PAYG) transactions, monitor data usage, and maintain control over spending—designed to provide transparency, automation, and ease of use.",
    img: posttag,
    features: [
      "Implemented a seamless transaction system enabling users to register, top up their accounts, and make PAYG payments directly through the platform. This system ensures secure and efficient management of microtransactions without manual intervention.",
      "Developed dynamic visual dashboards that display key metrics such as API usage, account balance, and historical spending trends. These insights help clients make data-driven decisions and maintain tight control over their usage costs.",
      "Built a feature to generate downloadable, print-ready invoices based on user transactions. Users can easily access and export their billing history for accounting or audit purposes, reducing support overhead.",
      "Implemented advanced admin tools to manage referrals, oversee user accounts, adjust credits, and monitor usage across the platform. These features enable internal teams to operate efficiently and support clients with greater flexibility.",
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
