import data from "./data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProjectItem = ({ title, img }: { title: string; img: string }) => {
  return (
    <div className="bg-white relative group aspect-square cursor-pointer">
      <img
        src={img}
        alt=""
        className=" group-hover:blur-sm transition-all duration-200"
      />
      <h2 className="absolute group-hover:scale-100 transition-all duration-200 scale-0 z-10 top-1/2 left-1/2 text-center -translate-x-1/2 text-3xl -translate-y-1/2 font-bold">
        {title}
      </h2>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent h-full w-full opacity-30"></div>
    </div>
  );
};

export default function Projects() {
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
        amount: 0.2,
        once: true,
      }}
      className="flex flex-col gap-y-5"
    >
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-5">
          <h2 className="text-3xl lg:text-5xl">
            <span className="text-app-primary mr-2">[1].</span>Projects I've
            worked on.
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3">
          {data.map((project) => {
            return <ProjectItem title={project.title} img={project.img} />;
          })}
        </div>
      </div>
    </motion.section>
  );
}
