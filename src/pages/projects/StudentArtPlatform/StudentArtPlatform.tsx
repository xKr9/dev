import STUDENT_ART_PLATFORM_IMG from "@/assets/imgs/SCREEN_DM.png";
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

export default function StudentArtPlatform() {
  const title = "Student Art Platform".split("");

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
          src={STUDENT_ART_PLATFORM_IMG}
          className="w-full absolute object-cover opacity-50 rounded-md top-0 right-0 h-full"
          alt="student-art-platform"
        />
      </div>

      <div className="flex flex-col gap-20">
        <section className="flex flex-col gap-2">
          <h2 className="text-3xl text-white font-semibold flex flex-col gap-3">
            Overview
          </h2>
          <p>
            I spearheaded the modernization of our internal public-facing
            company website through close collaboration with UI/UX designers. By
            leveraging cutting-edge design principles and technology, we
            transformed the website into a sleek and intuitive platform that
            aligns seamlessly with contemporary standards. Through a
            user-centric approach, we enhanced the overall navigation,
            responsiveness, and visual appeal, ensuring a cohesive and engaging
            experience for both internal stakeholders and the public. Our
            collaborative efforts resulted in an aesthetically pleasing and
            functionally efficient website that reflects the company's
            commitment to innovation and a modern
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

        {/* <section className="flex flex-col gap-2">
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
        </section> */}
      </div>
    </ProjectLayout>
  );
}
