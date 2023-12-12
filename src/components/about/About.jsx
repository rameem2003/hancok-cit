import React from "react";
import aboutimg from "../../assets/about.png";
import { FaCheck } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h1 className="title left-title">ABOUT THE BIGGEST HANCOK COMMUNITY</h1>

        <div className="row row-1">
          <div className="col-lg-7 col-sm-12 col-md-12 col-12">
            <img className="img-fluid" src={aboutimg} alt="about" />
          </div>
          <div className="col-lg-5 col-sm-12 col-md-12 col-12">
            <h2>MOST POPULAR GAMING PLATFORM.</h2>

            <ul>
              <li>
                <FaCheck size={15} className="list-icon" /> World Bigghest
                Community & Gaming Server
              </li>
              <li>
                <FaCheck size={15} className="list-icon" /> Friendly Clan &
                Mates
              </li>
              <li>
                <FaCheck size={15} className="list-icon" /> We Provide Gaming
                Accesories
              </li>
              <li>
                <FaCheck size={15} className="list-icon" /> Largest Online
                Gaming Community & Shop
              </li>
              <li>
                <FaCheck size={15} className="list-icon" /> Hancok reaches more
                than 150 million monthly users
              </li>
              <li>
                <FaCheck size={15} className="list-icon" /> We are leading
                global media brand for games
              </li>
            </ul>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illo
              sed odio temporibus magni quia eveniet odit placeat repellat quod
              ipsum modi necessitatibus, dolorum officia!
            </p>

            <a href="#" className="button button-black">
              View More <FaAngleDoubleRight className="icon" size={20} />
            </a>
          </div>
        </div>

        <div className="row row-2">
          <div className="col-lg-3 col-sm-6 col-md-6 col-12">
            <AboutCard number="112k" text="Community Earning" />
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6 col-12">
            <AboutCard number="12M" text="Total Memner" />
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6 col-12">
            <AboutCard number="100k" text="Streams Complete" />
          </div>
          <div className="col-lg-3 col-sm-6 col-md-6 col-12">
            <AboutCard number="844" text="Total Sponsers" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
