import React from "react";
import { Link } from "react-router-dom";
import "./results.css";

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

  // const feelingButtonGenerator = feelingList.map((word) => {
  //   return (
  //     <button
  //       key={word}
  //       value={word}
  //       name="feeling"
  //       type="button"
  //       className={`feelings-button home-button ${
  //         feelings.includes(word) ? "feelings-button-selected" : ""
  //       }`}
  //       onClick={handleFeelingClick}
  //     >
  //       {word}
  //     </button>
  //   );
  // });
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
              <h4>I THINK YOU ARE</h4>
              <div className="results-adj-container">{adjectivesMapper}</div>
            </section>
            {/* EMOJI */}
            <section className="results-emojis">
              <h4 className=" neon-minor">I ASSOCIATE YOU WITH</h4>
              <div className="results-emoji-container">{emojisMapper}</div>
            </section>
          </div>

          <div className="results-right">
            {/* FEELINGS */}
            <section className="results-feelings neon-minor">
              <h4>YOU MAKE ME FEEL</h4>
              <div className="results-feel-container">{feelingsMapper}</div>
            </section>
            {/* RESULT TEXT */}
            <section className="results-type neon-minor">
              <h4>MY RESULT FOR YOU IS</h4>
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
            Made for you by {dummyName} at KUDOGEN. What animal represents your
            friends? Generate a compliment at http://www.sitename.com
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
