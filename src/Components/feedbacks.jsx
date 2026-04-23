import React from "react";
import "./Feedbacks.css";

const Feedbacks = () => {
  const feedbackList = [
    {
      name: "John Doe",
      role: "Frontend Developer",
      message:
        "Maheen is a very dedicated developer. Her React skills and UI sense are impressive!",
    },
    {
      name: "Sarah Khan",
      role: "Project Manager",
      message:
        "Great work ethics and attention to detail. Always delivers clean and responsive designs.",
    },
    {
      name: "Ali Ahmed",
      role: "Client",
      message:
        "Very professional work. The website was exactly what I needed and more!",
    },
  ];

  return (
    <section id="feedbacks" className="feedbacks">
      <h2>
        Client <span>Feedbacks</span>
      </h2>

      <div className="feedback-grid">
        {feedbackList.map((item, index) => (
          <div className="feedback-card" key={index}>
            <p className="message">"{item.message}"</p>

            <h3>{item.name}</h3>
            <span>{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedbacks;