import React from "react";
import "./Project.scss";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { Parallax } from "react-scroll-parallax";

const Project = ({ data }) => {
  const listElements = data.stacks.map((stack, key) => {
    return <li key={key}>{stack}</li>;
  });

  return (
    <div className="project">
      <Parallax speed={10} style={{ backdropFilter: "blur(10px)" }}>
        <div className="content">
          <h3 className="title">{data.title}</h3>
          <div className="description">
            <a href={data.demo || data.source} target="_blank" rel="noreferrer">
              <Parallax speed={5}>
                <img src={data.img} alt={data.title} />
              </Parallax>
            </a>
            <p>{data.description}</p>
          </div>
          <ul className="tech" title="tech stack">
            {listElements}
          </ul>
          <div className="links">
            {data.demo && (
              <a href={data.demo} title="demo" target="_blank" rel="noreferrer">
                <FiExternalLink />
              </a>
            )}
            <a
              href={data.source}
              title="source code"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Project;
