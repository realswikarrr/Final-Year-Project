import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>quick links</h3>
          <Link to="/">home</Link>
        </div>

        <div className="box">
          <h3>opening hours</h3>
          <p>
            monday : <i> 7:00am - 10:30pm </i>
          </p>
          <p>
            tuesday : <i> 7:00am - 10:30pm </i>
          </p>
          <p>
            wednesday : <i> 7:00am - 10:30pm </i>
          </p>
          <p>
            friday : <i> 7:00am - 10:30pm </i>
          </p>
          <p>
            saturday : <i> 7:00am - 10:30pm </i>
          </p>
          <p>
            sunday : <i> closed </i>
          </p>
        </div>

        <div className="box">
          <h3>opening hours</h3>
          <p>
            <i className="fas fa-phone"></i> +977-9861104791
          </p>
          <p>
            <i className="fas fa-phone"></i> +977-9861104791
          </p>
          <p>
            <i className="fas fa-envelope"></i> diamondfitness@gmail.com
          </p>
          <p>
            <i className="fas fa-map"></i> kathmandu, nepal - 44600
          </p>
          <div className="share">
            <a
              href="https://www.facebook.com/stayfitwithdiamond"
              className="fab fa-facebook-f"
            ></a>
            <a
              href="https://www.instagram.com/officialdiamondgym/"
              className="fab fa-instagram"
            ></a>
          </div>
        </div>

        <div className="box">
          <h3>newsletter</h3>
          <p>subscribe for latest updates</p>
          <form action="">
            <input
              type="email"
              name=""
              className="email"
              placeholder="enter your email"
              id=""
            />
            <input type="submit" value="subscribe" className="btn" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer;
