import "../Style/topNavbar.css";
import React, { useState } from "react";
import logo from "../Components/Images/logo.jpeg";
import resume from "../Components/Images/Sonu_Kumar_Resume.pdf";
import NavDrawer from "./NavDrawer";

const TopNavbar = () => {
  const [current, setCurrent] = useState("#home");
  return (
    <div>
      <div style={{ height: "10vh" }} id="topnav">
        <a href="https://sonu25122000.github.io/">
          <div style={{ marginLeft: "40px", align: "center", padding: "4px" }}>
            <img width={"70px"} src={logo} alt="logo" />
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
            {/* <a  href="https://onedrive.live.com/?authkey=%21AAdLQK8VH%5FysUEw&cid=8C56F2E1EF84D28C&id=8C56F2E1EF84D28C%21106&parId=root&o=OneUp" target="_blank" rel="noreferrer" download={true}> */}
            <a href={resume} target="_blank" rel="noreferrer" download>
              <h4
                id="resumenav"
                className={current === "#resume" ? "activemain" : null}
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
