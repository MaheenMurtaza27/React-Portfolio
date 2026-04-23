import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "GitHub", level: 70 },
  ];

  return (
    <section id="skills" className="skills">
      <h2>
        My <span>Skills</span>
      </h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-top">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="bar">
              <div
                className="fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;