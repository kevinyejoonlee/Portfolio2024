import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

import './ImageCollage.css';

import guitar from "../../assets/CollagePhotos/guitar2.jpg"; 
import kcphoto from "../../assets/CollagePhotos/kcphoto3.jpg"; 
import laptop from "../../assets/CollagePhotos/laptop.jpg"; 
import BJJ from "../../assets/CollagePhotos/bjj_win.JPG"; 
import team from "../../assets/CollagePhotos/team_photo.JPG"; 

const ImageCollage = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current.querySelectorAll('.imageFormat'), {
      max: 25,
      speed: 400,
      scale: 1.1
      
    });
  }, []);



  return (
    <section className='ImageCollage'>
      <div className="Collage_Container" ref={tiltRef}>
        <img className="imageFormat" src={guitar} alt=""></img>
        <img className="imageFormat" src={kcphoto} alt="" ></img>
        <img className="imageFormat" src={laptop} alt="" ></img>
        <img className="imageFormat" src={BJJ} alt="" ></img>
        <img className="imageFormat" src={team} alt="" ></img>
      </div>
    </section>
  );
}

export default ImageCollage;
