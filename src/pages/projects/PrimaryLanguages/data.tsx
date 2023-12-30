import { SkillPillType } from "@/components/pills/SkillPills";

export const tech: SkillPillType[] = [
  {
    name: "Vue",
    type: "frontend",
  },
  {
    name: "JavaScript",
    type: "frontend",
  },
  {
    name: "Tailwind",
    type: "frontend",
  },
  {
    name: "Python",
    type: "backend",
  },
  {
    name: "Django",
    type: "backend",
  },
  {
    name: "MySQL",
    type: "infra",
  },
  {
    name: "Pinia",
    type: "library",
  },
  {
    name: "Vite",
    type: "misc",
  },
  {
    name: "Vitest",
    type: "testing",
  },
  {
    name: "Vue Test Utils",
    type: "testing",
  },
];

export const overview = "";

export const contributions = [
  {
    title: "Language games - Reading, Writing, Listening",
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
    title: "Teacher classroom view",
    content: (
      <>
        <p className="">
          In the development of the Teacher Classroom View feature, my focus was
          on empowering educators with a comprehensive and user-friendly
          interface to manage their classes effectively. The feature offers a
          range of functionalities aimed at streamlining classroom
          administration, student management, and game oversight.
        </p>
        <br />
        <b className="text-white">Multi-Class Preview Functionality:</b>
        <ul className="!list-disc">
          <li>
            Implemented a feature allowing teachers to preview all the classes
            they are part of, providing a consolidated overview for efficient
            classroom management.
          </li>
          <li>
            Enabled teachers to navigate through different classrooms within
            their school, facilitating quick access to vital information without
            unnecessary editing capabilities.
          </li>
        </ul>
        <br />
        <b className="text-white">Student Management Tools:</b>
        <ul>
          <li>
            Designed and implemented the capability for teachers to add new
            students manually or through CSV uploads, ensuring a streamlined
            process for updating class rosters.
          </li>
          <li>
            Empowered teachers with the ability to edit classroom details,
            including language, name, and individual student information,
            providing flexibility and customization.
          </li>
        </ul>
        <br />
        <b className="text-white">Password Export Feature:</b>
        <ul>
          <li>
            Developed a functionality to export student passwords into a
            printable PDF format. This feature enables teachers to distribute
            login credentials seamlessly, enhancing the onboarding process for
            students.
          </li>
        </ul>
        <br />
        <b className="text-white">Badge Preview:</b>
        <ul>
          <li>
            Integrated a badge preview feature, allowing teachers to preview the
            badges earned by students in a class. This visual representation
            aids teachers in recognizing and celebrating student achievements.
          </li>
        </ul>
        <br />
        <b className="text-white">Game Oversight:</b>
        <ul>
          <li>
            Implemented a comprehensive overview of the current week's games,
            including correct and incorrect answers. This feature equips
            teachers with valuable insights into student performance and
            engagement.
          </li>
          <li>
            Enabled teachers to playtest the games, providing a hands-on
            approach to understanding the student experience and identifying
            areas for improvement.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Game achievement badges",
    content: (
      <>
        <p>
          The Game Achievement Badges feature represents a significant
          enhancement to the educational gaming experience, providing students
          with tangible goals and rewards for their progress. This multifaceted
          feature includes point progression, a comprehensive student profile
          page, engaging badge unlock animations, and insightful badge previews.
        </p>
        <br />
        <b className="text-white">Point Progression System:</b>
        <ul>
          <li>
            Developed a point progression system that tracks students' in-game
            performance and awards points toward earning achievement badges.
          </li>
          <li>
            Created a dynamic algorithm that factors in correct answers, game
            completion, and other metrics to ensure a fair and motivating point
            allocation.
          </li>
        </ul>
        <br />
        <b className="text-white">Student Profile Page:</b>
        <ul>
          <li>
            Designed and implemented a student profile page, offering a
            centralized location for students to view their total points, weekly
            points, and an overview of their badge achievements.
          </li>
          <li>
            Incorporated intuitive visuals and user-friendly navigation to
            enhance the overall user experience.
          </li>
        </ul>
        <br />
        <b className="text-white">Badge Unlock Animations:</b>
        <ul>
          <li>
            Introduced captivating badge unlock animations to celebrate
            students' accomplishments when they first obtain a new badge. This
            feature adds a layer of excitement and positive reinforcement to the
            learning process.
          </li>
        </ul>
        <br />
        <b className="text-white">Badge Preview Functionality:</b>
        <ul>
          <li>
            Implemented a badge preview feature that allows students to view
            both locked and unlocked badges.
          </li>
          <li>
            Included progression indicators for bronze, silver, and gold levels,
            providing students with clear goals and a visual representation of
            their journey toward higher achievements.
          </li>
        </ul>
        <br />
        <b className="text-white">Algorithmic Badge Progression:</b>
        <ul>
          <li>
            Engineered an algorithmic system that calculates the progression
            needed to achieve bronze, silver, and gold levels for each badge.
            This ensures a fair and challenging progression curve, motivating
            students to continually engage with the educational games.
          </li>
        </ul>
      </>
    ),
  },
];
