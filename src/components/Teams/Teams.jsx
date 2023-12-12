import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import team1 from "../../assets/team-1.png";
import team2 from "../../assets/team-2.png";
import team3 from "../../assets/team-3.png";
import team4 from "../../assets/team-4.png";

const Teams = () => {
  return (
    <section id="teams">
      <div className="container">
        <h1 className="title right-title">MEET OUR PROFESSIONAL ELITE TEAM</h1>

        <div className="row team-section">
          <div className="col-lg-6 col-sm-6 col-12">
            <div className="team-card">
              <img className="img-fluid" src={team1} alt="" />
              <div className="overlay">
                <h2>Paladins</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper
                </p>

                <div className="action">
                  <button>Know More</button>

                  <div className="link">
                    <a href="">
                      <FaFacebookF />
                    </a>
                    <a href="">
                      <FaLinkedinIn />
                    </a>
                    <a href="">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-12">
            <div className="team-card">
              <img className="img-fluid" src={team2} alt="" />
              <div className="overlay">
                <h2>CS:GO</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper
                </p>

                <div className="action">
                  <button>Know More</button>

                  <div className="link">
                    <a href="">
                      <FaFacebookF />
                    </a>
                    <a href="">
                      <FaLinkedinIn />
                    </a>
                    <a href="">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-12">
            <div className="team-card">
              <img className="img-fluid" src={team3} alt="" />
              <div className="overlay">
                <h2>DOTA 2</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper
                </p>

                <div className="action">
                  <button>Know More</button>

                  <div className="link">
                    <a href="">
                      <FaFacebookF />
                    </a>
                    <a href="">
                      <FaLinkedinIn />
                    </a>
                    <a href="">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-12">
            <div className="team-card">
              <img className="img-fluid" src={team4} alt="" />
              <div className="overlay">
                <h2>VALORANT</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper
                </p>

                <div className="action">
                  <button>Know More</button>

                  <div className="link">
                    <a href="">
                      <FaFacebookF />
                    </a>
                    <a href="">
                      <FaLinkedinIn />
                    </a>
                    <a href="">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
