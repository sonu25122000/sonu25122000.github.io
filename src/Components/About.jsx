import React from "react";
import Aos from "aos";
import "../Style/about.css";
const About = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="about">
      <div
        id="tech"
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
      >
        <h1 style={{ color: "var(--color-font)" }}>About Me </h1>
        {/* <h1 style={{ color: "var(--color-font)" }}> Skills </h1> */}
      </div>

      <div id="aboutdiv">
        <div  data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-offset="100" >
          <ul type="square">
            <li>
              Hello My Name is Sonu Kumar & I enjoy creating things that
              live on the Internet.{" "}
            </li>
            <li>
              {" "}
              I'm a passionate Developer, with strong administrative and
              communication skills , 1200 + hours of hands on experience in coding, good attention to detail and the ability to
              write efficient code using MERN Stack.
            </li>
            <li>
              My interest in web development started back last year when 
              I learned that a very good website can be made from this,
               which will be very useful for the people
            </li>
            <li>
              As I grow and flourish as a Developer, one thing which keeps me
              going is my inquisitiveness for discovering new things every day.
            </li>
            <li>
              Fast Forwarding to today, I built a number of web applications and
              5 major projects. Learned a great deal about teamwork, leadership,
              and communication. After months of rigorous training, here I am
              looking for an opportunity as a full stack web developer.
            </li>
          </ul>
        </div>
        <div  data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-offset="100" >
          <img
            src="https://img.freepik.com/premium-vector/man-working-home_28923-46.jpg?w=740"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
