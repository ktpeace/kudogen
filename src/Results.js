import React, { useRef } from "react";
import { Link } from "react-router-dom";
import * as htmlToImage from "html-to-image";
import { toPng } from "html-to-image";
import ResultSetter from "./ResultSetter";
import { adjectiveList } from "./data/adjectives";
import "./results.css";
import flapjacks from "./assets/breakfast/flapjacks.png";
import egg from "./assets/breakfast/egg.png";
import waffle from "./assets/breakfast/waffle.png";
import tea from "./assets/breakfast/tea.png";
import fries from "./assets/junkfood/fries.png";
import cactus from "./assets/nature/cactus.png";
import cloud from "./assets/nature/cloud.png";
import moon from "./assets/nature/moon.png";
import sun from "./assets/nature/sun.png";
import fortuneCookie from "./assets/nihonshoku/fortune-cookie.png";
import onigiri from "./assets/nihonshoku/onigiri.png";
import ramen from "./assets/nihonshoku/ramen.png";
import takoSan from "./assets/nihonshoku/tako-san.png";
import tamagoyaki from "./assets/nihonshoku/tamagoyaki.png";
import avocado from "./assets/produce/avocado.png";
import mushroom from "./assets/produce/mushroom.png";
import pineapple from "./assets/produce/pineapple.png";
import flan from "./assets/sweets/flan.png";
import macaron from "./assets/sweets/macaron.png";
import cupcake from "./assets/sweets/cupcake.png";
import camera from "./assets/camera.png";

const Results = ({
  formEntries: {
    name,
    friendName,
    adjectives,
    color,
    description,
    feelings,
    emojis,
  },
}) => {
  // friendName = "WWWWWWWWWWWWWW";
  // description =
  //   "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW";

  // First we get the viewport height and multiply it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  // We listen to the resize event
  window.addEventListener("resize", () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  // capture DOM element containing content to become image for downloading, and DOM camera icon for setting download
  const imageRef = useRef(null);
  const cameraRef = useRef(null);

  // when someone clicks camera icon, get screenshot of current view and provoke download of the image
  const onButtonClick = async () => {
    if (imageRef.current === null) return;
    const cam = cameraRef.current;
    if (cam.hasAttribute("download")) {
      cameraRef.current.click();
    } else {
      // exclude camera icon from image
      const filter = (node) => {
        return node.id !== "camera";
      };
      // set href to image data and add download attribute to camera anchor
      toPng(imageRef.current, { cacheBust: true, filter: filter })
        .then((dataUrl) => {
          cam.setAttribute(
            "download",
            `kudogen-result-${friendName.toLowerCase()}.png`
          );
          cam.setAttribute("href", dataUrl);
          console.log(cameraRef.current);
          cameraRef.current.click();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // temporary default values for testing (will either delete or move to original state setters)
  if (!name) name = "me";
  if (!friendName) friendName = "You";
  if (!adjectives) {
    adjectives = [];
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * 40);
      let index2 = Math.floor(Math.random() * 4);
      adjectives.push(adjectiveList[index][index2]);
    }
  }
  if (!color) color = "#fedeff";
  if (!feelings)
    feelings = [
      "spellbound",
      "understood",
      "enlightened",
      "treasured",
      "victorious",
      "recognized",
    ];
  if (!emojis) emojis = ["????", "????", "????", "????", "????", "????", "????", "????"];

  // get which result to show + its description
  const [resultName, resultDesc] = ResultSetter({ adjectives }); // ex: ["fortuneCookie", "FORTUNE COOKIE! You've got a way with words..."]

  // set image based on result
  let image;
  switch (resultName) {
    case "flapjacks":
      image = flapjacks;
      break;
    case "egg":
      image = egg;
      break;
    case "waffle":
      image = waffle;
      break;
    case "tea":
      image = tea;
      break;
    case "fries":
      image = fries;
      break;
    case "cactus":
      image = cactus;
      break;
    case "cloud":
      image = cloud;
      break;
    case "moon":
      image = moon;
      break;
    case "sun":
      image = sun;
      break;
    case "fortuneCookie":
      image = fortuneCookie;
      break;
    case "onigiri":
      image = onigiri;
      break;
    case "ramen":
      image = ramen;
      break;
    case "takoSan":
      image = takoSan;
      break;
    case "tamagoyaki":
      image = tamagoyaki;
      break;
    case "avocado":
      image = avocado;
      break;
    case "mushroom":
      image = mushroom;
      break;
    case "pineapple":
      image = pineapple;
      break;
    case "flan":
      image = flan;
      break;
    case "macaron":
      image = macaron;
      break;
    case "cupcake":
      image = cupcake;
      break;
    default:
      image = cloud;
  }

  const adjectivesMapper = adjectives.map((adj) => {
    return (
      <span
        key={adj}
        className={`results-adj-feeling ${
          adj.length > 13 ? "results-word-long" : undefined
        }`}
        style={{
          color: `${color}`,
          textShadow: `0 0 4px ${color}, 0 0 1px ${color}, 0 0 4px ${color},
    0 0 0px ${color}`,
        }}
      >
        {adj}
      </span>
    );
  });

  const feelingsMapper = feelings.map((feel) => {
    return (
      <span
        key={feel}
        className={`results-adj-feeling ${
          feel.length > 13 ? "results-word-long" : undefined
        }`}
        style={{
          color: `${color}`,
          textShadow: `0 0 4px ${color}, 0 0 1px ${color}, 0 0 4px ${color},
    0 0 0px ${color}`,
        }}
      >
        {feel}
      </span>
    );
  });

  const emojisMapper = emojis.map((emoji) => {
    return (
      <span key={emoji} className="results-emoji">
        {emoji}
      </span>
    );
  });

  return (
    <div className="results-page">
      <main id="results-main" className="results-main" ref={imageRef}>
        {/* Four Rows for Vertical Layout */}
        {/* header
            think / feel
            image
            associate / result
            footer
        */}
        <div className="four-rows">
          {/* Row 1 */}
          <div className="row-1">
            <div className="results-header results-padding">
              <div>
                <h2
                  className={`neon-major results-friendname ${
                    friendName.length > 9
                      ? "results-friendname-long"
                      : undefined
                  }`}
                >
                  {friendName}
                </h2>
                <p
                  className={`neon-minor results-description ${
                    description.length < 35
                      ? "results-desc-short"
                      : "results-desc-long"
                  }`}
                >
                  {description}
                </p>
              </div>
            </div>
            <div className="results-camera-kudogen">
              {/* React says not to do below, but it's OK because href attribute will be set on click */}
              <a
                id="camera"
                onClick={onButtonClick}
                ref={cameraRef}
                className="results-cam-link"
              >
                <img
                  src={camera}
                  alt="save result"
                  className="results-camera"
                  title="save image"
                />
              </a>
              <h3 className="results-kudogen">
                <a
                  href="/kudogen"
                  className="results-kudogen-link"
                  title="restart"
                >
                  KUDOGEN
                </a>
              </h3>
            </div>
          </div>

          {/* Row 2 */}
          <div className="row-2">
            {/* ADJECTIVES */}
            {/* <div className="flex-holder-left"></div> */}
            <section className="results-adjectives neon-minor">
              <div className="results-header-space results-header-pair">
                <h4 className="neon-minor results-think">I THINK YOU ARE</h4>
                {/* <hr className="adj-hr"></hr> */}
              </div>
              <div className="results-adj-container">{adjectivesMapper}</div>
            </section>
            {/* FEELINGS */}
            {/* <div className="flex-holder-right"></div> */}
            <section className="results-feelings neon-minor">
              {/* <hr className="feel-hr"></hr> */}
              <h4 className="results-header-space test-2 results-feel">
                YOU MAKE ME FEEL
              </h4>
              <div className="results-feel-container">{feelingsMapper}</div>
            </section>
          </div>

          {/* Row 3 */}
          <div className="col-mid row-3">
            <div className="ring">
              <img src={image} alt={image} className="results-img" />
            </div>
          </div>

          {/* Row 4 */}
          <div className="row-4">
            {/* EMOJI */}
            <section className="results-emojis">
              <div className="results-header-space results-header-pair">
                {/* <hr className="emoji-hr"></hr> */}
                <h4 className="neon-minor results-associate">
                  I ASSOCIATE YOU WITH
                </h4>
              </div>
              <div className="results-emoji-container">{emojisMapper}</div>
            </section>
            {/* RESULT TEXT */}
            <section className="results-type">
              {/* <hr className="results-type-hr"></hr> */}
              <h4 className="results-header-space neon-minor results-result">
                MY RESULT FOR YOU
              </h4>
              <p
                className="results-type-p neon-minor"
                style={{
                  color: `${color}`,
                  textShadow: `0 0 2px ${color}, 0 0 2px ${color}, 0 0 2px ${color}, 0 0 0px ${color}`,
                }}
              >
                {resultDesc}
              </p>
            </section>
          </div>
        </div>

        {/* Three Columns for Horizontal Layout */}
        <div className="three-cols">
          {/* Left Column */}
          <div className="col-left">
            <div className="results-header results-padding">
              <div>
                <h2
                  className={`neon-major results-friendname ${
                    friendName.length > 9
                      ? "results-friendname-long"
                      : undefined
                  }`}
                >
                  {friendName}
                </h2>
                <p
                  className={`neon-minor results-description ${
                    description.length < 35
                      ? "results-desc-short"
                      : "results-desc-long"
                  }`}
                >
                  {description}
                </p>
              </div>
            </div>
            <div className="results-left">
              {/* ADJECTIVES */}
              {/* <div className="flex-holder-left"></div> */}
              <section className="results-adjectives neon-minor">
                <div className="results-header-space results-header-pair">
                  <h4 className="neon-minor results-think">I THINK YOU ARE</h4>
                  {/* <hr className="adj-hr"></hr> */}
                </div>
                <div className="results-adj-container">{adjectivesMapper}</div>
              </section>
              {/* EMOJI */}
              <section className="results-emojis">
                <div className="results-header-space results-header-pair">
                  {/* <hr className="emoji-hr"></hr> */}
                  <h4 className="neon-minor results-associate">
                    I ASSOCIATE YOU WITH
                  </h4>
                </div>
                <div className="results-emoji-container">{emojisMapper}</div>
              </section>
            </div>
          </div>

          {/* Middle Column */}
          <div className="col-mid">
            <div className="ring">
              <img src={image} alt={image} className="results-img" />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-right">
            <div className="results-camera-kudogen">
              {/* React says not to do below, but it's OK because href attribute will be set on click */}
              <a
                id="camera"
                onClick={onButtonClick}
                ref={cameraRef}
                className="results-cam-link"
              >
                <img
                  src={camera}
                  alt="save result"
                  className="results-camera"
                  title="save image"
                />
              </a>
              <h3 className="results-kudogen">
                <a
                  href="/kudogen"
                  className="results-kudogen-link"
                  title="restart"
                >
                  KUDOGEN
                </a>
              </h3>
            </div>
            <div className="results-right">
              {/* FEELINGS */}
              {/* <div className="flex-holder-right"></div> */}
              <section className="results-feelings neon-minor">
                {/* <hr className="feel-hr"></hr> */}
                <h4 className="results-header-space test-2 results-feel">
                  YOU MAKE ME FEEL
                </h4>
                <div className="results-feel-container">{feelingsMapper}</div>
              </section>
              {/* RESULT TEXT */}
              <section className="results-type">
                {/* <hr className="results-type-hr"></hr> */}
                <h4 className="results-header-space neon-minor results-result">
                  MY RESULT FOR YOU
                </h4>
                <p
                  className="results-type-p neon-minor"
                  style={{
                    color: `${color}`,
                    textShadow: `0 0 2px ${color}, 0 0 2px ${color}, 0 0 2px ${color}, 0 0 0px ${color}`,
                  }}
                >
                  {resultDesc}
                </p>
              </section>
            </div>
          </div>
        </div>

        {/* IMAGE FOOTER */}
        <section className="results-image-footer">
          <p>
            Made for you by {name} at KUDOGEN. Generate a compliment for someone
            you know at{" "}
            <a href="/kudogen" className="results-home-ad">
              https://ktpeace.github.io/kudogen/
            </a>
          </p>
        </section>
      </main>

      <section className="snapshot-mobile">
        <h3>On mobile?</h3>
        <p>
          On Android or iPhone, press the power button + volume simultaneously
          to take a screenshot! (Power + home on iPad.)
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        <ul className="footer-list results-footer">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/about">About</Link>
          </li> */}
          <li>
            <Link to="/credits">Credits</Link>
          </li>
          <li>
            <a
              href="https://github.com/ktpeace"
              target="_blank"
              rel="noreferrer"
            >
              ????? 2023 KAT PEACE
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Results;
