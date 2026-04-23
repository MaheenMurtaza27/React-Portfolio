import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="logo">Maheen Murtaza</div>

      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        {[
          "home",
          "about",
          "projects",
          "skills",
          "feedbacks",
          "blogs",
          "contact",
        ].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={active === item ? "active-link" : ""}
            onClick={() => {
              setActive(item);
              setMenuOpen(false);
            }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </nav>

      <div className="menu-toggle" onClick={toggleMenu}>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
      </div>
    </header>
  );
};

export default Header;