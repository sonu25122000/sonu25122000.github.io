import React, { useEffect } from "react";
import "../Style/home.css";

import { Typewriter } from "react-simple-typewriter";
import my from "../Components/Images/sonu.png";
import AOS from "aos";
import { Tooltip } from "@chakra-ui/react";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1tAqnVS_pG3cbTPDbRJLuwfBtITWiPwsO/view?usp=share_link",
      "_blank"
    );
  };
  return (
    <section id="home">
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-offset="100"
        id="profile"
      >
        {/* image */}
        <img src={my} alt="" />
      </div>
      <div
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        id="sonu"
      >
        <h1
          data-aos="fade-down-right"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          {" "}
          Hello
          <img
            width={40}
            src="https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/waving-hand_1f44b.gif"
            alt=""
          />{" "}
          My Name Is{" "}
        </h1>
        <h1
          data-aos="fade-down-right"
          data-aos-duration="2000"
          data-aos-delay="300"
          id="name"
        >
          Sonu Kumar
        </h1>
        <h1
          data-aos="fade-down-right"
          data-aos-duration="2000"
          data-aos-delay="300"
          id="type"
        >
          <Typewriter
            deleteSpeed={90}
            typeSpeed={100}
            delaySpeed={2500}
            words={[
              "Full Stack Web Developer",
              "Problem Solver",
              "Life Long Learner",
            ]}
            loop
            cursor
            cursorBlinking
            cursorStyle="..."
          />
        </h1>

        <a href="./fw21_1204-Sonu_Kumar_Resume.pdf" target="_blank" rel="noreferrer" download>
          <button
            id="resume"
            style={{
              borderRadius: "1rem",
              color: "white",
              padding: "15px 20px 15px 20px",
            }}
            onClick={handleClick}
          >
            Resume
          </button>
        </a>

        <div id="homesocial">
          <Tooltip
            label="Github"
            placement="bottom"
            borderRadius={"8px 10px "}
            padding={"10px"}
            color={"white"}
            bg="gray"
            fontSize="18px"
          >
            <a target="blank" href="https://github.com/sonu25122000">
              {" "}
              <i class="fa-brands fa-github"></i>
            </a>
          </Tooltip>

          <Tooltip
            label="Linkedin"
            placement="bottom"
            borderRadius={"8px 10px "}
            padding={"10px"}
            color={"white"}
            bg="gray"
            fontSize="18px"
          >
            <a
              target="blank"
              href="https://www.linkedin.com/in/sonu-kumar-a13235244/"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </Tooltip>
        </div>
      </div>
    </section>
  );
};
export default Home;
