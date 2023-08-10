import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { Bars } from "react-loader-spinner";
import { getDocs } from "firebase/firestore";
import { moviesRef } from "../firebase/firebase";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _data = await getDocs(moviesRef);
      _data.forEach((doc) => {
        // Ensure that rating and rated have default values of 0
        const movieData = {
          ...doc.data(),
          id: doc.id,
          rating: doc.data().rating || 0,
          rated: doc.data().rated || 0,
        };
        setData((prev) => [...prev, movieData]);
      });

      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="flex flex-wrap justify-between px-3 mt-3">
      {loading ? (
        <div className="w-full flex justify-center items-center h-[40rem]">
          <Bars color="blue" />
        </div>
      ) : (
        data.map((e, i) => {
          // Set a default value of 1 for rated to avoid division by zero
          const averageRating = e.rated !== 0 ? e.rating / e.rated : 0;

          return (
            <Link to={`/detail/${e.id}`}>
              <div
                key={i}
                className="cardBgColor font-bold drop-shadow-lg p-2 hover:-translate-y-3 mb-6 transition-all duration-300"
              >
                <img className="md:h-80 h-60" src={e.image} alt="" />
                <h1>{e.title}</h1>
                <h1 className="flex items-center">
                  <span className="text-gray-400 mr-1">Rating: </span>
                  <ReactStars value={averageRating} size={20} half={true} edit={false} />
                </h1>
                <h1>
                  <span className="text-gray-400">YEAR: </span>
                  {e.year}
                </h1>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Cards;
