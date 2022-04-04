import React from "react";
import Project from "./Project";
import "./Projects.scss";
import { projectsData } from "../data";

const Projects = () => {
  return (
    <section className="myProjects" id="projects">
      <div className="code"> &lt;projects&gt;</div>
      <div className="projects">
        {projectsData.map((data, key) => {
          return <Project data={data} key={key} />
        })}
      </div>
      <div className="code"> &lt;projects&gt;</div>
    </section>
  );
};

export default Projects;
