import React from "react";
import poster1 from "../../assets/poster1.png";
import poster2 from "../../assets/poster2.png";
import poster3 from "../../assets/poster3.png";
import poster4 from "../../assets/poster4.png";
import PosterCard from "./PosterCard";
import Explore from "./Explore";

const Topgames = () => {
  return (
    <section id="topgames">
      <div className="container">
        <h1 className="title right-title">TOP GAMES ON BLACK FRIDAY SALE</h1>

        <div className="row game-poster">
          <PosterCard
            img={poster1}
            text="Horizon Zero Dawn™ Complet..."
            company="Guerrilla Games"
          />
          <PosterCard
            img={poster2}
            text="Disciples: Liberation"
            company="Frima Studio"
          />
          <PosterCard
            img={poster3}
            text="Horizon Zero Dawn™ Complet..."
            company="Guerrilla Games"
          />
          <PosterCard
            img={poster4}
            text="Industries of Titan"
            company="Brace Yourself Games"
          />
        </div>

        <Explore />
      </div>
    </section>
  );
};

export default Topgames;
