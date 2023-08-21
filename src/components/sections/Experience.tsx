import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.section
      initial={{
        opacity: 0,
        translateY: "-20px",
      }}
      whileInView={{
        opacity: 1,
        translateY: "0",
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
      className="flex flex-col gap-y-5"
    >
      <div className="flex">
        <h2 className="text-5xl w-full">
          <span className="text-primary mr-2">[1].</span>Where I've worked.
        </h2>
      </div>
      <motion.div
        style={{
          width: inView ? "75%" : "0%",
          opacity: inView ? 1 : 0,
          transition: "all 1.5s",
        }}
        ref={ref}
        className="h-1 bg-primary"
      ></motion.div>
      <p>
        My journey in the world of technology and web development has been an
        exciting and fulfilling one. It all began when I attended University of
        Exeter, where I laid the foundation for my passion for coding and
        creating innovative web solutions.
      </p>
    </motion.section>
  );
}
