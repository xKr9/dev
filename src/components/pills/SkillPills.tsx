import _ from "lodash";
import { useState } from "react";

export const TechnologyType = {
  frontend: "frontend",
  backend: "backend",
  testing: "testing",
  infra: "infra",
  library: "library",
  misc: "misc",
} as const;

export type SkillPillsProps = {
  technology: SkillPillType[];
};

export type SkillPillType = {
  name: string;
  type: keyof typeof TechnologyType;
};

const techTypeColour = (type: string) => {
  if (type === "backend") return "bg-red-500";
  if (type === "frontend") return "bg-green-500";
  if (type === "infra") return "bg-blue-500";
  if (type === "testing") return "bg-pink-500";
  if (type === "misc") return "bg-yellow-500";
  if (type === "library") return "bg-purple-500";
};

export default function SkillPills({ technology }: SkillPillsProps) {
  const [selectedSkills] = useState(
    Object.entries(_.groupBy(technology, "type"))
  );

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-2">
        {selectedSkills
          .map((s) => s[0])
          .map((s) => {
            return (
              <div key={s} className="flex h-full gap-2 items-center">
                <div
                  className={`${techTypeColour(
                    s
                  )} rounded-lg p-2 px-3 text-white`}
                ></div>
                <span className="text-white">{s}</span>
              </div>
            );
          })}
      </div>
      <div className="flex flex-wrap gap-4">
        {selectedSkills.map((t) =>
          t[1].map((skill) => (
            <Pill name={skill.name} type={skill.type} key={skill.name} />
          ))
        )}
      </div>
    </div>
  );
}

const Pill = ({ name, type }: { name: string; type: string }) => {
  return (
    <div
      className={`px-8 hover:scale-110 transition-all text-white rounded-full py-2 ${techTypeColour(
        type
      )}`}
    >
      {name}
    </div>
  );
};
