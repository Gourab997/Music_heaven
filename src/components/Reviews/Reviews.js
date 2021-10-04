import React, { useEffect, useState } from "react";
import pic from "../../images/Review.svg";
import Review from "../Review/Review";
import "./Reviews.css";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("./review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div className='join-us reviewbanner'>
        <div className='text-bar'>
          <h1 className='fontText' style={{ color: "#FFE8FF" }}>
            Reviews <i class='fas fa-search'></i>
          </h1>
        </div>
        <img src={pic} alt='' />
      </div>
      <div className='m-4 p-4'>
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
