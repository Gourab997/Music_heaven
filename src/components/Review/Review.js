import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import "./Review.css";
const Review = (props) => {
  const { name, review, courseName, image } = props.review;

  return (
    <div>
      <div className='container mb-3'>
        <div className='row'>
          <div className='col-12 mt-3'>
            <div className='card'>
              <div className='card-horizontal'>
                <div class='img-square-wrapper'>
                
                  <img src={image} alt='' />
                </div>
                <div className='card-body align-item-center justify-content-center'>
                  <h4 className='card-title'>{name}</h4>
                  <h5 className='py-3'> Course Name : {courseName} </h5>
                  <p className='card-text fst-italic'>{review}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
