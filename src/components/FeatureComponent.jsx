import React, { useState } from "react";
import TabComponent from "./TabComponent";
import TabImg1 from "../img/illustration-features-tab-1.svg";
import TabImg2 from "../img/illustration-features-tab-2.svg";
import TabImg3 from "../img/illustration-features-tab-3.svg";

function FeatureComponent() {
  const [state, setState] = useState("active1");

  return (
    <>
      <section>
        <div className="feature-section">
          <div className="feature-text">
            <h2>Features</h2>
            <p>
              Our aim is to make it quick and easy for you to acess your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go
            </p>
          </div>

          <div className="tabs">
            <h3 onClick={() => setState("active1")} className="tab">
              Simple Bookmarking
            </h3>
            <h3 onClick={() => setState("active2")} className="tab">
              Speeding Searching
            </h3>
            <h3 onClick={() => setState("active3")} className="tab">
              Easy Sharing
            </h3>
          </div>

          <div className="display-tab-content">
            {state === "active1" && (
              <TabComponent
                id={1}
                coverImg={TabImg1}
                header="Bookmark in one click"
                description="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
              />
            )}

            {state === "active2" && (
              <TabComponent
                id={2}
                coverImg={TabImg2}
                header="Intelligent Search"
                description="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all your bookmarks."
              />
            )}

            {state === "active3" && (
              <TabComponent
                id={3}
                coverImg={TabImg3}
                header="Share your bookmarks"
                description="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default FeatureComponent;
