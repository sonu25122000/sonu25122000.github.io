import React from "react";
import GitHubCalendar from "react-github-calendar";
import ProjectCard from "./ProjectCard";
import "../Style/projects.css";
import html from "../Components/Images/Html.png";
import css from "../Components/Images/Css.png";
import react from "../Components/Images/react.png";
import js from "../Components/Images/js.png";
import chakra from "../Components/Images/chakra.png";
import typescript from "../Components/Images/typescript.png";
import node from "../Components/Images/nodejs.png";
import express from "../Components/Images/express.png";
import mongo from "../Components/Images/mongodb-seeklogo.com.svg";
const Projects = () => {
  let Buffer = [
    {
      imgarr: [
        {
          img: "https://i.postimg.cc/fy9nzNnn/Screenshot-2023-02-27-at-9-55-06-PM.png",
        },
        {
          img: "https://i.postimg.cc/ZnwWPpsx/Screenshot-2023-02-27-at-9-44-46-PM.png",
        },
        {
          img: "https://i.postimg.cc/y8ZNxMKP/Screenshot-2023-02-27-at-9-44-58-PM.png",
        },
        {
          img: "https://i.postimg.cc/wvqzHPF0/Screenshot-2023-02-27-at-9-45-32-PM.png",
        },
      ],
      des: `Buffer is a social
       media management platform for small to
        midsize businesses that helps users publish
         content, engage clients and analyze their
          social media performance.`,
      title: "Buffer",
      techstack: [
        { src: html, name: "HTML" },
        { src: css, name: "CSS" },
        { src: js, name: "JavaScript" },
      ],
      live: `https://jade-biscotti-64239c.netlify.app/`,
      github: `https://github.com/sonu25122000/nondescript-trip-7233`,
      dplink: "",
    },
  ];
  let OLX = [
    {
      imgarr: [
        {
          img: "https://i.postimg.cc/XvfcfyVr/Screenshot-2023-02-27-at-9-34-04-PM.png",
        },
        {
          img: "https://i.postimg.cc/QVZdJVNM/Screenshot-2023-02-27-at-9-35-04-PM.png",
        },
        {
          img: "https://i.postimg.cc/CxK7k45d/Screenshot-2023-02-27-at-9-53-00-PM.png",
        },
      ],
      des: `
      OLX is the perfect online marketplace to buy and sell locally! No need to visit the flea market to find the best deals on pre-owned items! Here you’ll find a wide selection of like new products.`,
      title: "OLX",
      techstack: [
        { src: html, name: "HTML" },
        { src: css, name: "CSS" },
        { src: js, name: "JavaScript" },
        { src: react, name: "React" },
      ],
      live: `https://fantastic-seahorse-4fa219.netlify.app/`,
      github: `https://github.com/sonu25122000/legal-houses-5460`,
      dplink: "",
    },
  ];

  let Wrike = [
    {
      imgarr: [
        {
          img: "https://i.postimg.cc/XYDxnD34/Screenshot-2023-02-27-at-10-23-29-PM.png",
        },
        {
          img: "https://i.postimg.cc/htw8kzbG/Screenshot-2023-02-27-at-10-23-46-PM.png",
        },
        {
          img: "https://i.postimg.cc/26C1MrJ6/Screenshot-2023-02-27-at-10-23-38-PM.png",
        },
        {
          img: "https://i.postimg.cc/L8N45L0H/Screenshot-2023-02-27-at-10-25-11-PM.png",
        },
        {
          img: "https://i.postimg.cc/ZKmJLVGb/Screenshot-2023-02-27-at-10-25-19-PM.png",
        },
        {
          img: "https://i.postimg.cc/HkhGF2h7/Screenshot-2023-02-27-at-10-25-37-PM.png",
        },
        {
          img: "https://i.postimg.cc/rs8YD0Hk/Screenshot-2023-02-27-at-10-25-56-PM.png",
        },
        {
          img: "https://i.postimg.cc/25Qwnjh8/Screenshot-2023-02-27-at-10-26-40-PM.png",
        },
        {
          img: "https://i.postimg.cc/N0DXgKRT/Screenshot-2023-02-27-at-10-26-52-PM.png",
        },
      ],
      des: `
      Wrike is a work management platform that helps business teams collaborate, plan projects, organize team member tasks and track project completion.`,
      title: "Wrike Rider",
      techstack: [
        { src: html, name: "HTML" },
        { src: css, name: "CSS" },
        { src: js, name: "JavaScript" },
      ],
      live: `https://glowing-bavarois-8587cc.netlify.app/`,
      github: `https://github.com/Abhinav-Mourya/puzzled-apparatus-1796`,
      dplink: "",
    },
  ];
  let dailyneeds = [
    {
      imgarr: [
        {
          img: "https://i.postimg.cc/fb41zvP9/Screenshot-from-2023-01-30-20-50-48.png",
        },

        {
          img: "https://i.postimg.cc/8zfqgYZG/Screenshot-from-2023-01-30-20-51-28.png",
        },

        {
          img: "https://i.postimg.cc/vHBJ3T9c/Screenshot-from-2023-01-30-20-53-09.png",
        },
        {
          img: "https://i.postimg.cc/5047yKS6/Screenshot-from-2023-01-30-20-53-29.png",
        },
        {
          img: "https://i.postimg.cc/g0qtYbRC/Screenshot-from-2023-01-30-20-55-01.png",
        },
        {
          img: "https://i.postimg.cc/9XN8XpRQ/Screenshot-from-2023-01-30-20-56-53.png",
        },
        {
          img: "https://i.postimg.cc/NjXPzH0f/Screenshot-from-2023-01-30-20-54-33.png",
        },
        {
          img: "https://i.postimg.cc/HshfKm43/Screenshot-from-2023-01-30-20-52-23.png",
        },
        {
          img: "https://i.postimg.cc/gj5NMzFZ/Screenshot-from-2023-01-30-20-56-16.png",
        },
        {
          img: "https://i.postimg.cc/63fk1GYG/Screenshot-from-2023-01-30-20-50-23.png",
        },
        {
          img: "https://i.postimg.cc/yxWLXJ5K/Screenshot-from-2023-01-30-20-54-14.png",
        },
        {
          img: "https://i.postimg.cc/MG8r2pc0/Screenshot-from-2023-01-30-20-54-22.png",
        },
      ],
      des: `
      Daily Objects is a Lifestyle Accessories Brand that curates stunning designs and prints it on a wide range of personal accessories. We vision to bring the things you love on the things you use.`,
      title: "Daily Objects",
      techstack: [
        { src: typescript, name: "Type Script" },
        { src: react, name: "React" },
        { src: chakra, name: "Chakra" },
        { src: html, name: "HTML" },
        { src: css, name: "CSS" },
      ],
      live: ``,
      github: ``,
      dplink: "",
    },
  ];

  let Meesho = [
    {
      imgarr: [
        {
          img: "https://user-images.githubusercontent.com/103637119/221498640-67982356-65b3-4565-9fa2-015cea37cc3e.png",
        },
        {
          img: "https://user-images.githubusercontent.com/103637119/221499018-db0faa80-1157-4830-b5e1-8f44ef12ede5.png",
        },
        {
          img: "https://user-images.githubusercontent.com/103637119/221500585-98c4542d-da6b-4721-bcba-bfcf5b99cee0.png",
        },
        {
          img: "https://user-images.githubusercontent.com/103637119/221500800-17aaeb78-e85c-416f-8b7a-709d37810388.png",
        },
        {
          img: "https://user-images.githubusercontent.com/103637119/221501093-f206fa82-43b8-4e02-a186-8e6bdfc046e3.png",
        },
        {
          img: "https://user-images.githubusercontent.com/103637119/221501555-be05cc0f-20fb-4828-94cc-95436895fbfb.png",
        },
        {
          img: "https://user-images.githubusercontent.com/103637119/221501597-983a291c-2962-4fe8-9d61-ce8566ebffce.png",
        },
      ],
      des: `
     Meesho is an e-commerce website for ordering fashion products, clothing etc.`,
      title: "Meesho",
      techstack: [
        { src: html, name: "HTML" },
        { src: css, name: "CSS" },
        { src: js, name: "JavaScript" },
        { src: react, name: "React" },
        { src: node, name: "NodeJs" },
        { src: express, name: "ExpressJS" },
        { src: mongo, name: "MongoDB" },
      ],
      live: `https://meesho-fascino.vercel.app/`,
      github: `https://github.com/mhtbansal11/probable-hour-5744`,
      dplink: "",
    },
  ];

  return (
    <section id="projects">
      <div
        id="tech"
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        margin={"auto"}
        justifyContent={"space-around"}
      >
        <h1 style={{ color: "var(--color-font)" }}>Projects </h1>
      </div>
      <div id="procard">
        <div
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-center"
        >
          <ProjectCard arr={dailyneeds} />
        </div>

        <div
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-center"
        >
          <ProjectCard arr={Meesho} />
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-center"
        >
          <ProjectCard arr={Wrike} />
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-center"
        >
          <ProjectCard arr={Buffer} />
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-center"
        >
          <ProjectCard arr={OLX} />
        </div>
      </div>
      <div
        id="gitname"
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        margin={"auto"}
        justifyContent={"space-around"}
      >
        <h2 style={{ color: "var(--color-font)" }}>
          Github Contribution Calender{" "}
        </h2>
      </div>
      <div
        id="calendar"
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-offset="100"
      >
        <GitHubCalendar
          fontSize={14}
          color="#008001"
          blockRadius={1}
          blockMargin={6}
          blockSize={16}
          showWeekdayLabels
          username="sonu25122000"
        />
      </div>
      <div
        id="gitname"
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        margin={"auto"}
        justifyContent={"space-around"}
      >
        <h2 style={{ color: "var(--color-font)" }}>Github Stats </h2>
      </div>
      <div id="gitstats">
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
          alt="most used languages"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=sonu25122000&count_private=true&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=8&langs_count=20&hide=hack,swift,kotlin,objective-c"
        />

        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
          alt="status github, commits, etc..."
          src="https://github-readme-streak-stats.herokuapp.com/?user=sonu25122000&count_private=true&show_icons=true&custom_title=Github&theme=algolia&bg_color=red,130F40&layout=compact&border_radius=8"
        />

        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
          alt="7oSkaaa's Github Stats"
          src="https://github-readme-stats.vercel.app/api?username=sonu25122000&show_icons=true&count_private=true&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=10"
        />
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
          alt="Sonu's Activity Graph"
          src="https://github-readme-activity-graph.cyclic.app/graph?username=sonu25122000&theme=react-dark&hide_border=false"
        />
      </div>
    </section>
  );
};

export default Projects;
