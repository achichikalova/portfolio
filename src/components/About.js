import React from "react";
import "./About.scss";
import Animation from "./animation/Animation";

const About = () => {
  return (
    <section className="about">
      <div className="code"> &lt;about&gt;</div>
      <div className="description">
        <p>
          Hi! I'm Antonina and I <em>enjoy</em> creating things that live on the
          internet. From a young age, I was <em>passionate</em> about the tech
          world. I started my career as a QA Software tester and I believe that
          my past experience has led me to my <em>true passion</em> - Web
          Development. I'd say I'm completely <em>enamored</em> with React.js
          and want to work with it. Also, I enjoy <em>collaborating</em> with
          others, and I feel that effective communication is the foundation for
          effective <em>teamwork</em>.
        </p>
        <Animation />
      </div>
      <div className="code"> &lt;/about&gt;</div>
    </section>
  );
};

export default About;
