import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav className="w-full flex p-8 justify-end items-center gap-x-10">
      <motion.a
        initial={{ opacity: 0, translateY: "-20px" }}
        animate={{ opacity: 1, translateY: "0" }}
        transition={{ duration: 0.5, delay: 0.4 }}
        href=""
      >
        <span className="text-primary">[0].</span> About
      </motion.a>

      <motion.a
        initial={{ opacity: 0, translateY: "-20px" }}
        animate={{ opacity: 1, translateY: "0" }}
        transition={{ duration: 0.5, delay: 0.5 }}
        href=""
      >
        <span className="text-primary">[1].</span>Experience
      </motion.a>
      <motion.a
        initial={{ opacity: 0, translateY: "-20px" }}
        animate={{ opacity: 1, translateY: "0" }}
        transition={{ duration: 0.5, delay: 0.6 }}
        href=""
      >
        <span className="text-primary">[2].</span>Work
      </motion.a>
      <motion.a
        initial={{ opacity: 0, translateY: "-20px" }}
        animate={{ opacity: 1, translateY: "0" }}
        transition={{ duration: 0.5, delay: 0.7 }}
        href=""
      >
        <span className="text-primary">[3].</span>Contact
      </motion.a>
      <motion.button className="border-primary border px-6 hover:bg-primary hover:bg-opacity-80 py-2 rounded-xl transition-all">
        Resume
      </motion.button>
    </motion.nav>
  );
}
