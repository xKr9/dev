import FeatureCard from "./FeaturedCard/FeaturedCard";
import { motion } from "framer-motion";
import data from "./data";

export default function FeaturedProjects() {
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
      className="flex flex-col gap-y-8"
    >
      <div className="flex">
        <h2 className="text-5xl w-full">
          <span className="text-primary mr-2">[2].</span>Featured Projects.
        </h2>
      </div>
      <div className="flex flex-col gap-y-5">
        {data.map((project, idx) => {
          return (
            <FeatureCard
              img={project.img}
              title={project.title}
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
