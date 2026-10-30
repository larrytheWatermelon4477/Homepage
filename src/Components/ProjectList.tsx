import React from "react";

interface Project {
  name: string;
  url: string;
}

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  return (
    <main style={{ padding: "0 24px" }}>
      <h2>Projects</h2>

      <ul>
        {projects.map((p) => (
          <li key={p.name}>
            <a href={p.url}>{p.name}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ProjectList;