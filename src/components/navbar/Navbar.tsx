import { motion } from "framer-motion";
import CV from "../../assets/DominikGradCV.pdf";

export default function Navbar() {
  const scrollTo = (selector: string) => {
    const query = document.querySelector(selector);
    query?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <motion.nav
        viewport={{ once: true }}
        className="w-full hidden md:flex p-8 justify-end items-center gap-x-10"
      >
        <motion.button
          onClick={() => scrollTo("#about")}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hover:text-app-primary duration-300 transition-all"
        >
          <span className="text-app-primary">[0].</span> About
        </motion.button>
        <motion.button
          onClick={() => scrollTo("#projects")}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hover:text-app-primary duration-300 transition-all"
        >
          <span className="text-app-primary">[1].</span>Projects
        </motion.button>
        <motion.button
          onClick={() => scrollTo("#contact")}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hover:text-app-primary duration-300 transition-all"
        >
          <span className="text-app-primary">[2].</span>Contact
        </motion.button>
        <motion.a
          download
          href={CV}
          className="border-app-primary transition-all border px-6 hover:bg-app-primary hover:bg-opacity-80 py-2 rounded-xl duration-500"
        >
          Resume
        </motion.a>
      </motion.nav>
    </>
  );
}
