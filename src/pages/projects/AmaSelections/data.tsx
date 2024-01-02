import { SkillPillType } from "@/components/pills/SkillPills";

export const tech: SkillPillType[] = [
  {
    name: "React",
    type: "frontend",
  },
  {
    name: "JavaScript",
    type: "frontend",
  },
  {
    name: "NextJS",
    type: "frontend",
  },
  {
    name: "Tailwind",
    type: "frontend",
  },
  {
    name: "PHP",
    type: "backend",
  },
  {
    name: "Laravel",
    type: "backend",
  },
  {
    name: "Stripe",
    type: "library",
  },
  {
    name: "Laravel Cashier",
    type: "library",
  },
  {
    name: "Laravel Socialite",
    type: "library",
  },
  {
    name: "Redis",
    type: "infra",
  },
  {
    name: "PostgreSQL",
    type: "infra",
  },
  {
    name: "GraphQL",
    type: "infra",
  },
  {
    name: "Docker",
    type: "infra",
  },
  {
    name: "GitHub",
    type: "infra",
  },
  {
    name: "GitHub Actions",
    type: "infra",
  },
  {
    name: "AWS",
    type: "infra",
  },
  {
    name: "Sentry",
    type: "infra",
  },
];

export const overview = "";

export const contributions = [
  {
    title: "Client dashboard",
    content: (
      <>
        <p>
          I spearheaded the development of an engaging language learning
          platform, focusing on three interactive games—Reading Rocketship,
          Writing Wormhole, and Lunar Listening. These games were designed to
          foster language acquisition through immersive and entertaining
          experiences.
        </p>
        <br />
        <p>
          In the Reading Rocketship game, students embark on a language journey
          by selecting the correct translation from a set of words presented on
          the screen. Success in choosing the accurate translation propels a
          rocketship upward until it launches into space.
        </p>
        <br />
        <p>
          The Writing Wormhole immerses students in sentence construction. They
          are presented with a sentence to form using a selection of foreign
          words. Students can partially guess, with highlighted portions, and
          are tasked with completing the sentence in the correct order. However,
          partial guesses impact the overall score, encouraging students to
          strive for accuracy.
        </p>
        <br />
        <p>
          The Lunar Listening engages students in auditory language
          comprehension. By clicking on audio files, users listen to clips of
          foreign words and match them to the correct translations. Incorrect
          guesses lead to score deductions, motivating students to refine their
          listening skills.
        </p>
      </>
    ),
  },
  {
    title: "Admin dashboard",
    content: "",
  },
  {
    title: "Design implementation",
    content: (
      <ul className="flex flex-col gap-2">
        <li>
          Collaborated closely with the design team to interpret and execute
          design elements accurately, contributing to the overall aesthetic
          consistency of the platform.
        </li>
        <li>
          Took charge of the mobile development efforts, prioritizing and
          implementing responsive design practices to enhance the site's
          usability on various mobile devices.
        </li>
        <li>
          Conducted thorough testing across different screen sizes and
          resolutions, addressing layout concerns and ensuring a seamless user
          experience for mobile users.
        </li>
        <li>
          Focused on improving the user experience by incorporating design
          elements and interactions that resonate well with mobile users.
        </li>
      </ul>
    ),
  },
  {
    title: "Client booking flow",
    content: (
      <ul className="!list-disc flex flex-col gap-2">
        <li>
          Pioneered the development of a robust booking flow generation tool for
          administrators. This tool empowers admins to create customized booking
          flows tailored to specific requirements.
        </li>
        <li>
          Implemented a notification system that communicates booking details to
          users via both email and the platform. This feature keeps users
          informed and engaged throughout the booking process.
        </li>
        <li>
          Developed the ability for users to adjust their bookings by adding or
          modifying amenities. This customization feature ensures that users
          have control over their experience, leading to increased satisfaction.
        </li>
        <li>
          Integrated secure payment functionality through Stripe, allowing users
          to finalize their bookings by making purchases directly within the
          platform.
        </li>
      </ul>
    ),
  },
  {
    title: "Admin - Client messaging",
    content: "",
  },
];
