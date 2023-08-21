import { Link } from "react-router-dom";
import data from "./data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProjectItem = ({
  title,
  img,
  description,
}: {
  title: string;
  img: string;
}) => {
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
    <section className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-5">
          <h2 className="text-5xl w-full">
            <span className="text-primary mr-2">[3].</span>Other Projects.
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3">
          {data.map((project) => {
            return (
              <Link to={`${project.link}`}>
                <ProjectItem title={project.title} img={project.img} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
