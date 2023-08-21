import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Project from "./pages/Project";
import LeftFooter from "./components/footers/LeftFooter";

function App() {
  return (
    <main className="bg-[#0a192f] relative min-h-screen pb-32 font-primary w-full font-default text-white">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects/:project" element={<Project />} />
        <Route
          path="*"
          element={
            <h1 className="text-5xl h-screen  flex items-center justify-center">
              Why do you have to ruin the site :(
            </h1>
          }
        />
      </Routes>
      <LeftFooter />
    </main>
  );
}

export default App;
