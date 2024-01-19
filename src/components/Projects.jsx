import React from "react";

import "../styles/Projects.scss";
import projectData from "../data/projectData";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        <hr className="divider" />
        {projectData
          .map((project) => {
            return (
              <ProjectItem
                key={project.id}
                title={project.title}
                desc={project.desc}
                icon={project.icon}
                link={project.link}
                tech={project.tech}
                image={project.image}
                placeholder={project.placeholder}
              />
            );
          })
          .reverse()}
      </div>
    </section>
  );
}
