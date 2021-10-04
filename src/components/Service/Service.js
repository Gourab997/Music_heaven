import React from "react";
import Rating from "react-rating";

import "./Service.css";

const Service = (props) => {
  const { name, description, image, duration, amount, rating } = props.sevice;
  return (
    <div>
      <div>
        <div className='container'></div>
        <div className='cards card'>
          <div className='cards-header card-header'>
            <img src={image} alt='rover' />
          </div>
          <div className='cards-body card-body p-3'>
            <span className='tag tag-teal'>{duration} Months</span>
            <h4 className='pt-3'>{name}</h4>
            <p>{description}</p>
            <div className='user'>
              <div className='user-info'>
                <h6>
                  <Rating
                    fullSymbol='fas fa-star icon-color'
                    emptySymbol='far fa-star icon-color'
                    initialRating={rating}
                    fractions={2}
                    readonly
                  ></Rating>
                </h6>
                <h5>{amount} Taka</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
