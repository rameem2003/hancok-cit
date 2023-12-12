import React from "react";

const PosterCard = (props) => {
  return (
    <div className="col-lg-3 col-sm-6 col-6">
      <div className="poster">
        <img className="img-fluid" src={props.img} alt="" />
        <div className="text-area">
          <h2>{props.text}</h2>
          <p>{props.company}</p>
          <div className="price">
            <span className="discount">-40%</span>
            <del>$19.99</del>
            <span>$7.99</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterCard;
