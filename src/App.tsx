import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import FeaturedProjects from "./components/sections/FeaturedProjects/FeaturedProjects";
import Landing from "./components/sections/Landing";
import Projects from "./components/sections/Projects/Projects";

function App() {
  return (
    <main className="bg-[#0a192f] min-h-screen font-primary w-full font-default text-white">
      <section className="max-w-5xl mx-auto flex flex-col gap-y-32 px-12">
        <Landing />
        <About />
        <Experience />
        <FeaturedProjects />
        <Projects />
      </section>
    </main>
  );
}

export default App;
