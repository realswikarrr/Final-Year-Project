import React from "react";
import image1 from "../images/f-img-1.jpg";
import image2 from "../images/f-img-2.jpg";
import image3 from "../images/f-img-3.jpg";
import imageicon1 from "../images/icon-1.png";
import imageicon2 from "../images/icon-2.png";
import imageicon3 from "../images/icon-3.png";
import "./Main.css";

const Features = () => {
  return (
    <section className="features" id="features">
      <h1 className="heading">
        <span>gym features</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img src={image1} alt="" />
          </div>
          <div className="content">
            <img src={imageicon1} alt="" />
            <h3>body building</h3>
            <p>
              We got a huge bodybuilding program that will help you to get fit
              and healthy.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box second">
          <div className="image">
            <img src={image2} alt="" />
          </div>
          <div className="content">
            <img src={imageicon2} alt="" />
            <h3>Crossfit</h3>
            <p>
              We got a huge Crossfit room that will help you get fit and
              healthy.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={image3} alt="" />
          </div>
          <div className="content">
            <img src={imageicon3} alt="" />
            <h3>cardio</h3>
            <p>
              We got a huge Cardio room that will help you get fit and healthy.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
