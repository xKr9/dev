import { motion } from "framer-motion";

export default function Landing() {
  return (
    <motion.section className="min-h-[90vh] flex justify-center flex-col">
      <motion.h1
        initial={{
          opacity: 0,
          translateY: "-20px",
        }}
        animate={{
          opacity: 1,
          translateY: "0",
        }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        className="text-6xl text-white lg:text-8xl font-bold"
      >
        Dominik Grad.
      </motion.h1>
      <motion.h2
        initial={{
          opacity: 0,
          translateY: "-20px",
        }}
        animate={{
          opacity: 1,
          translateY: "0",
        }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        className="mt-2 text-3xl lg:text-5xl text-app-accent"
      >
        I like to build cool shit for the web.
      </motion.h2>
      <motion.p
        initial={{
          opacity: 0,
          translateY: "-20px",
        }}
        animate={{
          opacity: 1,
          translateY: "0",
        }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
        className="mt-2 text-app-accent max-w-[500px] md:max-w-[650px]"
      >
        Welcome! I'm a Software Engineer that likes to build cool shit that
        makes a difference to people. Currently the Co-Head of Tech{" "}
        <span className="text-app-primary font-semibold">
          @HatlessStudios 🎩
        </span>
        .
      </motion.p>
    </motion.section>
  );
}
