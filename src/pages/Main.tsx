import Landing from "../components/sections/Landing/Landing";
import About from "../components/sections/About/About";
import Projects from "../components/sections/Projects/Projects";
import Contact from "../components/sections/Contact/Contact";
import LeftFooter from "../components/footers/LeftFooter";
import MainLayout from "../components/layouts/MainLayout";

export default function Main() {
  return (
    <MainLayout>
      <section className="max-w-5xl mx-auto  flex flex-col gap-y-32 px-8 lg:px-12">
        <Landing />
        <About />
        <Projects />
        <Contact />
      </section>
      <LeftFooter />
    </MainLayout>
  );
}
