import Landing from "../components/sections/Landing";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import FeaturedProjects from "../components/sections/FeaturedProjects/FeaturedProjects";
import Projects from "../components/sections/Projects/Projects";
import Navbar from "../components/navbar/navbar";

export default function Main() {
  return (
    <>
      <Navbar />
      <section className="max-w-5xl mx-auto flex flex-col gap-y-32 px-12">
        <Landing />
        <About />
        <Experience />
        <FeaturedProjects />
        <Projects />
      </section>
    </>
  );
}
