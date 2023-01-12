import React from "react";
import "./Home.css";
import pointer from "./assets/pointer.png";
import star from "./assets/star.png";

const Home = () => {
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
          <span className="whomever">(or whomever!)</span>
        </div>
        <div className="triangle"></div>
      </header>
      <main>
        <p class="get-started">Let's get started!</p>
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
              <p className="greeting-name">WWWWWWWWWWWWWWWWWWWW!</p>
              {/* WWWWWWWWWWWWWWWWWWWWWWWWW */}
            </div>
            <img src={star} alt="star" className="star star-2" />
          </div>
          <h3>Now, pick some adjectives to describe your friend:</h3>
          <div class="buttons">
            <button value="giving" name="adjective" type="button">
              giving
            </button>
            <button value="friendly" name="adjective" type="button">
              friendly
            </button>
            <button value="wise" name="adjective" type="button">
              wise
            </button>
            <button value="kind" name="adjective" type="button">
              kind
            </button>
            <button value="fun" name="adjective" type="button">
              fun
            </button>
            <button value="smart" name="adjective" type="button">
              smart
            </button>
            <button value="creative" name="adjective" type="button">
              creative
            </button>
            <button value="tough" name="adjective" type="button">
              tough
            </button>
            <button value="giving" name="adjective" type="button">
              giving
            </button>
            <button value="friendly" name="adjective" type="button">
              friendly
            </button>
            <button value="wise" name="adjective" type="button">
              wise
            </button>
            <button value="kind" name="adjective" type="button">
              kind
            </button>
            <button value="fun" name="adjective" type="button">
              fun
            </button>
            <button value="smart" name="adjective" type="button">
              smart
            </button>
            <button value="creative" name="adjective" type="button">
              creative
            </button>
            <button value="tough" name="adjective" type="button">
              tough
            </button>
          </div>
          <p>Swell!</p>
          <h3>Hmm...which of these colors feels right?</h3>
          <div className="color-splotches">
            <div class="color-splotch"></div>
            <div class="color-splotch"></div>
            <div class="color-splotch"></div>
            <div class="color-splotch"></div>
            <div class="color-splotch"></div>
            <div class="color-splotch"></div>
            <div class="color-splotch"></div>
            <div class="color-splotch"></div>
            <div class="color-splotch"></div>
            <div class="color-splotch"></div>
            <div class="color-splotch"></div>
          </div>
          <p>Gimme a new set</p>
          <label htmlFor="description">
            The following text will appear in your result, so edit it however
            you like:
          </label>
          <input type="text" name="description" id="description" />
          <h3>
            How does your friend make you <em>feel</em>?
          </h3>
          <div class="buttons">
            <button value="giving" name="adjective" type="button">
              giving
            </button>
            <button value="friendly" name="adjective" type="button">
              friendly
            </button>
            <button value="wise" name="adjective" type="button">
              wise
            </button>
            <button value="kind" name="adjective" type="button">
              kind
            </button>
            <button value="fun" name="adjective" type="button">
              fun
            </button>
            <button value="smart" name="adjective" type="button">
              smart
            </button>
            <button value="creative" name="adjective" type="button">
              creative
            </button>
            <button value="tough" name="adjective" type="button">
              tough
            </button>
            <button value="giving" name="adjective" type="button">
              giving
            </button>
            <button value="friendly" name="adjective" type="button">
              friendly
            </button>
            <button value="wise" name="adjective" type="button">
              wise
            </button>
            <button value="kind" name="adjective" type="button">
              kind
            </button>
            <button value="fun" name="adjective" type="button">
              fun
            </button>
            <button value="smart" name="adjective" type="button">
              smart
            </button>
            <button value="creative" name="adjective" type="button">
              creative
            </button>
            <button value="tough" name="adjective" type="button">
              tough
            </button>
          </div>
          <div>😁🤩🤔🤪🥸🤓🤠🤧</div>
          <h3>
            Emoji time! Which of these do you associate with Nathaniel? Pick 4
            total:
          </h3>
          <h4>Element</h4>
          <h4>Activity</h4>
          <h4>Food</h4>
          <h4>Object</h4>
          <p>That's it! Are you ready to do this??</p>
          <button type="submit">Compliment My Friend</button>
        </form>
      </main>
    </div>
  );
};

export default Home;
