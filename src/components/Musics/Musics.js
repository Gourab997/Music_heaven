import React, { useEffect, useState } from "react";
import HomeMusic from "../HomeMusic/HomeMusic";
import "./Musics.css";
const Musics = () => {
  const [musics, setMusics] = useState([]);
  useEffect(() => {
    fetch("./music_course.json")
      .then((res) => res.json())
      .then((data) => setMusics(data));
  }, []);
  return (
    <div className='music container '>
      {musics.slice(0, 4).map((music) => (
        <HomeMusic key={music.id} music={music}></HomeMusic>
      ))}
    </div>
  );
};

export default Musics;
