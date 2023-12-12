import React from "react";
import tournament_item1 from "../assets/tournament-item1.png";
import tournament_item2 from "../assets/tournament-item2.png";
import tournament_item3 from "../assets/tournament-item3.png";

import game1 from "../assets/game1.png";
import game2 from "../assets/game2.png";
import game3 from "../assets/game3.png";
import game4 from "../assets/game4.png";
import play from "../assets/play-btn.png";

const Stremming = () => {
  return (
    <section id="stremming">
      <div className="container">
        <h1 className="title left-title">LIVE STREAMIN VIDEO BY HANCOK</h1>

        <div className="row games">
          <div className="col-lg-4 col-sm-12 col-12">
            <div className="game-card">
              <img className="img-fluid" src={tournament_item1} alt="" />
              <div className="overlay">
                <img src={play} alt="" />
                <h2>HORIZON ZERO | DAWN</h2>
                <h4>Guerrilla Games</h4>
                <span>Live</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 col-12">
            <div className="game-card">
              <img className="img-fluid" src={tournament_item2} alt="" />
              <div className="overlay">
                <img src={play} alt="" />
                <h2>LEAGUE OF | LEGENDS</h2>
                <h4>Riot Games</h4>
                <span>Live</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 col-12">
            <div className="game-card">
              <img className="img-fluid" src={tournament_item3} alt="" />
              <div className="overlay">
                <img src={play} alt="" />
                <h2>PALADINS</h2>
                <h4>Hi Rez Studios</h4>
                <span>Live</span>
              </div>
            </div>
          </div>
        </div>

        <div className="headtohed">
          <h4>PREVIOUS MATCHES</h4>

          <div className="row scoreline">
            <div className="col-lg-5 col-sm-5 col-12 left-game">
              <img className="img-fluid" src={game1} alt="" />
              <h5>TEAM DELTA</h5>
            </div>
            <div className="col-lg-2 col-sm-2 col-12 score">
              <p>9:12</p>
            </div>
            <div className="col-lg-5 col-sm-5 col-12 right-game">
              <h5>TEAM ALPHA</h5>
              <img className="img-fluid" src={game2} alt="" />
            </div>
          </div>

          <div className="row scoreline">
            <div className="col-lg-5 col-sm-5 col-12 left-game">
              <img className="img-fluid" src={game3} alt="" />
              <h5>TEAM DEVILS</h5>
            </div>
            <div className="col-lg-2 col-sm-2 col-12 score">
              <p>17:8</p>
            </div>
            <div className="col-lg-5 col-sm-5 col-12 right-game">
              <h5>TEAM NINJA</h5>
              <img className="img-fluid" src={game4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stremming;
