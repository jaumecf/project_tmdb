import React from "react";

const Detalls = props => {
  let { detalls } = props;

  if (detalls != null) {
    return <div>
        <p>{detalls.original_title}</p>
        <p>Valoració: {detalls.vote_average}</p>
        <p>{detalls.overview}</p>
      </div>;
  } else {
    return <p>Res</p>;
  }
};

export default Detalls;