import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* LEFT TEXT */}
        <div className="about-text">
          <h2>About <span>Me</span></h2>

          <p>
            I am Maheen Murtaza, a passionate Web Developer who loves
            building modern, responsive, and user-friendly web applications.
          </p>

          <p>
            I specialize in React.js, JavaScript, HTML, and CSS. I enjoy
            turning ideas into real-world projects with clean UI and smooth UX.
          </p>

          <p>
            My goal is to become a full-stack developer and build impactful
            digital experiences.
          </p>

          <div className="about-stats">
            <div>
              <h3>10+</h3>
              <p>Projects</p>
            </div>
            <div>
              <h3>1+</h3>
              <p>Years Learning</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>Dedication</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;