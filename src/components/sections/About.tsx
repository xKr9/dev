import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section className="flex flex-col gap-y-5">
      <h2 className="text-5xl">
        <span className="text-primary mr-2">[0].</span>About Me.
      </h2>
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
      <p>
        During my first year at university, I had the opportunity to join
        <a
          href="https://www.linkedin.com/company/hatless-studios/"
          target="_blank"
          className="text-primary px-1"
        >
          Hatless Studios
        </a>
        , a student led company that allowed me to build applications for
        clients from all corners of the globe. This experience not only honed my
        technical skills but also ignited my fascination for crafting web apps
        that truly make a difference and have a positive impact on people's
        lives.
      </p>
      <p>
        Taking a step further in my career, I embarked on an industrial
        placement at{" "}
        <a
          href="https://www.linkedin.com/company/coreblue/"
          target="_blank"
          className="text-primary pl-1"
        >
          Coreblue
        </a>
        , where I had the privilege of working alongside immensely talented
        individuals. The exposure to diverse projects and practices during my
        time at Coreblue broadened my perspective and enriched my expertise in
        the field.
      </p>
      <p>
        With newfound knowledge and an insatiable desire to contribute more, I
        returned to Hatless Studios as the Co-Head of Tech, focusing on frontend
        development. In this role, I've incorporated my invaluable experiences
        and insights into the company's endeavors, making it an even more
        awesome and forward-thinking hub for technological innovation.
      </p>
      <p>
        As I continue to evolve in my web development journey, I remain
        committed to creating impactful web experiences and pushing the
        boundaries of what's possible in the ever-evolving digital landscape.
      </p>
    </section>
  );
}
