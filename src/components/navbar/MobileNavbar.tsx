import { motion } from "framer-motion";

export default function MobileNavbar() {
  return (
    <>
      <motion.nav
        initial={{
          opacity: 0,
          translateX: "100%",
        }}
        animate={{
          opacity: 1,
          translateX: "0%",
        }}
        className="absolute right-0 top-0 bg-yellow-300"
      >
        <div className="flex flex-col gap-y-5 p-8 bg-primary">
          <motion.a
            initial={{ opacity: 0, translateY: "-20px" }}
            animate={{ opacity: 1, translateY: "0" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="text-black">[0].</span> About
          </motion.a>
        </div>
      </motion.nav>
    </>
  );
}
