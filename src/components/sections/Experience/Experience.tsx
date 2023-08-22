import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import TileSelector from "./TileSelector";
import DetailsBox from "./DetailsBox";
import data from "./data";

export default function Experience() {
  const [selectedTile, setSelectedTile] = useState(1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.section
      id="experience"
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
      <p className="text-accent">
        My journey in the world of technology and web development has been an
        exciting and fulfilling one. Here are some cool places I've worked at.
      </p>
      <div className="flex sm:flex-row flex-col gap-y-10 gap-x-10">
        <TileSelector
          selected={selectedTile}
          onSelect={(e) => setSelectedTile(e)}
        />
        <DetailsBox
          detail={data?.find((detail) => detail.id === selectedTile) ?? data[0]}
        />
      </div>
    </motion.section>
  );
}
