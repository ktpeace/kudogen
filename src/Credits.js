import React from "react";
import { Link } from "react-router-dom";
import "./credits.css";

const Credits = () => {
  return (
    <div className="credits-page">
      <header className="credits-header">
        <Link to="/" className="go-home go-homes">
          🏠
        </Link>
        <h1>Credits</h1>
        <div className="flex-jerryrig-home go-homes">🏠</div>
      </header>
      <main>
        <h2>Images</h2>
        <p>here is some text text text</p>
      </main>
      <div className="flex-jerryrig"></div>
      <div className="flex-jerryrig"></div>
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

export default Credits;
