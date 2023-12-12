import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section id="banner">
      <div className="container">
        <div className="text-area">
          <h4>LIFE TIME</h4>
          <h1>GAMING EXPERIENCE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            alias voluptas optio. Veritatis recusandae pariatur qui dignissimos
            dolore similique ad adipisci eum. Quos aliquid fugiat magni illum
            eius?
          </p>

          <a href="#" className="button button-white">
            View More <FaAngleDoubleRight className="icon" size={20} />
          </a>
        </div>

        <div className="links">
          <a href="">
            <FaFacebook className="links-icon" />
          </a>
          <a href="">
            <FaLinkedin className="links-icon" />
          </a>
          <a href="">
            <FaTwitter className="links-icon" />
          </a>

          <a href="">
            <FaInstagram className="links-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
