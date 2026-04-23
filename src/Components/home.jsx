import React from "react";
import profileImg from "../assets/Pfp.jpeg";
import "./Home.css";


const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-container">

        {/* LEFT SIDE TEXT */}
        <div className="home-content">
          <h1>
            Hi, I'm <span>Maheen Murtaza</span>
          </h1>
          <h2>Web Developer</h2>
          <p>
            I build modern, responsive, and visually appealing web applications
            using React and latest technologies.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
       {/* RIGHT SIDE IMAGE */}
<div className="home-image">
  <img src={profileImg} alt="Maheen Murtaza" />
</div>
      </div>
    </section>
  );
};

export default Home;