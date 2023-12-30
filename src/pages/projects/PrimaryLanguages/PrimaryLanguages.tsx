import PLN_IMG from "@/assets/imgs/PLN_IMG.png";
import ProjectLayout from "../../../components/layouts/ProjectLayout";
import { motion } from "framer-motion";
import images from "./preview/";
import SkillPills from "@/components/pills/SkillPills";
import { tech, contributions, overview } from "./data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PrimaryLanguages() {
  const title = "Primary Languages Network".split("");

  return (
    <ProjectLayout>
      <div className="relative p-4">
        <h1 className="font-bold text-6xl sm:text-8xl md:text-9xl !z-10 px-0">
          {title.map((l, idx) => {
            return (
              <motion.span
                className="!z-10"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.04 * idx,
                }}
              >
                {l}
              </motion.span>
            );
          })}
        </h1>
        <img
          src={PLN_IMG}
          className="w-full absolute object-cover opacity-50 rounded-md top-0 right-0 h-full"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-20">
        <section className="flex flex-col gap-2">
          <h2 className="text-3xl text-white font-semibold flex flex-col gap-3">
            Overview
          </h2>
          <p>
            Primary Languages Network (PLN) have decided to create the Planet
            Languages web app; a language learning application for children to
            practice their language listening, reading and writing skills via
            fun-to-play games, with a space theme.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-3xl text-white font-semibold flex flex-col gap-3">
            Technology
          </h2>
          <SkillPills technology={tech} />
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-3xl text-white font-semibold flex flex-col gap-3">
            Contributions
          </h2>
          <Accordion type="single" collapsible>
            {contributions.map((c) => {
              return (
                <AccordionItem value={c.title} key={c.title}>
                  <AccordionTrigger className="text-white">
                    {c.title}
                  </AccordionTrigger>
                  <AccordionContent>{c.content}</AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-3xl text-white font-semibold flex flex-col gap-3">
            Preview
          </h2>
          <div className="grid lg:grid-cols-3 gap-5">
            {images.map((image, index) => (
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition-all cursor-pointer"
              />
            ))}
          </div>
        </section>
      </div>
    </ProjectLayout>
  );
}
