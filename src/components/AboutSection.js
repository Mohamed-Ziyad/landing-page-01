import React from "react";
import aboutImg from "../images/about-img.png";

function AboutSection() {
  return (
    <div>
      <section className="about" id="about">
        <h1 className="heading">about the app</h1>

        <div className="column">
          <div className="image">
            <img src={aboutImg} alt="" />
          </div>

          <div className="content">
            <h3>Easy And Perfect Solution For Your Business App</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              placeat deserunt saepe repudiandae veniam soluta minima dolor hic
              aperiam iure.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium, quaerat. Dolorem ratione saepe magni quo inventore
              porro ab voluptates eos, nam eius provident accusantium, quia
              similique est, repellendus et reiciendis.
            </p>
            <div className="buttons">
              <a href="#" className="btn">
                {" "}
                <i className="fab fa-apple"></i> app store{" "}
              </a>
              <a href="#" className="btn">
                <i className="fab fa-google-play"></i> google-play
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
