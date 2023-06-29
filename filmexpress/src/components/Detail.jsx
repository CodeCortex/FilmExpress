import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { useParams } from "react-router-dom";
import { getDoc } from "firebase/firestore";


const Detail = () => {
  const { id } = useParams();
  const [data,setData]=useState({
    title:"",
    year:"",
    image:"",
    description:""
  });
  useEffect(() => {
    async function getData() {


    }
    getData();
  }, []);

  return (
    <div className="p-4 mt-4 w-full flex flex-col md:flex-row items-center md:items-start justify-center">
      <img
        className="h-72 md:sticky md:top-20"
        src="https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg"
        alt=""
      />
      <div className="md:ml-4 ml-0 w-full md:w-1/2 text-gray-400">
        <h1 className="text-3xl font-bold">
          Thor<span className="text-xl">(2014)</span>
        </h1>
        <ReactStars value={4} size={20} half={true} edit={false} />

        <p className="mt-2">
          {" "}
          In 965 AD, Odin, king of Asgard, wages war against the Frost Giants of
          Jotunheim and their leader Laufey, to prevent them from conquering the
          Nine Realms, starting with Earth. The Asgardian warriors defeat the
          Frost Giants in Tønsberg, Norway, and seize the source of their power,
          the Casket of Ancient Winters. In 965 AD, Odin, king of Asgard, wages
          war against the Frost Giants of Jotunheim and their leader Laufey, to
          prevent them from conquering the Nine Realms, starting with Earth. The
          Asgardian warriors defeat the Frost Giants in Tønsberg, Norway, and
          seize the source of their power, the Casket of Ancient Winters.{" "}
        </p>
        
        
        <p className="mt-2">
          {" "}
          In 965 AD, Odin, king of Asgard, wages war against the Frost Giants of
          Jotunheim and their leader Laufey, to prevent them from conquering the
          Nine Realms, starting with Earth. The Asgardian warriors defeat the
          Frost Giants in Tønsberg, Norway, and seize the source of their power,
          the Casket of Ancient Winters. In 965 AD, Odin, king of Asgard, wages
          war against the Frost Giants of Jotunheim and their leader Laufey, to
          prevent them from conquering the Nine Realms, starting with Earth. The
          Asgardian warriors defeat the Frost Giants in Tønsberg, Norway, and
          seize the source of their power, the Casket of Ancient Winters.{" "}
        </p>
        <p className="mt-2">
          {" "}
          In 965 AD, Odin, king of Asgard, wages war against the Frost Giants of
          Jotunheim and their leader Laufey, to prevent them from conquering the
          Nine Realms, starting with Earth. The Asgardian warriors defeat the
          Frost Giants in Tønsberg, Norway, and seize the source of their power,
          the Casket of Ancient Winters. In 965 AD, Odin, king of Asgard, wages
          war against the Frost Giants of Jotunheim and their leader Laufey, to
          prevent them from conquering the Nine Realms, starting with Earth. The
          Asgardian warriors defeat the Frost Giants in Tønsberg, Norway, and
          seize the source of their power, the Casket of Ancient Winters.{" "}
        </p>
      </div>
    </div>
  );
};

export default Detail;
