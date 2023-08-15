import FeatureCard from "../../Card";
import data from "./data";

export default function FeaturedProjects() {
  return (
    <section className="flex flex-col gap-y-5">
      <div className="flex">
        <h2 className="text-5xl w-full">
          <span className="text-primary mr-2">[2].</span>Featured Projects.
        </h2>
      </div>
      {data.map((project, idx) => {
        return (
          <FeatureCard
            img={project.img}
            title={project.title}
            idx={idx}
            pills={project.pills}
            description={project.description}
          />
        );
      })}
    </section>
  );
}
