import React from "react";
import "./App.css";

import Header from "./Components/Header";
import ProjectList from "./Components/ProjectList";


function App() {

  const projects = [
    { name: "Lab 2 — D3 Bar Chart", url: "#" },
    { name: "Lab 3 — D3 Interactions", url: "#" },
    { name: "Final Project", url: "#" },
    { name: "FAT32 Filesystem Parser", url: "#" },
  ];

  return (
    <div className="App">
      <Header />
      <ProjectList projects={projects} />
    </div>
  );
}




export default App;