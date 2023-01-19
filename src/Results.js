import React from "react";
import { Link } from "react-router-dom";
import "./results.css";
// import acorn from "./assets/nature/acorn.png";
// import cactus from "./assets/nature/cactus.png";
import cloud from "./assets/nature/cloud.png";
// import flower from "./assets/nature/flower.png";
// import moon from "./assets/nature/moon.png";
// import mountain from "./assets/nature/mountain.png";
// import pine from "./assets/nature/pine.png";
// import sun from "./assets/nature/sun.png";

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
          <h3 className="results-kudogen">
            <a href="/" className="results-kudogen-link" title="restart">
              KUDOGEN
            </a>
          </h3>
        </div>

        <div className="results-four-sections results-padding">
          <div className="results-left">
            {/* ADJECTIVES */}
            <section className="results-adjectives neon-minor">
              <div className="results-header-space results-header-pair">
                <h4 className="neon-minor">I THINK YOU ARE</h4>
                <hr className="adj-hr"></hr>
              </div>
              <div className="results-adj-container">{adjectivesMapper}</div>
            </section>
            {/* EMOJI */}
            <section className="results-emojis">
              <div className="results-header-space results-header-pair">
                <hr className="emoji-hr"></hr>
                <h4 className="neon-minor">I ASSOCIATE YOU WITH</h4>
              </div>
              <div className="results-emoji-container">{emojisMapper}</div>
            </section>
          </div>

          <div className="ring"></div>
          <img src={cloud} alt={cloud} className="results-img" />

          <div className="results-right">
            {/* FEELINGS */}
            <section className="results-feelings neon-minor">
              <hr className="feel-hr"></hr>
              <h4 className="results-header-space test-2">YOU MAKE ME FEEL</h4>
              <div className="results-feel-container">{feelingsMapper}</div>
            </section>
            {/* RESULT TEXT */}
            <section className="results-type">
              <hr className="results-type-hr"></hr>
              <h4 className="results-header-space neon-minor">
                MY RESULT FOR YOU IS
              </h4>
              <p className="results-type-p">
                SQUID! The squid has spent many years traversing the depths,
                acquiring quirky charm. What has it seen? What will it do next?
                We can only wait and wonder.
              </p>
            </section>
          </div>
        </div>

        <section className="results-image-footer">
          <p>
            Made for you by {dummyName} at KUDOGEN. Generate a compliment for
            someone you know at https://ktpeace.github.io/kudogen/
          </p>
        </section>
      </main>
      <footer>
        <ul className="footer-list">
          <li>
            <Link to="/">Home</Link>
          </li>
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
