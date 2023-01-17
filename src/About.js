import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <Link to="/" className="go-home go-homes">
          🏠
        </Link>
        <h1>About</h1>
        <div className="flex-jerryrig-home go-homes">🏠</div>
      </header>
      <main></main>
      <footer className="credits-footer">
        <ul className="footer-list">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/credits">Credits</Link>
          </li>
          <li>
            <a href="https://github.com/ktpeace">©️ 2023 KAT PEACE</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default About;
