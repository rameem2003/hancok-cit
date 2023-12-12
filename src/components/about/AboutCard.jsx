import React from "react";

const AboutCard = (props) => {
  return (
    <div className="aboutcard">
      <h1>{props.number}</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default AboutCard;
