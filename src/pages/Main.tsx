import Landing from "../components/sections/Landing/Landing";
import About from "../components/sections/About/About";
import Experience from "../components/sections/Experience/Experience";
import FeaturedProjects from "../components/sections/FeaturedProjects/FeaturedProjects";
import Projects from "../components/sections/Projects/Projects";
import Contact from "../components/sections/Contact/Contact";
import LeftFooter from "../components/footers/LeftFooter";
import MainLayout from "../components/layouts/MainLayout";

export default function Main() {
  return (
    <MainLayout>
      <section className="max-w-5xl mx-auto  flex flex-col gap-y-32 px-4 lg:px-12">
        <Landing />
        <About />
        <Experience />
        <FeaturedProjects />
        <Projects />
        <Contact />
      </section>
      <LeftFooter />
    </MainLayout>
  );
}
