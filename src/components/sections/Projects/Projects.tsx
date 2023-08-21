import data from "./data";

const ProjectItem = ({ title }) => {
  return <div className="bg-yellow-500">{title}</div>;
};

export default function Projects() {
  return (
    <section className="flex flex-col gap-y-5">
      <div className="flex">
        <h2 className="text-5xl w-full">
          <span className="text-primary mr-2">[3].</span>Other Projects.
        </h2>
      </div>
      <div className="">
        {data.map((project) => {
          return <ProjectItem title={project} />;
        })}
      </div>
    </section>
  );
}
