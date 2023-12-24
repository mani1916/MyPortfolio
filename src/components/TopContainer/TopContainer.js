import React from "react";
import { Element } from "react-scroll";
import TopContent from "../TopContent/TopContent";
import "./TopContainer.css";
const TopContainer = () => {
  return (
    <div>
      <Element name="about" className="TopContainer">
        <div className="TopContainer_left">
          <img
            src="https://img.freepik.com/premium-vector/man-with-cup-coffee-stands-near-workplace_753539-239.jpg?w=740"
            alt=""
          />
        </div>
        <div className="TopContainer_right">
          <TopContent />
        </div>
      </Element>
    </div>
  );
};

export default TopContainer;
