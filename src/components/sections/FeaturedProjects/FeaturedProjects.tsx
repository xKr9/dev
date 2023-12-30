import FeatureCard from "./FeaturedCard/FeaturedCard";
import { motion, useInView } from "framer-motion";
import data from "./data";
import { useRef } from "react";

export default function FeaturedProjects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.section
      id="work"
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
      className="flex flex-col gap-y-8"
    >
      <div className="flex flex-col gap-y-5">
        <h2 className="text-3xl lg:text-5xl">
          <span className="text-app-primary mr-2">[2].</span>Featured Projects.
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
      </div>
      <div className="flex flex-col gap-y-5">
        {data.map((project, idx) => {
          return (
            <FeatureCard
              key={project.title}
              img={project.img}
              title={project.title}
              link={`${window.location.pathname}/${project.link}`}
              idx={idx}
              pills={project.pills}
              description={project.description}
            />
          );
        })}
      </div>
    </motion.section>
  );
}
