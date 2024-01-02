import ULTRALEAP_IMG from "@/assets/imgs/ULTRALEAP_IMG.jpg";
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

export default function Ultraleap() {
  const title = "Ultraleap".split("");

  return (
    <ProjectLayout>
      <div className="relative p-4 min-h-[300px]">
        <h1 className="font-bold flex items-center h-full text-6xl sm:text-8xl md:text-9xl !z-10 px-0">
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
          src={ULTRALEAP_IMG}
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
            Led the development using Ultraleaps touchfree technology. This
            technology, presented in the form of a flat screen 'kiosk,'
            resembles a touch screen but does not require physical contact.
            Instead, a camera tracks users' hand movements, enabling them to
            click and swipe gestures in mid-air. The initiative allows staff,
            students, and the public to experience and explore the TouchFree
            technology. Users are encouraged to participate in a
            thought-provoking survey provided by the University Sustainability
            Team while interacting with the novel technology. This collaboration
            not only offers an engaging experience for the participants but also
            provides Ultraleap with valuable insights into user interactions and
            behaviors with their technology.
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
            href="https://www.linkedin.com/feed/update/urn:li:activity:7066773456888983552/"
          >
            Visit announcement
          </a>
        </section>
      </div>
    </ProjectLayout>
  );
}
