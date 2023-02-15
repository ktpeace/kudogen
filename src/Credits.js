import React from "react";
import { Link } from "react-router-dom";
import "./credits.css";

const Credits = () => {
  return (
    <div className="credits-page">
      <header className="credits-header">
        <h1>Credits</h1>
      </header>
      <main>
        {/* <h2>Images</h2> */}
        <section className="credits-links">
          <p className="credits-flaticon">
            <a
              href="https://www.flaticon.com/free-icons/camera"
              title="camera icons"
            >
              Camera icon
            </a>{" "}
            by{" "}
            <a href="https://www.flaticon.com/authors/ilham-fitrotul-hayat">
              Ilham Fitrotul Hayat
            </a>{" "}
            on Flaticon
          </p>
          <div>
            <p className="credits-images">
              Images by{" "}
              <a href="https://www.freepik.com/author/pikisuperstar">
                pikisuperstar
              </a>{" "}
              on Freepik
            </p>
            <ul className="credits-image-ul">
              <li>
                <a href="https://www.freepik.com/free-vector/watercolor-kawaii-nature-character-set_28203887.htm#&position=5&from_view=collections">
                  Nature
                </a>
              </li>
              <li>
                <a href="https://www.freepik.com/free-vector/watercolor-kawaii-japanese-food-set_28203884.htm#page=3&query=watercolor%20cute&position=45&from_view=search&track=sph">
                  Japanese Food
                </a>
              </li>
              <li>
                <a href="https://www.freepik.com/free-vector/watercolor-kawaii-fast-food-set_28203895.htm#&position=8&from_view=collections">
                  Junk Food
                </a>
              </li>
              <li>
                <a href="https://www.freepik.com/free-vector/watercolor-kawaii-dessert-set_28203876.htm#&position=3&from_view=collections">
                  Sweets
                </a>
              </li>
              <li>
                <a href="https://www.freepik.com/free-vector/watercolor-kawaii-food-set_28203880.htm#&position=4&from_view=collections">
                  Produce
                </a>
              </li>
              <li>
                <a href="https://www.freepik.com/free-vector/watercolor-kawaii-food-set_28203892.htm#&position=7&from_view=collections">
                  Breakfast
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <div className="flex-jerryrig"></div>
      <div className="flex-jerryrig"></div>
      <footer className="credits-footer">
        <ul className="footer-list">
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
              ©️ 2023 KAT PEACE
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Credits;
