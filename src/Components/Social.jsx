import React from "react";
import "../Style/social.css";

const Social = () => {
  return (
    <div id="social">
      <div id="git">
        {" "}
        <a target="blank" href="https://github.com/sonu25122000">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
      <div id="link">
        {" "}
        <a
          target="blank"
          href="https://www.linkedin.com/in/sonu-kumar-a13235244/"
        >
          {" "}
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Social;
