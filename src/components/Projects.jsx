import React from "react";
import "../styles/Projects.scss";
import ProjectItem from "./ProjectItem";
import projectData from "../data/projectData";

const Projects = () => {
  const projectItems = projectData
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
    .reverse();

  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        <hr className="divider" />
        {projectItems}
      </div>
    </section>
  );
};

export default Projects;
