import React from "react";
import { Parallax } from "react-scroll-parallax";
import "./About.scss";
import Animation from "./animation/Animation";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="code"> &lt;about&gt;</div>
      <div className="description">
        <Parallax speed={-5}>
          <p>
            Hi! I'm Antonina and I <em>enjoy</em> creating things that live on the internet. I've been <em>passionate</em> about the tech world from a young age. I started my career as a QA Software tester; this past experience has led me to my <em>true passion</em> - Web Development. I'm completely <em>enamoured</em> with React.js and am excited to work in new technologies as well. I enjoy <em>collaborating</em> with others, and feel that effective communication is the foundation for effective <em>teamwork</em>.
          </p>
        </Parallax>
        <Parallax speed={-10}>
          <Animation />
        </Parallax>
      </div>
      <div className="code"> &lt;/about&gt;</div>
    </section>
  );
};

export default About;
