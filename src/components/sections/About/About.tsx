import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.section
      id="about"
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
      className="flex flex-col gap-y-5 isolate relative pb-40"
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={0}
            id="1d4240dd-898f-445f-932d-e2872fd12de3"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={0} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <h2 className="text-3xl lg:text-5xl">
        <span className="text-app-primary mr-2">[0].</span>About Me.
      </h2>
      <motion.div
        style={{
          width: inView ? "75%" : "0%",
          opacity: inView ? 1 : 0,
          transition: "all 1.5s",
        }}
        ref={ref}
        className="h-1 bg-app-primary"
      ></motion.div>

      <div className="text-app-accent flex flex-col gap-y-5">
        <p>
          Hey there! I'm a Software Engineer who graduated from the University
          of Exeter, juggling a full-time software engineering role throughout
          my studies. Now, I'm a digital nomad, coding my way around the world,
          making connections, and constantly learning. When I'm not diving into
          code, you might catch me training calisthenics or trying out new
          recipes!
        </p>
        <p>
          I’m passionate about freelancing, building dynamic websites and web
          apps, and always on the lookout for new opportunities. If you’d like
          to chat—whether about tech or your latest passion—let’s grab a coffee!
          ☕️
        </p>
      </div>
    </motion.section>
  );
}
