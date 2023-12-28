import ProjectLayout from "../../components/layouts/ProjectLayout";

export default function PrimaryLanguages() {
  return (
    <ProjectLayout>
      <h1 className="font-bold text-6xl sm:text-8xl md:text-9xl px-0">
        Primary Languages Network
      </h1>
      <div className="flex flex-col">
        <p>Overview</p>
        <p>Preview</p>
        <p>Technology</p>
        <p>Contributions</p>
      </div>
    </ProjectLayout>
  );
}
