import { motion } from "framer-motion";
import CV from "../../assets/DominikGradCV.pdf";

export default function Navbar() {
  return (
    <>
      <motion.nav
        viewport={{ once: true }}
        className="w-full hidden md:flex p-8 justify-end items-center gap-x-10"
      >
        <motion.a
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href="/#about"
          className="hover:text-app-primary duration-300 transition-all"
        >
          <span className="text-app-primary">[0].</span> About
        </motion.a>
        <motion.a
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          href="/#work"
          className="hover:text-app-primary duration-300 transition-all"
        >
          <span className="text-app-primary">[1].</span>Projects
        </motion.a>
        <motion.a
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="/#contact"
          className="hover:text-app-primary duration-300 transition-all"
        >
          <span className="text-app-primary">[2].</span>Contact
        </motion.a>
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
