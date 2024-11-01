import PLN_IMG from "@/assets/imgs/PLN_IMG.png";
import ProjectLayout from "../../../components/layouts/ProjectLayout";
import { motion } from "framer-motion";
import images from "./preview/";
import SkillPills from "@/components/pills/SkillPills";
import { tech, contributions } from "./data";
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
            The Primary Languages Network (PLN) has embarked on an innovative
            endeavor with the creation of the Planet Languages web app—a dynamic
            language learning application tailored for children. This engaging
            platform is meticulously designed to enhance language proficiency
            through a combination of entertaining games that focus on listening,
            reading, and writing skills. Set against a captivating space theme,
            the app transforms language practice into a playful and enjoyable
            experience for young learners. The Planet Languages web app not only
            serves as an educational tool but also strives to instill a love for
            language learning in children by making the process both educational
            and fun.
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
            {images.map((image) => (
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
