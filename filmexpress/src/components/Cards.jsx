import React, { useState } from "react";
import ReactStars from "react-stars";
const Cards = () => {
  const [data, setData] = useState([
    {
      name: "Avengers Endgame",
      rating: 4,
      year: "2019",
      img: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
    },
    {
      name: "Avengers Endgame",
      rating: 4,
      year: "2019",
      img: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
    },
    
  ]);

  return (
    <div className="flex flex-wrap justify-between p-3 mt-3">
      {data.map((e, i) => {
        return (
          <div
            key={i}
            className="cardBgColor font-bold drop-shadow-lg p-2 hover:-translate-y-3 mb-6 transition-all duration-300"
          >
            <img className="h-80" src={e.img} alt="" />
            <h1>
              <span className="text-gray-400">Name: </span>
              {e.name}
            </h1>
            <h1 className="flex items-center">
              <span className="text-gray-400 mr-1">Rating: </span>
              {e.imdb}
              <ReactStars
              value={e.rating}
              edit={false}
              />
            </h1>
            <h1>
              <span className="text-gray-400">YEAR: </span>
              {e.year}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
