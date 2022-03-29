import React from "react";
import Project from "./Project";
import "./Projects.scss";

const Projects = () => {
  return (
    <section className="myProjects">
      <div className="projects-title">My Projects</div>
      <div className="projects">
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

export default Projects;
