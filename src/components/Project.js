import React from "react";
import "./Project.scss";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { Parallax } from "react-scroll-parallax";

const Project = () => {
  return (
    <div className="project">
      <Parallax speed={10}>
        <div className="content">
          <h3 className="title">My Project</h3>
          <div className="description">
            <a href="#">
              <img
                src="https://github.com/achichikalova/Stacks/blob/main/frontend/public/static/images/readme/main_page.png?raw=true"
                alt="title"
              />
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              architecto. Accusantium obcaecati ipsa voluptates velit.
            </p>
          </div>
          <ul className="tech">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Postgres</li>
          </ul>
          <div className="links">
            <a href="#">
              <FiExternalLink />
            </a>
            <a href="#">
              <AiFillGithub />
            </a>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Project;
