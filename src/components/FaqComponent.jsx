import React from "react";
import data from "../AccordionData";
import Accordion from "./Accordion";

function FaqComponent() {
  const faq = data.map((item) => {
    return <Accordion key={item.id} {...item} />;
  });
  return (
    <>
      <section>
        <div className="faq-section">
          <div className="faq-text">
            <h2>Frequently Asked Questions</h2>
            <p>
              Here are some of our FAQs. If you have any other questions you'd
              like answered please feel free to email us.
            </p>
          </div>

          <div className="accordion">{faq}</div>
          <div className="button">
            <button className="button-style moreInfo-btn">More Info</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default FaqComponent;
