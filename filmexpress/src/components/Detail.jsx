import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { ThreeCircles } from "react-loader-spinner";
import Reviews from "./Reviews";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    year: "",
    image: "",
    description: "",
    rating:0,
    rated:0
  });

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function getData() {
      const _doc = doc(db, "movies", id);
      const _data = await getDoc(_doc);
      setData(_data.data());
      setLoading(false)    }
    getData();
  }, []);

  return (
    <div className="p-4 mt-4 w-full flex flex-col md:flex-row items-center md:items-start justify-center">
     {loading?<div className="h-screen justify-center items-center flex "><ThreeCircles color="blue" height={45}/></div>:
      <>
        <img className="h-72 md:sticky md:top-20" src={data.image} alt="" />
        <div className="md:ml-4 ml-0 w-full md:w-1/2 text-gray-400">
          <h1 className="text-3xl font-bold">
            {data.title}
            <span className="text-xl">({data.year})</span>
          </h1>
          <ReactStars value={data.rating/data.rated} size={20} half={true} edit={false} />

          <p className="mt-2">{data.description}</p>
          <Reviews id={id} prevRating={data.rating} userRated={data.rated}/>
        </div>
      </>
      }
    </div>
  );
};

export default Detail;
