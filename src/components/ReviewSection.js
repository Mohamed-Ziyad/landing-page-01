import React from "react";
import avatar1 from "../images/pic1.png";
import avatar2 from "../images/pic2.png";
import avatar3 from "../images/pic3.png";
function ReviewSection() {
  return (
    <div>
      <section className="review" id="review">
        <h1 className="heading">people's review</h1>

        <div className="box-container">
          <div className="box">
            <i className="fas fa-quote-right"></i>
            <div className="user">
              <img src={avatar1} alt="" />
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="comment">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus et, perspiciatis nisi tempore aspernatur accusantium
                sed distinctio facilis aperiam laborum autem earum repellat,
                commodi eum. Ullam cupiditate expedita officiis obcaecati?
              </div>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-quote-right"></i>
            <div className="user">
              <img src={avatar3} alt="" />
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <div className="comment">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus et, perspiciatis nisi tempore aspernatur accusantium
                sed distinctio facilis aperiam laborum autem earum repellat,
                commodi eum. Ullam cupiditate expedita officiis obcaecati?
              </div>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-quote-right"></i>
            <div className="user">
              <img src={avatar2} alt="" />
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="comment">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus et, perspiciatis nisi tempore aspernatur accusantium
                sed distinctio facilis aperiam laborum autem earum repellat,
                commodi eum. Ullam cupiditate expedita officiis obcaecati?
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReviewSection;
