import React from "react";
import { Link } from "react-router-dom";
import "./results.css";

const Results = ({ formEntries }) => {
  const { name, friendName, adjectives, color, description, feelings, emojis } =
    formEntries;

  function adjectivesMapper() {
    console.log(adjectives);
    // return adjectives.map((adj) => {
    //   return <span className="results-adj">{adj}</span>;
    // });
  }

  function feelingsMapper() {
    // return feelings.map((feel) => {
    //   return <span className="results-feeling">{feel}</span>;
    // });
  }

  return (
    <div className="results-page">
      <main>
        <div className="results-header">
          <div>
            <h2 className="neon-major results-friendname">
              DOMINIQUE{friendName}
            </h2>
            <p className="neon-minor results-description">{description}</p>
          </div>
          <h3 className="results-kudogen">KUDOGEN</h3>
        </div>

        <div className="results-four-sections">
          <div className="results-left">
            <section className="results-adjectives neon-minor">
              <h4>I THINK YOU ARE</h4>
              <div>
                <span className="results-adj">
                  fun quirky cool hilarious compassionate
                </span>
                {adjectivesMapper()}
              </div>
            </section>
            <section className="results-emojis neon-minor">
              <h4>I ASSOCIATE YOU WITH</h4>
              <p>
                <span>🌭🌿🎉👾</span>
                <span>👻🦒🐍🦑</span>
              </p>
            </section>
          </div>

          <div className="results-right">
            <section className="results-feelings neon-minor">
              <h4>YOU MAKE ME FEEL</h4>
              <div>
                <span className="results-feeling">happy</span>
                {feelingsMapper()}
              </div>
            </section>
            <section className="results-type neon-minor">
              <h4>MY RESULT FOR YOU IS</h4>
              <p className="results-type-p">
                squid! The squid has spent many years traversing the depths,
                acquiring quirky charm. what has it seen? what will it do next?
                we can only wait and wonder...
              </p>
            </section>
          </div>
        </div>

        <section className="results-image-footer">
          <p>
            Made for you by {name} at KUDOGEN. What animal represents your
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
