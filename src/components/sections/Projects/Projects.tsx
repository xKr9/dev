import { Icon } from "@iconify/react/dist/iconify.js";
import data from "./data";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ProjectItem = ({
  title,
  img,
  onSelect,
}: {
  title: string;
  img: string;
  onSelect: ({ title, img }: { title: string; img: string }) => void;
}) => {
  return (
    <div
      onClick={() =>
        onSelect({
          title,
          img,
        })
      }
      className="bg-white relative group aspect-square cursor-pointer"
    >
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
  const [selected, setSelected] = useState<{
    title: string;
    img: string;
  } | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.section
      id="projects"
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
      className="flex flex-col gap-y-5 min-h-screen"
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

        {selected ? (
          <div className="text-white w-full">
            <button
              onClick={() => {
                setSelected(null);
                const section = document.querySelector("#projects");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mb-5 px-8 py-2 border border-app-primary rounded-xl"
            >
              Show all projects
            </button>
            <ProjectPreview title={selected.title} img={selected.img} />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3">
            {data.map((project, idx) => {
              return (
                <motion.div
                  initial={{ opacity: 0, translateY: "20px" }}
                  animate={{ opacity: 1, translateY: "0" }}
                  transition={{ delay: idx * 0.2, duration: 0.25 }}
                >
                  <ProjectItem
                    title={project.title}
                    img={project.img}
                    onSelect={(e) => {
                      setSelected(e);
                      const section = document.querySelector("#projects");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </motion.section>
  );
}

type ProjectType =
  | {
      title: string;
      description: string;
      features: string[];
      pills: string[];
      link: string;
    }
  | undefined;

const ProjectPreview = ({ title, img }: { title: string; img: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const info = data.find((project) => project.title === title) as ProjectType;
  return (
    <>
      <div className="w-full relative flex justify-center items-center">
        {info?.link && (
          <Icon
            icon="line-md:link"
            className="top-2 right-2 text-3xl absolute cursor-pointer text-white z-30"
          />
        )}

        <div className="bg-black inset-0 absolute opacity-20 z-10"></div>
        <motion.h2 className="z-10 hidden gap-5 lg:flex text-6xl absolute">
          {title.split(" ").map((word, idx) => (
            <motion.span
              key={idx}
              transition={{ delay: idx * 0.5 }}
              className="block font-bold"
            >
              {word.split("").map((letter, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, translateY: "20px" }}
                  animate={{ opacity: 1, translateY: "0" }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          ))}
        </motion.h2>
        <motion.img
          initial={{ opacity: 0, translateY: "20px" }}
          animate={{ opacity: 1, translateY: "0" }}
          transition={{ duration: 0.5 }}
          src={img}
          className="h-48 w-full object-cover"
          alt={`${title}-img`}
        />
      </div>
      <section className="flex flex-col gap-3">
        <motion.h2 className="z-10 lg:hidden gap-5 flex sm:text-5xl font-bold text-4xl pt-5 justify-center w-full">
          {title}
        </motion.h2>
        <div className="flex lg:flex-row flex-col mt-5 gap-10">
          <div className="flex flex-col w-full gap-3">
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-3xl">Quick overview</h2>
              <motion.div
                style={{
                  width: inView ? "50%" : "0%",
                  opacity: inView ? 1 : 0,
                  transition: "all 1.5s",
                }}
                ref={ref}
                className="h-1 bg-app-primary"
              ></motion.div>
            </div>

            <p>{info?.description}</p>
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-3xl">Worked on features</h2>
              <motion.div
                style={{
                  width: inView ? "50%" : "0%",
                  opacity: inView ? 1 : 0,
                  transition: "all 1.5s",
                }}
                ref={ref}
                className="h-1 bg-app-primary"
              ></motion.div>
            </div>
            <ul className="flex gap-2 flex-col">
              {info?.features?.map((feature, idx) => {
                return (
                  <li key={idx} className="list-disc">
                    {feature}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex w-1/2 flex-col gap-3">
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-3xl">Tech used</h2>
              <motion.div
                style={{
                  width: inView ? "50%" : "0%",
                  opacity: inView ? 1 : 0,
                  transition: "all 1.5s",
                }}
                ref={ref}
                className="h-1 bg-app-primary"
              ></motion.div>
            </div>
            <div className="flex gap-3 flex-wrap">
              {info?.pills.map((pill, idx) => {
                return (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: idx * 0.15 + 0.5 }}
                    key={idx}
                    className="bg-app-primary text-white px-2 py-1 rounded-full"
                  >
                    {pill}
                  </motion.span>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
