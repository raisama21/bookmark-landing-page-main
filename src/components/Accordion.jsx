import React, { useState } from "react";
import Arrow from "../img/icon-arrow.svg";

function Accordian(props) {
  const [show, setShow] = useState(false);
  function handleShow(event) {
    setShow((oldShow) => !oldShow);
  }

  return (
    <div className="accordion-container">
      <button className="accordion-header" onClick={handleShow}>
        {props.question}
        <img src={Arrow} alt="#" />
      </button>
      {show && <p className="accordion-body">{props.answer}</p>}
    </div>
  );
}

export default Accordian;
