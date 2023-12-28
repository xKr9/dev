import { useParams } from "react-router-dom";
import projects from "./projects/data";

export default function Project() {
  const params = useParams();
  const project = projects.find((project) => project.name === params.project);
  return project?.component;
}
