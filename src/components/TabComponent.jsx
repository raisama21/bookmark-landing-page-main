import React from "react";

function TabComponent(props) {
  return (
    <div className={`tab-content tab-content-${props.id}`}>
      <img src={props.coverImg} />
      <div className="tab-content-text">
        <h2>{props.header}</h2>
        <p>{props.description}</p>
        <button className="button-style info-btn hide-for-mobile">
          More Info
        </button>
      </div>
    </div>
  );
}

export default TabComponent;
