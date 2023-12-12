import React from "react";
import logo from "../assets/logo.png";
import footerimg1 from "../assets/footerimg1.png";
import footerimg2 from "../assets/footerimg2.png";
import footerimg3 from "../assets/footerimg3.png";
import footerimg4 from "../assets/footerimg4.png";
import footerimg5 from "../assets/footerimg5.png";
import footerimg6 from "../assets/footerimg6.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="subs">
          <div className="row">
            <div className="col-lg-8">
              <h1>
                subscribe us to get latest news in your inbox from hancok
                community
              </h1>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <form action="">
                <input type="text" name="" id="" placeholder="your Email" />
                <button type="submit">SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>

        <div className="row bottom-part">
          <div className="col-lg-5 col-12">
            <img className="logo" src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero
              officiis rem consectetur sunt cupiditate eius obcaecati, culpa,
              aspernatur aperiam id.
            </p>

            <div className="links">
              <a href="">
                <FaFacebookF />
              </a>
              <a href="">
                <FaLinkedinIn />
              </a>
              <a href="">
                <FaTwitter />
              </a>
              <a href="">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-6">
            <h4>LINKS</h4>

            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Tournament</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-6 col-6">
            <h4>TEAMS</h4>

            <ul>
              <li>
                <a href="">PALADINS</a>
              </li>
              <li>
                <a href="">CS:GO</a>
              </li>
              <li>
                <a href="">DOTA 2</a>
              </li>
              <li>
                <a href="">VALORANT</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-12">
            <h4>GALLARY</h4>
            <div className="row">
              <div className="col-lg-4 col-4">
                <img className="footerimg img-fluid" src={footerimg1} alt="" />
              </div>
              <div className="col-lg-4 col-4">
                <img className="footerimg img-fluid" src={footerimg2} alt="" />
              </div>
              <div className="col-lg-4 col-4">
                <img className="footerimg img-fluid" src={footerimg3} alt="" />
              </div>
              <div className="col-lg-4 col-4">
                <img className="footerimg img-fluid" src={footerimg4} alt="" />
              </div>
              <div className="col-lg-4 col-4">
                <img className="footerimg img-fluid" src={footerimg5} alt="" />
              </div>
              <div className="col-lg-4 col-4">
                <img className="footerimg img-fluid" src={footerimg6} alt="" />
              </div>
            </div>
          </div>
        </div>

        <hr />

        <p className="copy">
          &copy; 2023 All rights reserved by <span>Themebea.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
