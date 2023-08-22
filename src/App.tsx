import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Project from "./pages/Project";
import LeftFooter from "./components/footers/LeftFooter";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <main className="bg-[#0a192f] relative min-h-screen pb-32 font-primary w-full font-default text-white">
      <Navbar />
      <Routes>
        <Route path="/dev/" element={<Main />} />
        <Route path="/dev/projects/:project" element={<Project />} />
        <Route
          path="*"
          element={
            <h1 className="text-5xl flex flex-col h-screen gap-y-5 items-center justify-center">
              Why do you have to ruin the site :(
              <button>
                <a href="/" className="text-primary font-bold">
                  Go back
                </a>
              </button>
            </h1>
          }
        />
      </Routes>
      <LeftFooter />
    </main>
  );
}

export default App;
