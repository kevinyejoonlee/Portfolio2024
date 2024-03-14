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
    const nodes = tiltRef.current.querySelectorAll('.imageFormat');
    VanillaTilt.init(nodes, {
      max: 25,
      speed: 400,

    });
  
    nodes.forEach((node, index) => {
      const tiltDegree = [0, 2, 3].includes(index) ? 2 : -2; 
      node.style.transform = `rotate(${tiltDegree}deg)`;
    });
    
  }, []);
  

  return (
    <section className='ImageCollage' ref={tiltRef}>
      <div className="Collage_Container">
        <img className="imageFormat" src={guitar} alt="guitar"></img>
        <img className="imageFormat" src={kcphoto} alt="kcphoto"></img>
        <img className="imageFormat" src={laptop} alt="laptop"></img>
        <img className="imageFormat" src={BJJ} alt="BJJ"></img>
        <img className="imageFormat" src={team} alt="team"></img>
      </div>
    </section>
  );
}

export default ImageCollage;
