import React from "react";
import Project from "./Project";
import "./Projects.scss";

const Projects = () => {
  return (
    <section className="myProjects">
      <div className="code"> &lt;projects&gt;</div>
      <div className="projects">
        <Project />
        <Project />
        <Project />
      </div>
      <div className="code"> &lt;projects&gt;</div>
    </section>
  );
};

export default Projects;
