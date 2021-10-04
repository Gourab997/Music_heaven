import React from "react";
import Musics from "../Musics/Musics";
import pic from "../../images/musics.svg";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className='join-us topbanner'>
        <div className='text-bar'>
          <p className="fontText">
            Lets <i class='fas fa-guitar'></i>
          </p>
          <p>
            Discover the science of song with these online courses exploring the
            full scale of music, from teaching to culture.
          </p>
        </div>
        <img src={pic} alt='' />
      </div>
      <Musics></Musics>
    </div>
  );
};

export default Home;
