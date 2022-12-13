import React from "react";
import ChromeLogo from "../img/logo-chrome.svg";
import FirefoxLogo from "../img/logo-firefox.svg";
import OperaLogo from "../img/logo-opera.svg";

function DownloadComponent() {
  return (
    <>
      <section>
        <div className="extension-section">
          <div className="extension-text">
            <h2>Download the extension</h2>
            <p>
              We've git more browsers in the popeline. Please do let us know if
              you've got a favourite you'd like us to prioritize
            </p>
          </div>

          <div className="browser-extension-cards">
            <div className="browser-card">
              <img src={ChromeLogo} alt="#" />
              <div className="browser-card-text">
                <h4>Add to Chrome</h4>
                <p>Minimum version 62</p>
              </div>
              <div className="dotted-border"></div>
              <button className="button-style install-btn">
                Add & Install Extension
              </button>
            </div>

            <div className="browser-card">
              <img src={FirefoxLogo} alt="#" />
              <div className="browser-card-text">
                <h4>Add to Chrome</h4>
                <p>Minimum version 55</p>
              </div>
              <div className="dotted-border"></div>
              <button className="button-style install-btn">
                Add & Install Extension
              </button>
            </div>

            <div className="browser-card">
              <img src={OperaLogo} alt="#" />
              <div className="browser-card-text">
                <h4>Add to Opera</h4>
                <p>Minimum version 46</p>
              </div>
              <div className="dotted-border"></div>
              <button className="button-style install-btn">
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DownloadComponent;
