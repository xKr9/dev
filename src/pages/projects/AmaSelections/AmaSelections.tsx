import AMA_IMG from "@/assets/imgs/AMA_IMG.png";
import ProjectLayout from "../../../components/layouts/ProjectLayout";
import { motion } from "framer-motion";
import SkillPills from "@/components/pills/SkillPills";
import { tech, contributions } from "./data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AmaSelections() {
  const title = "AMA Selections".split("");

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
          src={AMA_IMG}
          className="w-full absolute object-cover opacity-50 rounded-md top-0 right-0 h-full"
          alt="ama-selections"
        />
      </div>

      <div className="flex flex-col gap-20">
        <section className="flex flex-col gap-2">
          <h2 className="text-3xl text-white font-semibold flex flex-col gap-3">
            Overview
          </h2>
          <p>
            A.M.A Selections is a leading luxury holiday villa rental platform
            specializing in curated experiences across France, Italy, and Spain.
            The platform offers an exclusive collection of the top 1% verified
            homes in Europe's most sought-after destinations. With a focus on
            personalization and high-tech solutions, it provides a seamless
            booking experience for discerning travelers.
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

        <section className="flex flex-col gap-5">
          <h2 className="text-3xl text-white font-semibold flex flex-col gap-3">
            Preview
          </h2>
          <a
            className="text-white text-xl lg:text-4xl font-bold px-8 py-4 border text-center"
            target="_blank"
            href="https://amaselections.com/"
          >
            Visit website
          </a>
        </section>
      </div>
    </ProjectLayout>
  );
}
