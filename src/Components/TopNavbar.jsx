import "../Style/topNavbar.css";
import React, { useState } from "react";
import NavDrawer from "./NavDrawer";

const TopNavbar = () => {
  const [current, setCurrent] = useState("#home");
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1tAqnVS_pG3cbTPDbRJLuwfBtITWiPwsO/view?usp=share_link",
      "_blank"
    );
  };
  return (
    <div>
      <div style={{ height: "10vh" }} id="topnav">
        <a href="https://sonu25122000.github.io/">
          <div style={{ marginLeft: "40px", align: "center", padding: "4px" }}>
            <img width={"150px"} src={"https://i.postimg.cc/G26gY9N8/Circle-Round-Minimal-Initials-Photography-Logo-Video-1.png"} alt="logo" />
          </div>
        </a>
        <div id="navel">
          <div
            onClick={() => [
              setCurrent("#home"),
              (window.location.href = "#home"),
            ]}
          >
            {" "}
            <a href="#home">
              <h4 className={current === "#home" ? "activemain" : null}>
                Home
              </h4>
            </a>{" "}
          </div>
          <div
            onClick={() => [
              setCurrent("#about"),
              (window.location.href = "#about"),
            ]}
          >
            <a href="#about">
              <h4 className={current === "#about" ? "activemain" : null}>
                About
              </h4>
            </a>{" "}
          </div>
          <div
            onClick={() => [
              setCurrent("#skills"),
              (window.location.href = "#skills"),
            ]}
          >
            <a href="#skills">
              <h4 className={current === "#skills" ? "activemain" : null}>
                Skills
              </h4>
            </a>{" "}
          </div>
          <div
            onClick={() => [
              setCurrent("#projects"),
              (window.location.href = "#projects"),
            ]}
          >
            <a href="#projects">
              <h4 className={current === "#projects" ? "activemain" : null}>
                Projects
              </h4>
            </a>{" "}
          </div>
          <div
            onClick={() => [
              setCurrent("#contact"),
              (window.location.href = "#contact"),
            ]}
          >
            <a href="#contact">
              <h4 className={current === "#contact" ? "activemain" : null}>
                Contact
              </h4>
            </a>{" "}
          </div>
          <div onClick={() => setCurrent("#resume")}>

            <a href="./Sonu_Kumar_Resume .pdf" target="_blank" rel="noreferrer" download>
              <h4
                id="resumenav"
                className={current === "#resume" ? "activemain" : null}
                onClick={handleClick}
              >
                Resume
              </h4>
            </a>{" "}
          </div>
        </div>
        <div id="sidebar">
          <NavDrawer />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
