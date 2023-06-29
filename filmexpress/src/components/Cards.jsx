import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { Bars } from "react-loader-spinner";
import { getDocs } from "firebase/firestore";
import { moviesRef } from "../firebase/firebase";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _data = await getDocs(moviesRef);
      _data.forEach((doc) => {
        setData((prev) => [...prev,{...(doc.data()),id:doc.id}]);
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
          return (
            <div
              key={i}
              className="cardBgColor font-bold drop-shadow-lg p-2 hover:-translate-y-3 mb-6 transition-all duration-300"
            >
              <img className="md:h-80 h-60" src={e.image} alt="" />
              <h1>
                <span className="text-gray-400">Title: </span>
                {e.title}
              </h1>
              <h1 className="flex items-center">
                <span className="text-gray-400 mr-1">Rating: </span>
                <ReactStars value={5} size={20} half={true} edit={false} />
              </h1>
              <h1>
                <span className="text-gray-400">YEAR: </span>
                {e.year}
              </h1>
            </div>
          );
        })
      )}
    </div>
  );
};
export default Cards;
