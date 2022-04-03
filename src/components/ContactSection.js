import React from "react";
import contactImg from "../images/contact-img.png";

function ContactSection() {
  return (
    <div>
      <section className="contact" id="contact">
        <div className="image">
          <img src={contactImg} alt="" />
        </div>

        <form action="">
          <h1 className="heading">contact us</h1>

          <div className="inputBox">
            <input type="text" required />
            <label>name</label>
          </div>

          <div className="inputBox">
            <input type="email" required />
            <label>email</label>
          </div>

          <div className="inputBox">
            <input type="number" required />
            <label>phone</label>
          </div>

          <div className="inputBox">
            <textarea required name="" id="" cols="30" rows="10"></textarea>
            <label>message</label>
          </div>

          <input type="submit" className="btn" value="send message" />
        </form>
      </section>
    </div>
  );
}

export default ContactSection;
