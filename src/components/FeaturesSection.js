import React from "react";
import icon1 from "../images/f-icon1.png";
import icon2 from "../images/f-icon2.png";
import icon3 from "../images/f-icon3.png";
function FeaturesSection() {
  return (
    <div>
      <section className="features" id="features">
        <h1 className="heading">app features</h1>

        <div className="box-container">
          <div className="box">
            <img src={icon1} alt="" />
            <h3>amazing UI design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              minus recusandae autem, repellendus fugit quaerat provident
              voluptatum non officiis ratione.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>

          <div className="box">
            <img src={icon2} alt="" />
            <h3>soft and smooth animations</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              minus recusandae autem, repellendus fugit quaerat provident
              voluptatum non officiis ratione.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>

          <div className="box">
            <img src={icon3} alt="" />
            <h3>freindly interactions</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              minus recusandae autem, repellendus fugit quaerat provident
              voluptatum non officiis ratione.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturesSection;
