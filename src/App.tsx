import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Project from "./pages/Project";

function App() {
  return (
    <Routes>
      <Route path="/dev/" element={<Main />} />
      <Route path="/dev/projects/:project" element={<Project />} />
      <Route
        path="*"
        element={
          <h1 className="text-5xl flex flex-col h-screen gap-y-5 items-center justify-center">
            Why do you have to ruin the site :(
            <button>
              <a href="/dev/" className="text-primary font-bold">
                Go back
              </a>
            </button>
          </h1>
        }
      />
    </Routes>
  );
}

export default App;
