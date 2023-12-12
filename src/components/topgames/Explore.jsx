import React from "react";
import slide_img from "../../assets/slide-img.png";

const Explore = () => {
  return (
    <div className="explore">
      <h4>Hancok Games Catalog</h4>

      <div className="add">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h5>Choose Your Favourite Game</h5>
            <h1>Explore hancok catalog for your next favorite game!</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              culpa ratione enim maiores nisi cupiditate non nesciunt officia
              labore aut? Et, vero!
            </p>

            <button>Browse All</button>
          </div>
          <div className="col-lg-6 col-12 text-center">
            <img className="img-fluid" src={slide_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
