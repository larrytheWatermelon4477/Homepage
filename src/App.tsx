import "./App.scss";

import { HashRouter, Link, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";

function App() {
  return (
    <HashRouter>
      <nav className="site-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}

export default App;