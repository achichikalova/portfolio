import React from "react";
import "./About.scss";

const About = () => {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const span = numbers.map(num => {
    return (
      <span style={{'--i': num}}></span>
    )
  });
  
  return (
    <section className="about">
      <div className="magic">
        {span}
      </div>
      <div className="content">
        <h2>Antonina Chichikalova</h2>
        <h3><em>React Web Developer</em></h3>
        <p>
          Dedicated, efficient, organized, and driven web developer with
          experience in QA, that will always <em>go above and beyond</em> to complete the
          task. I'm keen to learn more, improve my skills, and contribute to the
          tech industry. <em>Strong leadership</em> with a natural <em>problem-solving </em> 
          mindset. <br />I see <em>problems as opportunities</em>, a chance to learn something
          new. I love to work with people, I'm a great team player who is ready
          to <em>take ownership</em>. I love learning new things, spending time with my
          family, running, hiking, photography.
        </p>
      </div>
    </section>
  );
};

export default About;
