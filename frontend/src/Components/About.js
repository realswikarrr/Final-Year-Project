import React from "react";
import image from "../images/about-img.jpg";
import "./Main.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="image">
        <img src={image} alt="" />
      </div>

      <div className="content">
        <span>about us</span>
        <h3 className="title">Every day is a chance to become better</h3>
        <p>
          Everyday is a chance to become better. It's a chance to be strong, to
          be fit, to be healthy, to be happy, to be free, to be able to do what
          you want to do.
        </p>
        <div className="box-container">
          <div className="box">
            <h3>
              <i className="fas fa-check"></i>body and mind
            </h3>
            <p>Body and mind are the two most important parts of a person.</p>
          </div>
          <div className="box">
            <h3>
              <i className="fas fa-check"></i>healthy life
            </h3>
            <p>
              Health life is meant to be a healthy lifestyle, not a lifestyle
            </p>
          </div>
          <div className="box">
            <h3>
              <i className="fas fa-check"></i>strategies
            </h3>
            <p>
              There are always strategies to be followed to achieve your goals
            </p>
          </div>
          <div className="box">
            <h3>
              <i className="fas fa-check"></i>workout
            </h3>
            <p>Workout is the best way to get your body and mind healthy and</p>
          </div>
        </div>
        <a href="#" className="btn">
          See Workout Plans
        </a>
      </div>
    </section>
  );
};

export default About;
