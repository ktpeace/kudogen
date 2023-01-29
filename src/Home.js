//  TO DO
// turn button gen into function that works for both
// change divs to sections

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import pointer from "./assets/pointer.png";
import star from "./assets/star.png";
import { adjectiveList } from "./data/adjectives";
import { feelingList1, feelingList2 } from "./data/emotions";
import {
  emojiList1a,
  emojiList1b,
  emojiList2a,
  emojiList2b,
  emojiList3a,
  emojiList3b,
  emojiList4a,
  emojiList4b,
} from "./data/emojis";

const adjRandomizer = Object.entries(adjectiveList).map(([key, val], i) => {
  const wordArray = adjectiveList[key];
  const randIndex = Math.floor(Math.random() * 4);
  const word = wordArray[randIndex];
  return word;
});

let feelingRandomizer = [];
for (let i = 0; i < feelingList1.length; i++) {
  let randList = Math.floor(Math.random() * 2);
  randList === 0
    ? feelingRandomizer.push(feelingList1[i])
    : feelingRandomizer.push(feelingList2[i]);
}

const Home = ({ formEntries, setFormEntries }) => {
  const adjectiveMax = 6;
  const feelingsMax = 6;
  const emojiMax = 8;
  const navigate = useNavigate();
  const { name, friendName, adjectives, color, description, feelings, emojis } =
    formEntries;
  const colors1 = [
    "A084DC",
    "C6EBC5",
    "e4b6c4",
    "61B15A",
    "FEDEFF",
    "F7ECDE",
    "e38585",
    "ffd693",
    "B2C8DF",
    "f1e35e",
  ];
  const colors2 = [
    "BBBBBB",
    "CD5D7D",
    "A5F1E9",
    "FFC764",
    "63B7AF",
    "EFA8E4",
    "FFF8A6",
    "EEC1EA",
    "6181f5",
    "E7FBBE",
  ];
  const [colorOptions, setColorOptions] = useState(colors1);

  function handleNameChange(e) {
    setFormEntries({
      ...formEntries,
      name: e.target.value,
    });
  }

  function handleFriendNameChange(e) {
    setFormEntries({
      ...formEntries,
      friendName: e.target.value,
    });
  }

  function handleAdjectiveButtonClick(e) {
    const adj = e.target.value;
    if (adjectives.includes(adj)) {
      setFormEntries((prev) => {
        const adjectives = prev.adjectives.filter((el) => el !== adj);
        return { ...formEntries, adjectives };
      });
    } else {
      adjectives.length < adjectiveMax &&
        setFormEntries({
          ...formEntries,
          adjectives: [...formEntries.adjectives, adj],
        });
    }
  }

  function handleColorClick(e) {
    const thisColor = e.target.attributes.getNamedItem("fill").value;
    setFormEntries({
      ...formEntries,
      color: thisColor,
    });
    console.log(color === thisColor);
    console.log(color);
  }

  function handleGimmeClick(e) {
    setFormEntries({ ...formEntries, color: null });
    if (colorOptions[0] === colors1[0]) {
      setColorOptions(colors2);
    } else {
      setColorOptions(colors1);
    }
  }

  function handleDescriptionChange(e) {
    setFormEntries({
      ...formEntries,
      description: e.target.value,
    });
    console.log(description);
  }

  function handleFeelingClick(e) {
    const feeling = e.target.value;
    if (feelings.includes(feeling)) {
      setFormEntries((prev) => {
        const feelings = prev.feelings.filter((el) => el !== feeling);
        return { ...formEntries, feelings };
      });
    } else {
      feelings.length < feelingsMax &&
        setFormEntries({
          ...formEntries,
          feelings: [...formEntries.feelings, feeling],
        });
    }
  }

  function handleEmojiClick(e) {
    const emoji = e.target.attributes.getNamedItem("value").value;
    if (emojis.includes(emoji)) {
      setFormEntries((prev) => {
        const emojis = prev.emojis.filter((el) => el !== emoji);
        return { ...formEntries, emojis };
      });
    } else {
      emojis.length < emojiMax &&
        setFormEntries({
          ...formEntries,
          emojis: [...formEntries.emojis, emoji],
        });
    }
  }

  function handleSubmit() {
    return navigate("/results");
  }

  const adjectiveButtonGenerator = Object.entries(adjRandomizer).map((word) => {
    return (
      <button
        key={word[0]}
        value={word[1]}
        name="adjective"
        type="button"
        className={`adjective-button home-button ${
          adjectives.includes(word[1]) ? "home-button-selected" : ""
        }`}
        onClick={handleAdjectiveButtonClick}
      >
        {word[1]}
      </button>
    );
  });

  const feelingButtonGenerator = feelingRandomizer.map((word) => {
    return (
      <button
        key={word}
        value={word}
        name="feeling"
        type="button"
        className={`feelings-button home-button ${
          feelings.includes(word) ? "feelings-button-selected" : ""
        }`}
        onClick={handleFeelingClick}
      >
        {word}
      </button>
    );
  });

  // svg code from https://www.blobmaker.app/
  const splashGenerator = colorOptions.map((thisColor) => {
    return (
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="color-splash"
        key={thisColor}
      >
        <path
          fill={`#${thisColor}`}
          d="M17.9,-27.6C26.8,-22.2,39.8,-23.2,46.6,-18.4C53.3,-13.5,53.7,-2.9,51.3,6.7C48.9,16.3,43.7,24.9,38.2,35.5C32.7,46.2,26.9,59,18.9,59C10.8,58.9,0.5,46.1,-14.7,44.2C-29.9,42.4,-50.1,51.7,-64.5,48.5C-78.9,45.2,-87.5,29.5,-86.3,14.6C-85.1,-0.4,-74.1,-14.6,-62,-23.1C-50,-31.5,-36.8,-34.2,-26.3,-38.8C-15.8,-43.4,-7.9,-49.8,-1.7,-47.2C4.6,-44.6,9.1,-33,17.9,-27.6Z"
          transform="translate(100 100)"
          className={`${color === `#${thisColor}` ? "color-selected" : ""}`}
          onClick={handleColorClick}
        />
      </svg>
    );
  });

  const EmojiGenerator = ({ emojiList }) => {
    return emojiList.map((emoji) => {
      return (
        <div
          className={`emoji-div ${
            emojis.includes(emoji) ? "emoji-selected" : ""
          }`}
          key={emoji}
        >
          <span className="emoji" value={emoji} onClick={handleEmojiClick}>
            {emoji}
          </span>
        </div>
      );
    });
  };

  return (
    <div>
      {/* HEADER */}
      <header className="home-header">
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
      {/* GET STARTED */}
      <main className="home-main">
        <p className="get-started handwriting">Let's get started!</p>
        <form>
          <div className="name-set username-set">
            <label htmlFor="username">My name:</label>
            <input
              type="text"
              id="username"
              name="username"
              maxLength={20}
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="name-set friendname-set">
            <label htmlFor="friendname">Friend's name:</label>
            <input
              type="text"
              id="friendname"
              name="friendname"
              maxLength={14}
              value={friendName}
              onChange={handleFriendNameChange}
            />
          </div>
          {/* GREETING */}
          <div className="wavy">
            <img src={star} alt="star" className="star star-1" />
            <div className="greeting">
              <p className="greeting-hi">Hi,</p>
              <p className="greeting-name">{name ? name : "you"}!</p>
            </div>
            <img src={star} alt="star" className="star star-2" />
          </div>
          {/* ADJECTIVES */}
          <h3 className="adj-header header-text">
            Now, pick {adjectiveMax} adjectives to describe{" "}
            {friendName ? friendName : "your friend"}:
          </h3>
          <div className="buttons">{adjectiveButtonGenerator}</div>
          <div className="swell-container">
            <p className="swell">Swell!</p>
          </div>
          {/* COLORS */}
          <section className="colors-section">
            <h3 className="header-text">
              Hmm...which of these colors feels right?
            </h3>
            <div className="color-splashes">{splashGenerator}</div>
            <p className="handwriting gimme" onClick={handleGimmeClick}>
              {colors1[0] === colorOptions[0]
                ? "Gimme a new set"
                : "Previous set"}
            </p>
          </section>
          {/* DESCRIPTION */}
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
              placeholder="So proud to have you as a friend!"
              maxLength={60}
              onChange={handleDescriptionChange}
            ></textarea>
          </section>
          {/* FEELINGS */}
          <section className="feelings-container">
            <h3 className="header-text">
              How does {friendName ? friendName : "your friend"} make you{" "}
              <em>feel</em>? Pick {feelingsMax}:
            </h3>
            <div className="buttons feelings-buttons">
              {feelingButtonGenerator}
            </div>
          </section>
          {/* EMOJI */}
          <div className="emoji-line">😁🤩🤔🤪🥸🤓🤠🤧</div>
          <h3 className="header-text emoji-header">
            Emoji time! Which of these do you most associate with{" "}
            {friendName ? friendName : "your friend"}? Pick {emojiMax}:
          </h3>
          <div className="emoji-categories">
            <div className="emoji-col-container">
              <h4>Elements</h4>
              <div className="emoji-cols">
                <div className="emoji-col">
                  <EmojiGenerator emojiList={emojiList1a} />
                </div>
                <div className="emoji-col">
                  <EmojiGenerator emojiList={emojiList1b} />
                </div>
              </div>
            </div>
            <div className="emoji-col-container">
              <h4>Animals</h4>
              <div className="emoji-cols">
                <div className="emoji-col">
                  <EmojiGenerator emojiList={emojiList2a} />
                </div>
                <div className="emoji-col">
                  <EmojiGenerator emojiList={emojiList2b} />
                </div>
              </div>
            </div>
            <div className="emoji-col-container">
              <h4>Activities</h4>
              <div className="emoji-cols">
                <div className="emoji-col">
                  <EmojiGenerator emojiList={emojiList3a} />
                </div>
                <div className="emoji-col">
                  <EmojiGenerator emojiList={emojiList3b} />
                </div>
              </div>
            </div>
            <div className="emoji-col-container">
              <h4>Interests</h4>
              <div className="emoji-cols">
                <div className="emoji-col">
                  <EmojiGenerator emojiList={emojiList4a} />
                </div>
                <div className="emoji-col">
                  <EmojiGenerator emojiList={emojiList4b} />
                </div>
              </div>
            </div>
          </div>
          {/* SUBMIT */}
          <div className="wavy wavy-bottom"></div>
          <section className="submit-container">
            <h3 className="handwriting submit-header">
              <span>That's it! Are you ready</span>
              <span>to do this??</span>
            </h3>
            {/* {(adjectives.length < 6 ||
              color.length < 1 ||
              description.length < 1 ||
              feelings.length < 6 ||
              emojis.length < 8 ||
              friendName.length < 1) && (
              <p>Please fill in/select all requested fields/amounts!</p>
            )} */}
            <button
              type="submit"
              className="submit-button"
              onClick={handleSubmit}
            >
              Compliment{" "}
              {friendName && friendName.length < 15 ? friendName : "My Friend"}
            </button>
          </section>
        </form>
      </main>
      {/* FOOTER */}
      <footer>
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

export default Home;
