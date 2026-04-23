import React from "react";
import "./Blogs.css";

const Blogs = () => {
  const blogList = [
    {
      title: "Understanding React Basics",
      desc: "A simple guide to get started with React components and state.",
      date: "Jan 2026",
    },
    {
      title: "CSS Tips for Beginners",
      desc: "Improve your UI with modern CSS tricks and layouts.",
      date: "Feb 2026",
    },
    {
      title: "JavaScript Essentials",
      desc: "Core JS concepts every developer should know.",
      date: "Mar 2026",
    },
  ];

  return (
    <section id="blogs" className="blogs">
      <h2>
        My <span>Blogs</span>
      </h2>

      <div className="blog-grid">
        {blogList.map((blog, index) => (
          <div className="blog-card" key={index}>
            <h3>{blog.title}</h3>
            <p>{blog.desc}</p>
            <span>{blog.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;