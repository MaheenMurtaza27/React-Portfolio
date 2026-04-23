import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>
        Contact <span>Me</span>
      </h2>

      <div className="contact-container">

        {/* FORM */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* INFO */}
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>Email: maheensiyal27@gmail.com</p>
          <p>Phone: +92 336 8244951</p>

          <div className="socials">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;