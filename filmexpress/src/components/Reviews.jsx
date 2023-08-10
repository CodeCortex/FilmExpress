import React, { useContext, useEffect, useState } from "react";
import ReactStars from "react-stars";
import { reviewsRef, db } from "../firebase/firebase";
import {
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import swal from "sweetalert";
import { Appstate } from "../App";
import { useNavigate } from "react-router-dom";

const Reviews = ({ id, prevRating, userRated }) => {
  const useAppstate = useContext(Appstate);
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState("");
  const [data, setData] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const navigate = useNavigate();

  const sendReview = async () => {
    setLoading(true);
    try {
      if (useAppstate.login) {
        await addDoc(reviewsRef, {
          movieId: id,
          name: useAppstate.userName,
          rating: rating,
          thought: form,
          timestamp: new Date().getTime(),
        });

        const ref = doc(db, "movies", id);
        await updateDoc(ref, {
          rating: prevRating + rating,
          rated: userRated + 1,
        });

        const newReview = {
          name: useAppstate.userName,
          rating: rating,
          thought: form,
          timestamp: new Date().getTime(),
        };
        setData((prevData) => [newReview, ...prevData]);

        setRating(0);
        setForm("");
        swal({
          title: "Review Sent",
          icon: "success",
          buttons: false,
          timer: 3000,
        });
      } else {
        navigate("/login");
      }
    } catch (error) {
      swal({
        title: error.message, // Display the actual error message
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    }
    setLoading(false);
  };

  // Fetching reviews data
  useEffect(() => {
    async function getData() {
      setReviewsLoading(true);
      let quer = query(reviewsRef, where("movieId", "==", id));
      const querySnapshot = await getDocs(quer);

      const reviewsData = [];
      querySnapshot.forEach((doc) => {
        reviewsData.push(doc.data());
      });

      // Sort the reviews based on timestamp (newest at the bottom)
      reviewsData.sort((a, b) => b.timestamp - a.timestamp);
      setData(reviewsData);

      setReviewsLoading(false);
    }
    getData();
  }, [id]); // Include 'id' in the dependency array to fetch new reviews when id changes

  return (
    <div className="mt-4 w-full border-t-2 border-gray-700 ">
      <ReactStars
        size={30}
        half={true}
        value={rating}
        onChange={(rate) => setRating(rate)}
      />

      <input
        value={form}
        onChange={(e) => setForm(e.target.value)}
        placeholder="Share your thoughts..."
        className="w-full p-2 outline-none header"
      />
      <button
        onClick={sendReview}
        className="bg-green-600 flex justify-center w-full p-2"
      >
        <span className="text-white">
          {loading ? <TailSpin height={20} color="white" /> : "Share"}
        </span>
      </button>

      {reviewsLoading ? (
        <div className="mt-5 flex justify-center">
          <ThreeDots height={10} color="white" />
        </div>
      ) : (
        <div>
          {data.map((e, i) => {
            return (
              <div
                className="p-2 w-full mt-2 border-b header border-gray-600"
                key={i}
              >
                <div className="flex items-center">
                  <p className="text-blue-400">{e.name}</p>
                  <p className="ml-2 text-xs">
                    ({new Date(e.timestamp).toLocaleString()})
                  </p>
                </div>
                <ReactStars
                  size={15}
                  half={true}
                  value={e.rating}
                  edit={false}
                />
                <p>{e.thought}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Reviews;
