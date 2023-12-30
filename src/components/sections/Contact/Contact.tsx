import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.section
      id="contact"
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
        amount: 0.7,
        once: true,
      }}
      className="flex flex-col gap-y-5"
    >
      <div className="flex">
        <h2 className="text-3xl lg:text-5xl">
          <span className="text-app-primary mr-2">[4].</span>Get in touch
        </h2>
      </div>
      <motion.div
        style={{
          width: inView ? "75%" : "0%",
          opacity: inView ? 1 : 0,
          transition: "all 1.5s",
        }}
        ref={ref}
        className="h-1 bg-app-primary"
      ></motion.div>
      <div className="flex py-16 lg:py-32 flex-col items-center justify-center text-center gap-y-8">
        <h1 className="font-bold text-3xl sm:text-6xl">Want to chat?</h1>
        <p className="flex flex-col text-app-accent max-w-[500px]">
          Want to reach out? Whether you've got a burning question, a brilliant
          idea, or just want to say hi, I'm all ears!
        </p>
        <a
          href="mailto:dominikgrad47@gmail.com"
          className="border-app-primary border px-10 hover:bg-app-primary hover:bg-opacity-80 py-3 rounded-xl transition-all"
        >
          Get in touch :)
        </a>
      </div>
    </motion.section>
  );
}
