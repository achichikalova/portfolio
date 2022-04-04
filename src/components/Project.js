import React from "react";
import "./Project.scss";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { Parallax } from "react-scroll-parallax";

const Project = ({ data }) => {
  return (
    <div className="project">
      <Parallax speed={10} style={{ backdropFilter: "blur(10px)" }}>
        <div className="content">
          <h3 className="title">{data.title}</h3>
          <div className="description">
            <a href={data.demo || data.source}>
              <Parallax speed={5}>
                <img src={data.img} alt={data.title} />
              </Parallax>
            </a>
            <p>{data.description}</p>
          </div>
          <ul className="tech" title="tech stack">
            {data.stacks.map((stack) => {
              return <li>{stack}</li>;
            })}
          </ul>
          <div className="links">
            {data.demo && (
              <a href={data.demo} title="demo">
                <FiExternalLink />
              </a>
            )}
            <a href={data.source} title="source code">
              <AiFillGithub />
            </a>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Project;
