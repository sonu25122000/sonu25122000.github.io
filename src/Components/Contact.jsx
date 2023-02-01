import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Aos from "aos";

import "../Style/contact.css";
function ContactForm() {
  const [state, handleSubmit] = useForm("mpzeqyeq");

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  if (state.succeeded) {
    return (
      <>
        {" "}
        <div
          id="formsub"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
          style={{ textAlign: "center" }}
        >
          <img
            width={300}
            src="https://png.pngtree.com/png-vector/20230105/ourmid/pngtree-3d-green-check-mark-icon-png-image_6552255.png"
            alt=""
          />
          <h1>
            Your mail has been sent Succesfully !
          </h1>
        </div>
      </>
    );
  }

  return (
    <section id="contact">
      <div
        id="tech"
        data-aos="fade-down-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        margin={"auto"}
        justifyContent={"space-around"}
      >
        <h1 style={{ color: "var(--color-font)" }}>Contact Me </h1>
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-offset="100"
        id="contactform"
      >
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
          id="contactlinkdiv"
        >
          <div>
            <div>
              {" "}
              <div style={{fontSize:"1.5rem",marginRight:"10px"}}>
              <i  class="fa-solid fa-envelope"></i>
              </div>
              <h4>skg74827@gmail.com</h4>
            </div>
            <div>
            <a target={"blank"} href="mailto:skg74827@gmail.com"><button id="btnform">
               
               Email Now !
             </button></a>
              
            </div>
          </div>
          <div className="whatsapp">
            <div>
              {" "}
              <div style={{fontSize:"1.5rem",marginRight:"10px"}}>
             
              <i class="fa-solid fa-phone"></i>
              </div>
              <h4> Phone : +91 6202945018</h4>
            </div>
            <div>
              <a target={"blank"} href="tel:916202945018">
                {" "}
                <button id="btnform">Call Now !</button>
              </a>
            </div>
          </div>
          <div className="call">
            <div >
           <div style={{fontSize:"2rem",marginRight:"20px"}} > <i class="fa-brands fa-whatsapp"></i></div>
              <h4> Whatsapp</h4>
            </div>
            <div>
              <a target={"blank"} href="https://wa.me/916202945018">
                <button id="btnform">Whatsapp Now !</button>
              </a>
            </div>
          </div>
          <div style={{display:"flex",justifyContent:"space-evenly"}} id="socialgit">
            <a target="blank" href="https://github.com/sonu25122000">
              {" "}
              <i class="fa-brands fa-github"></i>
            </a>

            <a
              target="blank"
              href="https://www.linkedin.com/in/sonu-kumar-a13235244/"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="100"
        >
          <form onSubmit={handleSubmit}>
            <h4>Your Name </h4>
            <input id="name" placeholder="Insert Your Name" name="Name" />
            <h4>Email Address</h4>
            <input
              id="email"
              placeholder="Insert Your Email"
              type="email"
              name="Email"
            />

            <h4>Mobile Number</h4>
            <input id="mobile" placeholder="+91" type="number" name="Mobile" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <h4>Message</h4>
            <input
              placeholder=" Insert Your Message"
              style={{ paddingTop: "10px", paddingBottom: "90px" }}
              id="message"
              type="text"
              name="Message"
            />

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <div id="formbu">
              <button
                style={{ width: "55%",marginBottom:"20px" }}
                id="btnform"
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
