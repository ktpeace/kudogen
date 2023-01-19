import React from "react";
import { Link } from "react-router-dom";
import "./results.css";
import acorn from "./assets/nature/acorn.png";
import cactus from "./assets/nature/cactus.png";
import cloud from "./assets/nature/cloud.png";
import flower from "./assets/nature/flower.png";
import moon from "./assets/nature/moon.png";
import mountain from "./assets/nature/mountain.png";
import pine from "./assets/nature/pine.png";
import sun from "./assets/nature/sun.png";

// TODO
// size words conditionally based on length

const Results = ({ formEntries }) => {
  const { name, friendName, adjectives, color, description, feelings, emojis } =
    formEntries;

  const dummyName = "WWWWWWWWWWWWWWWWWWWW";

  const dummyAdjectives = [
    "playful",
    "responsible",
    "regal",
    "mature",
    "compassionate",
    "moral",
  ];

  const dummyFeelings = [
    "respected",
    "confident",
    "capable",
    "charmed",
    "excited",
    "secure",
  ];

  const dummyEmojis = ["🌭", "🌿", "🎉", "👾", "👻", "🦒", "🐍", "🦑"];

  const adjectivesMapper = dummyAdjectives.map((adj) => {
    return <span className="results-adj-feeling results-pink-text">{adj}</span>;
  });

  const feelingsMapper = dummyFeelings.map((feel) => {
    return (
      <span className="results-adj-feeling results-pink-text">{feel}</span>
    );
  });

  const emojisMapper = dummyEmojis.map((emoji) => {
    return <span className="results-emoji">{emoji}</span>;
  });

  return (
    <div className="results-page">
      <main>
        <div className="results-header results-padding">
          <div>
            <h2 className="neon-major results-friendname">
              DOMINIQUE{friendName}
            </h2>
            <p className="neon-minor results-description">{description}</p>
          </div>
          <h3 className="results-kudogen">KUDOGEN</h3>
        </div>

        <div className="results-four-sections results-padding">
          <div className="results-left">
            {/* ADJECTIVES */}
            <section className="results-adjectives neon-minor">
              <h4 className="results-header-space">I THINK YOU ARE</h4>
              <div className="results-adj-container">{adjectivesMapper}</div>
            </section>
            {/* EMOJI */}
            <section className="results-emojis">
              <h4 className="results-header-space neon-minor">
                I ASSOCIATE YOU WITH
              </h4>
              <div className="results-emoji-container">{emojisMapper}</div>
            </section>
          </div>

          <div className="ring"></div>
          <img src={pine} alt={pine} className="results-img" />

          <div className="results-right">
            {/* FEELINGS */}
            <section className="results-feelings neon-minor">
              <h4 className="results-header-space">YOU MAKE ME FEEL</h4>
              <div className="results-feel-container">{feelingsMapper}</div>
            </section>
            {/* RESULT TEXT */}
            <section className="results-type neon-minor">
              <h4 className="results-header-space">MY RESULT FOR YOU IS</h4>
              <p className="results-type-p results-pink-text">
                squid! The squid has spent many years traversing the depths,
                acquiring quirky charm. what has it seen? what will it do next?
                we can only wait and wonder...
              </p>
            </section>
          </div>
        </div>

        <section className="results-image-footer">
          <p>
            Made for you by {dummyName} at KUDOGEN. What result will your
            friends get? Generate a compliment at http://www.sitename.com
          </p>
        </section>
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
