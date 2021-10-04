import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import pic from "../../images/service.svg";
import "./Services.css";
const Services = () => {
  const [sevices, setServices] = useState([]);
  useEffect(() => {
    fetch("./music_course.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className='join-us servicebanner'>
        <div className='text-bar'>
          <h1 className='fontText'>
            Services <i class='fas fa-volume-up'></i>
          </h1>
        </div>
        <img className='top-image ' src={pic} alt='' />
      </div>

      <div className='pt-5 service container'>
        {sevices.map((sevice) => (
          <Service key={sevice.id} sevice={sevice}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
