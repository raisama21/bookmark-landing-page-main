import React from "react";
import heroImg from "../img/illustration-hero.svg";

function HeroComponent() {
  return (
    <>
      <section>
        <div className="hero-section">
          <div className="hero-img">
            <img src={heroImg} />
            {/* <div className="bg-style"></div> */}
          </div>
          <div className="hero-text">
            <h1>A Simple Book Manager</h1>
            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free
            </p>
            <div className="buttons">
              <button className="button-style chrome">Get it on Chrome</button>
              <button className="button-style firefox">
                Get it on Firefox
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroComponent;
