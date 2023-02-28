import React from "react";
import { Image, Tooltip } from "@chakra-ui/react";
import "../Components/nav.css";
import resume from "../Style/Sonu_Kumar_Resume.pdf";

const Navbar = () => {
  const [activenav, setActiveNav] = React.useState("#home");
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1tAqnVS_pG3cbTPDbRJLuwfBtITWiPwsO/view?usp=share_link",
      "_blank"
    );
  };
  return (
    <nav>
      <Tooltip
        label="Home"
        placement="bottom"
        borderRadius={"8px 10px "}
        padding={"10px"}
        color={"white"}
        bg="gray"
        fontSize="18px"
      >
        <a
          onClick={() => setActiveNav("#home")}
          className={activenav === "#home" ? "active" : null}
          href="#home"
        >
          {" "}
          <Image
            boxSize={20}
            src="https://cdn1.iconfinder.com/data/icons/neutro-essential/32/home-64.png"
            alt=""
          />
        </a>
      </Tooltip>

      <Tooltip
        label="About"
        placement="bottom"
        borderRadius={"8px 10px "}
        padding={"10px"}
        color={"white"}
        bg="gray"
        fontSize="18px"
      >
        <a
          onClick={() => setActiveNav("#about")}
          className={activenav === "#about" ? "active" : null}
          href="#about"
        >
          {" "}
          <Image
            boxSize={20}
            src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/user_close-64.png"
            alt=""
          />
        </a>
      </Tooltip>

      <Tooltip
        label="Skills"
        placement="bottom"
        borderRadius={"8px 10px "}
        padding={"10px"}
        color={"white"}
        bg="gray"
        fontSize="18px"
      >
        <a
          onClick={() => setActiveNav("#skills")}
          className={activenav === "#skills" ? "active" : null}
          href="#skills"
        >
          {" "}
          <Image
            boxSize={20}
            src="https://cdn0.iconfinder.com/data/icons/zondicons/20/book-reference-64.png"
            alt=""
          />
        </a>
      </Tooltip>

      <Tooltip
        label="Projects"
        placement="bottom"
        borderRadius={"8px 10px "}
        padding={"10px"}
        color={"white"}
        bg="gray"
        fontSize="18px"
      >
        <a
          onClick={() => setActiveNav("#projects")}
          className={activenav === "#projects" ? "active" : null}
          href="#projects"
        >
          {" "}
          <Image
            boxSize={20}
            src="https://cdn2.iconfinder.com/data/icons/neutro-essential/32/briefcase-64.png"
          />
        </a>
      </Tooltip>

      <Tooltip
        label="Contact"
        placement="bottom"
        borderRadius={"8px 10px "}
        padding={"10px"}
        color={"white"}
        bg="gray"
        fontSize="18px"
      >
        <a
          onClick={() => setActiveNav("#contact")}
          className={activenav === "#contact" ? "active" : null}
          href="#contact"
        >
          {" "}
          <Image
            boxSize={20}
            src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_Message-64.png"
          />
        </a>
      </Tooltip>

      <Tooltip
        label="Resume"
        placement="bottom"
        borderRadius={"8px 10px "}
        padding={"10px"}
        color={"white"}
        bg="gray"
        fontSize="18px"
      >
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          download
          onClick={() => setActiveNav("#resume")}
          className={activenav === "#resume" ? "active" : null}
        >
          {" "}
          <Image
            onClick={handleClick}
            boxSize={20}
            src="https://cdn0.iconfinder.com/data/icons/business-3-black-fill/64/Business_3-_Black_fill-30-64.png"
          />
        </a>
      </Tooltip>
    </nav>
  );
};

export default Navbar;
