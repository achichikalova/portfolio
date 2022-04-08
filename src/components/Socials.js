import React from "react";
import "./Socials.scss";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

const Socials = () => {
  return (
    <div className="socials">
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            href="https://github.com/achichikalova"
          >
            <FiGithub className="icon" title="GitHub" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/achichikalova"
          >
            <FiLinkedin className="icon" title="LinkedIn" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
            href="mailto:tonia.chichikalova@gmail.com"
          >
            <FiMail className="icon" title="Email Me" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
