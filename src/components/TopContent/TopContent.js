import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudDownload , faCode } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-scroll";
import './TopContent.css'
const TopContent = () => {
  return (
    <div className="TopContent">
      <div className="TopContent_Container">
        <h1>Mr.Manikandan L</h1>
        <p>
          "I'm a full-stack MERN developer from Salem, Tamil Nadu. Specializing
          in crafting digiverse applications, including e-commerce platforms. My
          passion lies in creating visually stunning, user-friendly interfaces
          to enhance overall efficiency and impact."
        </p>
        <a href="https://www.canva.com/design/DAFpE9brZvk/WHuDX_yrzGKv9NMUfA3Ldg/edit?utm_content=DAFpE9brZvk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
          <button className="TopContentCVbutton">
            Download CV <FontAwesomeIcon icon={faCloudDownload} />
          </button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className="TopContentWorkbutton">
            My Work <FontAwesomeIcon icon={faCode} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopContent;
