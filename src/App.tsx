import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import Landing from "./components/sections/Landing";
import OtherProjects from "./components/sections/OtherProjects";

function App() {
  return (
    <main className="bg-[#0a192f] min-h-screen w-full font-default text-white">
      <section className="max-w-4xl mx-auto flex flex-col gap-y-32">
        <Landing />
        <About />
        <Experience />
        <FeaturedProjects />
        <OtherProjects />
      </section>
    </main>
  );
}

export default App;
