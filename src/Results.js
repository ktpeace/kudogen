import React from "react";
import { Link } from "react-router-dom";
import "./results.css";

const Results = ({ formEntries }) => {
  const { name, friendName, adjectives, color, description, feelings, emojis } =
    formEntries;
  return (
    <div className="results-page">
      <main>
        <p>
          {friendName} {adjectives} {color} {description} {feelings} {emojis}
        </p>
        Made for you by {name} at KUDOGEN. What animal represents your friends?
        Generate a compliment at http://www.sitename.com
      </main>
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

export default Results;
