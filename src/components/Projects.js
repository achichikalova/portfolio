import React from "react";
import Project from "./Project";
import "./Projects.scss";
import { projectsData } from "../data";

const Projects = () => {
  const projects = projectsData.map((data, key) => {
    return <Project data={data} key={key} />;
  });

  return (
    <section className="myProjects" id="projects">
      <div className="code"> &lt;projects&gt;</div>
      <div className="projects">{projects}</div>
      <div className="code"> &lt;projects&gt;</div>
    </section>
  );
};

export default Projects;
