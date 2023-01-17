//  TO DO
// turn button gen into function that works for both
// change divs to sections

import React from "react";
import "./Home.css";
import pointer from "./assets/pointer.png";
import star from "./assets/star.png";

const Home = () => {
  function handleSubmit() {}

  const adjectives = [
    "giving",
    "friendly",
    "wise",
    "kind",
    "fun",
    "smart",
    "creative",
    "tough",
    "brave",
    "hilarious",
    "warm",
    "playful",
    "responsible",
    "regal",
    "mature",
    "compassionate",
    "moral",
  ];

  const adjectiveButtonGenerator = adjectives.map((word) => {
    return (
      <button value={word} name="adjective" type="button">
        {word}
      </button>
    );
  });

  const feelings = [
    "happy",
    "hopeful",
    "free",
    "supported",
    "loved",
    "respected",
    "confident",
    "capable",
    "charmed",
    "excited",
    "secure",
  ];

  const feelingButtonGenerator = feelings.map((word) => {
    return (
      <button
        value={word}
        name="feeling"
        type="button"
        className="feelings-button"
      >
        {word}
      </button>
    );
  });

  const colors = [
    "FF0066",
    "F1C21B",
    "BAE6FF",
    "08BDBA",
    "B8CD4E",
    "FFD6E8",
    "942323",
    "8C52FF",
    "BF87C8",
    "E9A65E",
  ];

  // svg code from https://www.blobmaker.app/
  const splashGenerator = colors.map((color) => {
    return (
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="color-splash"
      >
        <path
          fill={`#${color}`}
          d="M17.9,-27.6C26.8,-22.2,39.8,-23.2,46.6,-18.4C53.3,-13.5,53.7,-2.9,51.3,6.7C48.9,16.3,43.7,24.9,38.2,35.5C32.7,46.2,26.9,59,18.9,59C10.8,58.9,0.5,46.1,-14.7,44.2C-29.9,42.4,-50.1,51.7,-64.5,48.5C-78.9,45.2,-87.5,29.5,-86.3,14.6C-85.1,-0.4,-74.1,-14.6,-62,-23.1C-50,-31.5,-36.8,-34.2,-26.3,-38.8C-15.8,-43.4,-7.9,-49.8,-1.7,-47.2C4.6,-44.6,9.1,-33,17.9,-27.6Z"
          transform="translate(100 100)"
        />
      </svg>
    );
  });

  const emojis = ["🧳", "🌂", "☂️", "🧵", "🪡", "🪢", "🧶", "👓", "🕶"];

  // 🧳 🌂 ☂️ 🧵 🪡 🪢 🧶 👓 🕶 🥽 🥼 🦺 👔 👕 👖 🧣 🧤 🧥 🧦 👗 👘
  // 🥻 🩴 🩱 🩲 🩳 👙 👚 👛 👜 👝 🎒 👞 👟 🥾 🥿 👠 👡 🩰 👢 👑 👒
  // 🎩 🎓 🧢 ⛑ 🪖 💄 💍 💼

  const EmojiGenerator = ({ emojis }) => {
    return emojis.map((emoji) => {
      return (
        <div className="emoji-div">
          <span className={`emoji ${emoji}`}>{emoji}</span>
        </div>
      );
    });
  };

  return (
    <div>
      <header>
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div>
          <h1>
            <span className="header-k">K</span>udogen
          </h1>
          <h2>generate a unique compliment image for your friends </h2>
          <img src={pointer} alt="arrow" className="pointer" />
          <span className="whomever handwriting">(or whomever!)</span>
        </div>
        <div className="triangle"></div>
      </header>
      <main>
        <p class="get-started handwriting">Let's get started!</p>
        <form>
          <div className="name-set username-set">
            <label htmlFor="username">My name:</label>
            <input type="text" id="username" name="username" maxLength={20} />
          </div>
          <div className="name-set friendname-set">
            <label htmlFor="friendname">Friend's name:</label>
            <input
              type="text"
              id="friendname"
              name="friendname"
              maxLength={20}
            />
          </div>
          <div className="wavy">
            <img src={star} alt="star" className="star star-1" />
            <div className="greeting">
              <p className="greeting-hi">Hi,</p>
              <p className="greeting-name">you!</p>
            </div>
            <img src={star} alt="star" className="star star-2" />
          </div>
          <h3 className="adj-header header-text">
            Now, pick some adjectives to describe your friend:
          </h3>
          <div class="buttons">{adjectiveButtonGenerator}</div>
          <div className="swell-container">
            <p className="swell">Swell!</p>
          </div>
          <section className="colors-section">
            <h3 className="header-text">
              Hmm...which of these colors feels right?
            </h3>
            <div className="color-splashes">{splashGenerator}</div>
            <p className="handwriting gimme">Gimme a new set</p>
          </section>
          <section className="description-container">
            <div className="header-text description-header">
              <label htmlFor="description">
                The following text will appear in your result, so edit it
                however you like:
              </label>
            </div>
            <textarea
              cols="52"
              rows="1"
              name="description"
              id="description"
              placeholder="I'm so proud to have you as a friend!"
              maxLength={60}
            ></textarea>
          </section>
          <section className="feelings-container">
            <h3 className="header-text">
              How does your friend make you <em>feel</em>?
            </h3>
            <div class="buttons feelings-buttons">{feelingButtonGenerator}</div>
          </section>
          <div className="emoji-line">😁🤩🤔🤪🥸🤓🤠🤧</div>
          <h3 className="header-text emoji-header">
            Emoji time! Which of these do you associate with Nathaniel? Pick
            eight (8):
          </h3>
          <div className="emoji-categories">
            <div className="emoji-col-container">
              <h4>Element</h4>
              <div className="emoji-col">
                <EmojiGenerator emojis={emojis} />
              </div>
            </div>
            <div className="emoji-col-container">
              <h4>Activity</h4>
              <div className="emoji-col">
                <EmojiGenerator emojis={emojis} />
              </div>
            </div>
            <div className="emoji-col-container">
              <h4>Food</h4>
              <div className="emoji-col">
                <EmojiGenerator emojis={emojis} />
              </div>
            </div>
            <div className="emoji-col-container">
              <h4>Object</h4>
              <div className="emoji-col">
                <EmojiGenerator emojis={emojis} />
              </div>
            </div>
          </div>
          <div className="wavy wavy-bottom"></div>
          <section className="submit-container">
            <h3 className="handwriting submit-header">
              <span>That's it! Are you ready</span>
              <span>to do this??</span>
            </h3>
            <button
              type="submit"
              className="submit-button"
              onClick={handleSubmit}
            >
              Compliment My Friend
            </button>
          </section>
        </form>
      </main>
      <footer>
        <ul className="footer-list">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Attributions</a>
          </li>
          <li>
            <a href="https://github.com/ktpeace">©️ 2023 KAT PEACE</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
